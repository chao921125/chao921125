from django.http import HttpResponse
from django.shortcuts import render
from django import http
from django.views.generic import ListView, DetailView
from django.db.models import Q

from sight.models import Sight, Info, Comment, Ticket
from sight.serializer_sight import SightListSerializer, SightDetailSerializer, CommentListSerializer, \
    TicketListSerializer, SightInfoSerializer, TicketDetailSerializer
from utils.response import NotFoundJsonResponse


class SightListView(ListView):
    """景点列表"""

    # model = Sight
    # context_object_name = 'my_book_list'
    # queryset = Sight.objects.filter()
    # template_name = 'test.html'

    # 每页放5条数据
    paginate_by = 5

    def get_queryset(self):
        """重写查询方法"""
        query = Q(is_valid=True)
        # 热门景点
        is_hot = self.request.GET.get('is_hot', None)
        if is_hot:
            query = query & Q(is_hot=True)
        # 精选景点
        is_top = self.request.GET.get('is_top', None)
        if is_top:
            query = query & Q(is_top=True)
        #  景点名称搜索
        name = self.request.GET.get('name', None)
        if name:
            query = query & Q(name__icontains=name)

        queryset = Sight.objects.filter(query)

        return queryset

    def render_to_response(self, context, **response_kwargs):
        page_obj = context['page_obj']
        if page_obj:
            data = SightListSerializer(page_obj).to_dict()
            return http.JsonResponse(data)
        else:
            return NotFoundJsonResponse()

    def get_paginate_by(self, queryset):
        """从前端控制每一分页大小"""
        page_size = self.request.GET.get('limit', None)
        return page_size or self.paginate_by


class SightDetailView(DetailView):
    """单个景点的详细信息"""
    def get_queryset(self):
        queryset = Sight.objects.filter()
        return queryset

    def render_to_response(self, context, **response_kwargs):
        detail_obj = context['object']
        if detail_obj and detail_obj.is_valid:
            data = SightDetailSerializer(detail_obj).to_dict()
            return http.JsonResponse(data)
        else:
            return NotFoundJsonResponse()


class SightCommentListView(ListView):
    """景点下的评论列表"""
    paginate_by = 10

    def get_queryset(self):
        """根据景点id查询景点"""
        sight_id = self.kwargs.get('pk', None)
        sight = Sight.objects.filter(pk=sight_id, is_valid=True).first()
        if sight:
            #  模型外键关联设置了related_name关键字参数，可以通过sight.comments反向查表。如果没设置就用"表名_set"
            return sight.comments.filter(is_valid=True)
        return Comment.objects.none()

    def render_to_response(self, context, **response_kwargs):
        """重写响应的返回"""
        page_obj = context['page_obj']
        if page_obj:
            data = CommentListSerializer(page_obj).to_dict()
            return http.JsonResponse(data)
        return NotFoundJsonResponse()


class SightTicketListView(ListView):
    paginate_by = 10

    def get_queryset(self):
        # 根据景点id查询景点门票
        sight_id = self.kwargs.get('pk', None)
        return Ticket.objects.filter(is_valid=True, sight__id=sight_id)

    def render_to_response(self, context, **response_kwargs):
        page_obj = context['page_obj']
        if page_obj:
            data = TicketListSerializer(page_obj).to_dict()
            return http.JsonResponse(data)


class SightInfoDetailView(DetailView):

    def get_queryset(self):
        sight_id = self.kwargs.get('pk', None)
        sight = Sight.objects.filter(is_valid=True, pk=sight_id)
        return sight

    def render_to_response(self, context, **response_kwargs):
        sight = context['object']
        sight_info = sight.info_detail
        if sight_info:
            data = SightInfoSerializer(sight_info).to_dict()
            return http.JsonResponse(data)
        else:
            return NotFoundJsonResponse()


class TicketDetailView(DetailView):
    def get_queryset(self):
        return Ticket.objects.filter(is_valid=True)

    def render_to_response(self, context, **response_kwargs):
        ticket_obj = context['object']
        if ticket_obj:
            data = TicketDetailSerializer(ticket_obj).to_dict()
            return http.JsonResponse(data)
        else:
            return NotFoundJsonResponse()