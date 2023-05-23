from django.contrib.contenttypes.fields import GenericForeignKey
from django.contrib.contenttypes.models import ContentType
from django.db import models

# 轮播图模型
from accounts.models import User
from utils.models import CommonModel


class Slider(models.Model):
    name = models.CharField('名称', max_length=32)
    desc = models.CharField('描述', max_length=100, null=True, blank=True)
    types = models.SmallIntegerField('展现的位置', default=10)
    img = models.ImageField('图片地址', max_length=255, upload_to='%Y%m/slider')
    reorder = models.SmallIntegerField('排序字段', default=0, help_text='数字越大越靠前')
    start_time = models.DateTimeField('生效开始时间', null=True, blank=True)
    end_time = models.DateTimeField('生效结束的时间', null=True, blank=True)
    target_url = models.CharField('跳转的地址', max_length=255, null=True, blank=True)
    is_valid = models.BooleanField('删除字段', default=True)
    created_at = models.DateTimeField('创建时间', auto_now_add=True)
    updated_at = models.DateTimeField('修改时间', auto_now=True)

    class Meta:
        db_table = 'system_slider'
        ordering = ['-reorder']


class ImageRelated(CommonModel):
    """ 图片关联 """
    img = models.ImageField('图片', upload_to='%Y%m/file/', max_length=256)
    summary = models.CharField('图片说明', max_length=32, null=True, blank=True)
    user = models.ForeignKey(User,
                             on_delete=models.SET(None),
                             related_name='upload_images',
                             verbose_name='上传的用户',
                             null=True)
    content_type = models.ForeignKey(ContentType, on_delete=models.CASCADE)
    object_id = models.IntegerField('关联的模型')
    content_object = GenericForeignKey('content_type', 'object_id')

    class Meta:
        db_table = 'system_image_related'
