from django.contrib.contenttypes.fields import GenericRelation
from django.db import models

from accounts.models import User
from sight.choices import ChoiceClass
from system.models import ImageRelated
from utils.models import CommonModel


class Sight(models.Model):
    name = models.CharField('名称', max_length=64)
    desc = models.CharField('描述', max_length=256)
    main_img = models.ImageField('主图', upload_to='%Y%m/sight/', max_length=256)
    banner_img = models.ImageField('详情主图', upload_to='%Y%m/sight/', max_length=256)
    content = models.TextField('详细', )
    score = models.FloatField('评分', default=5)
    province = models.CharField('省份', max_length=32)
    city = models.CharField('市区', max_length=32)
    area = models.CharField('区/县', max_length=32, null=True)
    town = models.CharField('乡镇', max_length=32, null=True)
    min_price = models.FloatField('最低价格', default=0)
    is_top = models.BooleanField('是否为精选', default=False)
    is_hot = models.BooleanField('是否为热门', default=False)
    is_valid = models.BooleanField('逻辑删除', default=True)
    created_at = models.DateTimeField('创建时间', auto_now_add=True)
    updated_at = models.DateTimeField('修改时间', auto_now=True)

    images = GenericRelation(ImageRelated,
                             verbose_name='关联的图片',
                             related_query_name='rel_sight_images')

    class Meta:
        db_table = 'sight'
        ordering = ['-updated_at']

    def __str__(self):
        return self.name

    @property
    def comment_count(self):
        """评论总数"""
        return self.comments.filter(is_valid=True).count()

    @property
    def image_count(self):
        """景点图片的数量"""
        return self.images.filter(is_valid=True).count()


class Info(models.Model):
    # 景点详情
    sight = models.OneToOneField(Sight, related_name='info_detail', on_delete=models.CASCADE)
    entry_explain = models.CharField('入园参考', max_length=1024, null=True, blank=True)
    play_way = models.TextField('特色玩法', null=True, blank=True)
    tips = models.TextField('温馨提示', null=True, blank=True)
    traffic = models.TextField('交通到达', null=True, blank=True)

    class Meta:
        db_table = 'sight_info'


class Ticket(CommonModel):
    """ 门票 """
    sight = models.ForeignKey(Sight, related_name='tickets', verbose_name='景点门票',
                              on_delete=models.PROTECT)
    name = models.CharField('名称', max_length=128)
    desc = models.CharField('描述', max_length=64, null=True, blank=True)
    types = models.SmallIntegerField('类型',
                                     choices=ChoiceClass.TicketTypes,
                                     default=11,
                                     help_text='默认为成人票')
    price = models.FloatField('价格（原价）')
    discount = models.FloatField('折扣', default=10)
    total_stock = models.PositiveIntegerField('总库存', default=0)
    remain_stock = models.PositiveIntegerField('剩余库存', default=0)
    expire_date = models.IntegerField('有效期', default=1)
    return_policy = models.CharField('退改政策', max_length=64, default='条件退')
    has_invoice = models.BooleanField('是否提供发票', default=True)
    entry_way = models.SmallIntegerField('入园方式',
                                         choices=ChoiceClass.EntryWay,
                                         default=0)
    tips = models.TextField('预定须知', null=True, blank=True)
    remark = models.TextField('其他说明', null=True, blank=True)
    status = models.SmallIntegerField('状态',
                                      choices=ChoiceClass.TicketStatus,
                                      default=1)

    class Meta:
        db_table = 'sight_ticket'
        ordering = ['price', ]

    @property
    def sell_price(self):
        """ 销售价 = 原价 x 折扣 """
        return self.price * self.discount / 10


class Comment(CommonModel):
    """ 评论及回复 """
    user = models.ForeignKey(User, verbose_name='评论人',
                             related_name='comments',
                             on_delete=models.CASCADE)
    sight = models.ForeignKey(Sight, verbose_name='景点',
                              related_name='comments',
                              on_delete=models.CASCADE)
    content = models.TextField('评论内容', blank=True, null=True)
    is_top = models.BooleanField('是否置顶', default=False)
    love_count = models.IntegerField('点赞次数', default=0)
    score = models.FloatField('评分', default=5)

    ip_address = models.CharField('IP地址', blank=True, null=True, max_length=64)
    is_public = models.SmallIntegerField('是否公开', default=1)
    reply = models.ForeignKey(
        'self', blank=True, null=True,
        related_name='reply_comment',
        verbose_name='回复',
        on_delete=models.CASCADE)

    images = GenericRelation(ImageRelated,
                             verbose_name='关联的图片',
                             related_query_name="rel_comment_images")

    class Meta:
        db_table = 'sight_comment'
        ordering = ['-love_count', '-created_at']
