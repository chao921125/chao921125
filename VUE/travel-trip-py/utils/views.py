from utils.response import UnauthorizedJsonResponse
from functools import wraps


def login_required(view_func):
    """登陆校验：如果用户没有登陆就返回401错误"""
    @wraps(view_func)
    def _wrapped_view(request, *args, **kwargs):
        user = request.user
        if not user.is_authenticated:
            return UnauthorizedJsonResponse()
        return view_func(request, *args, **kwargs)
    return _wrapped_view
