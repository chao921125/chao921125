from system.serializers import BaseImageSerializer
from utils.serializers import BaseListPageSerilizer,BaseSerializer


class SightListSerializer(BaseListPageSerilizer):
    """景点列表的序列化及get_object的重写"""
    def get_object(self, obj):
        return {
            'id': obj.id,
            'name': obj.name,
            'main_img': obj.main_img.url,
            'score': obj.score,
            'province': obj.province,
            'min_price': obj.min_price,
            'city': obj.city,
            'comment_count': obj.comment_count
        }


class SightDetailSerializer(BaseSerializer):
    def to_dict(self):
        return {
            'id': self.obj.id,
            'name': self.obj.name,
            'desc': self.obj.desc,
            'img': self.obj.banner_img.url,
            'content': self.obj.content,
            'score': self.obj.score,
            'min_price': self.obj.min_price,
            'province': self.obj.province,
            'city': self.obj.city,
            'area': self.obj.area,
            'town': self.obj.town,
            'image_count': self.obj.image_count,
            'comment_count': self.obj.comment_count
        }


class CommentListSerializer(BaseListPageSerilizer):
    """ 评论列表 """

    def get_object(self, obj):
        user = obj.user
        images = []
        for image in obj.images.filter(is_valid=True):
            images.append(BaseImageSerializer(image).to_dict())
        return {
            'user': {
                'pk': user.pk,
                'nickname': user.nickname
            },
            'pk': obj.pk,
            'content': obj.content,
            'is_top': obj.is_top,
            'love_count': obj.love_count,
            'score': obj.score,
            'is_public': obj.is_public,
            'images': images,
            'created_at': obj.created_at.strftime('%Y-%m-%d')
        }


class TicketListSerializer(BaseListPageSerilizer):
    """ 门票列表 """

    def get_object(self, obj):
        return {
            'pk': obj.pk,
            'name': obj.name,
            'desc': obj.desc,
            'types': obj.types,
            'price': obj.price,
            'discount': obj.discount,
            'total_stock': obj.total_stock,
            'remain_stock': obj.remain_stock
        }


class SightInfoSerializer(BaseSerializer):
    """ 景点详情 """

    def to_dict(self):
        obj = self.obj
        return {
            'pk': obj.sight.pk,  # 景点ID
            'entry_explain': obj.entry_explain,
            'play_way': obj.play_way,
            'tips': obj.tips,
            'traffic': obj.traffic,
        }


class TicketDetailSerializer(BaseSerializer):
    def to_dict(self):
        obj = self.obj
        return {
            'pk': obj.pk,
            'name': obj.name,
            'desc': obj.desc,
            'types': obj.types,
            'price': obj.price,
            'sell_price': obj.sell_price,
            'discount': obj.discount,
            'expire_date': obj.expire_date,
            'return_policy': obj.return_policy,
            'has_invoice': obj.has_invoice,
            'entry_way': obj.get_entry_way_display(),
            'tips': obj.tips,
            'remark': obj.remark
        }