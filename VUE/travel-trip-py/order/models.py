from django.contrib.contenttypes.fields import GenericForeignKey
from django.contrib.contenttypes.models import ContentType
from django.db import models

from accounts.models import User
from order.choices import OrderStatus, OrderTypes
from utils.models import CommonModel


class Order(CommonModel):
    """ 订单 """
    sn = models.CharField('订单编号', max_length=32)
    user = models.ForeignKey(User, related_name='orders', on_delete=models.PROTECT)
    buy_count = models.IntegerField('购买数量', default=1)
    buy_amount = models.FloatField('总价')

    to_user = models.CharField('收货人', max_length=32)
    to_area = models.CharField('省市区', max_length=32, default='')
    to_address = models.CharField('详细地址', max_length=256, default='')
    to_phone = models.CharField('手机号码', max_length=32)

    remark = models.CharField('备注', max_length=255, null=True, blank=True)

    # 快递信息
    express_type = models.CharField('快递', max_length=32, null=True, blank=True)
    express_no = models.CharField('单号', max_length=32, null=True, blank=True)

    status = models.SmallIntegerField('订单状态',
                                      choices=OrderStatus.choices,
                                      default=OrderStatus.SUBMIT)
    types = models.SmallIntegerField('订单类型',
                                     choices=OrderTypes.choices,
                                     default=OrderTypes.SIGHT_TICKET)

    class Meta:
        db_table = 'order'


class OrderItem(CommonModel):
    """ 订单明细 """
    user = models.ForeignKey(User, related_name='order_items',
                             on_delete=models.CASCADE)
    order = models.ForeignKey(Order, verbose_name='订单',
                              related_name='order_items',
                              null=True,
                              on_delete=models.CASCADE)
    # 商品快照
    flash_name = models.CharField('商品名称', max_length=128)
    flash_img = models.ImageField('商品的主图')
    flash_price = models.FloatField('兑换价格')
    flash_origin_price = models.FloatField('原价')
    flash_discount = models.FloatField('折扣')

    count = models.PositiveIntegerField('购买数量')
    amount = models.FloatField('总额')

    status = models.SmallIntegerField('状态',
                                      choices=OrderStatus.choices,
                                      default=OrderStatus.SUBMIT)
    remark = models.CharField('备注', max_length=255, null=True, blank=True)

    # 复合关联 todo？？？？
    content_type = models.ForeignKey(ContentType, on_delete=models.CASCADE)
    object_id = models.PositiveIntegerField()
    content_object = GenericForeignKey('content_type', 'object_id')

    class Meta:
        db_table = 'order_item'


class Payment(CommonModel):
    """ 支付凭证 """

    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='payments')
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='payments')
    amount = models.FloatField('金额', help_text='支付实际的金额')
    sn = models.CharField('流水号', max_length=32)
    third_sn = models.CharField('第三方订单号', max_length=128, null=True, blank=True)

    status = models.SmallIntegerField('支付状态', default=1)

    meta = models.CharField('其他数据', max_length=128, null=True, blank=True)
    remark = models.CharField('备注信息', max_length=128, null=True, blank=True)

    class Meta:
        db_table = 'order_payment'
