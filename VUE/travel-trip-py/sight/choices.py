from django.db import models


class ChoiceClass(models.Model):
    TicketTypes = (
        (11, '成人票'),
        (12, '儿童票'),

    )

    TicketStatus = (
        (1, '开放购买'),
        (0, '暂未开放'),

    )

    EntryWay = (
        (0, '短信换票入园'),
        (1, '凭借验证码入园'),

    )