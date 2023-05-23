from django.db import models


class CommonModel(models.Model):
    # 模型公共类
    created_at = models.DateTimeField('创建时间', auto_now_add=True)
    updated_at = models.DateTimeField('修改时间', auto_now=True)
    is_valid = models.BooleanField('删除字段', default=True)

    class Meta:
        abstract = True
