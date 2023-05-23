from utils.serializers import BaseSerializer


class UserSerializer(BaseSerializer):
    """用户的详细信息"""
    def to_dict(self):
        user = self.obj
        return {
            'username': user.username,
            'nickname': user.nickname,
            'avatar': user.avatar_url
        }


class UserProfileSerializer(BaseSerializer):
    """用户的详细信息"""
    def to_dict(self):
        user = self.obj
        return {
            'real_name': user.real_name,
            'sex': user.sex,
            'sex_display': user.get_sex_display()
        }