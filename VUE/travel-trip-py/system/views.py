import json

from django import http
from django.http import HttpResponse
from django.shortcuts import render
from django.views.generic import FormView

from system.forms import SendSmsCodeForm
from system.models import Slider
from utils.response import ServerErrorJsonResponse, BadRequestJsonResponse


def slider_list(request):
    data = {
        'meta': {

        },
        'objects': []
    }

    queryset = Slider.objects.filter(is_valid=True)
    for item in queryset:
        data['objects'].append({
            'id': item.id,
            'img_url': item.img.url,
            'name': item.name
        })

    # return HttpResponse('1223584')
    return http.JsonResponse(data)


def cache_get(request):
    pass


class SmsCodeView(FormView):
    form_class = SendSmsCodeForm

    def form_valid(self, form):
        """如果表单通过验证"""
        # 生成验证码并发送
        data = form.send_sms_code()
        if data is not None:
            return http.JsonResponse(data, status=201)
        return ServerErrorJsonResponse()

    def form_invalid(self, form):
        """如果表单没有通过验证"""
        err_list = json.loads(form.errors.as_json())
        return BadRequestJsonResponse(err_list)