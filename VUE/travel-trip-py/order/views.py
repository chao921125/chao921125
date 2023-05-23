import json

from django import http
from django.db import transaction
from django.db.models import F, Q
from django.shortcuts import render
from django.utils.decorators import method_decorator
from django.views.generic import FormView, ListView
from django.views.generic.detail import BaseDetailView

from order import serializers
from order.choices import OrderStatus
from order.forms import SubmitTicketOrderForm
from order.models import Order
from order.serializers import OrderListSerializer
from utils.response import BadRequestJsonResponse, NotFoundJsonResponse
from utils.views import login_required


@method_decorator(login_required, name='dispatch')
class TicketOrderSubmitView(FormView):
    """门票订单提交接口"""
    form_class = SubmitTicketOrderForm
    http_method_names = ['post']

    def form_invalid(self, form):
        """表单未通过验证"""
        err = json.loads(form.errors.as_json())
        return BadRequestJsonResponse(err)

    def form_valid(self, form):
        # 调用重写的save方法得到一个已经保存到数据库里的Order对象，字段赋值完成了的Order对象，并且传递当前的user过去
        obj = form.save(user=self.request.user)
        return http.JsonResponse({
            'sn': obj.sn
        }, status=201)


@method_decorator(login_required, name='dispatch')
class OrderDetail(BaseDetailView):
    slug_field = 'sn'
    slug_url_kwarg = 'sn'

    def get_queryset(self):
        user = self.request.user
        return Order.objects.filter(user=user, is_valid=True)

    def get(self, request, *args, **kwargs):
        """GET：订单详情"""
        order_obj = self.get_object()
        data = serializers.OrderDetailSerializer(order_obj).to_dict()
        return http.JsonResponse(data)

    @transaction.atomic
    def post(self, request, *args, **kwargs):
        """订单支付"""
        order_obj = self.get_object()
        if order_obj.status == OrderStatus.SUBMIT:
            order_obj.status = OrderStatus.PAID
            order_obj.save()
            order_obj.order_items.update(status=OrderStatus.PAID)
            return http.HttpResponse('', status=201)
        return http.HttpResponse('', status=200)


    @transaction.atomic
    def delete(self, request, *args, **kwargs):
        """订单删除"""
        order_obj = self.get_object()
        if order_obj.status == OrderStatus.PAID or order_obj.status == OrderStatus.CANCELED:
            order_obj.is_valid = False
            order_obj.save()
            return http.HttpResponse('', status=201)
        return http.HttpResponse('', status=200)

    @transaction.atomic
    def put(self, request, *args, **kwargs):
        """订单取消"""
        order_obj = self.get_object()
        if order_obj.status == OrderStatus.SUBMIT:
            # 修改状态
            order_obj.status = OrderStatus.CANCELED
            order_obj.save()
            items = order_obj.order_items.filter(status=OrderStatus.SUBMIT)
            # 加回库存
            for item in items:
                # todo 关联符合模型的时候保存也要保存两层
                obj = item.content_object
                obj.remain_stock = F('remain_stock') + item.count
                obj.save()
            items.update(status=OrderStatus.CANCELED)
            return http.HttpResponse('', status=201)
        return http.HttpResponse('', status=200)


@method_decorator(login_required, name='dispatch')
class OrderListView(ListView):
    """我的订单列表"""
    paginate_by = 10

    def get_queryset(self):
        user = self.request.user
        query = Q(is_valid=True, user=user)
        status = self.request.GET.get('status', None)
        s = Order.objects.filter(query)
        if status != '0' and status:
            query = query & Q(status=status)
        x = Order.objects.filter(query)
        return Order.objects.filter(query)

    def render_to_response(self, context, **response_kwargs):
        page_obj = context['page_obj']
        if page_obj:
            data = OrderListSerializer(page_obj).to_dict()
            return http.JsonResponse(data)
        return NotFoundJsonResponse()

    def get_paginate_by(self, queryset):
        """根据接口餐宿limit来控制分页的大小"""
        page_size = self.request.GET.get('limit', None)
        return page_size or self.paginate_by
