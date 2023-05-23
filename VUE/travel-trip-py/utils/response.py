from django.http import JsonResponse


class NotFoundJsonResponse(JsonResponse):
    """ 400 对应JSON响应 """
    status_code = 400

    def __init__(self, *args, **kwargs):

        data = {
            "error_code": "404000",
            "error_msg": "您访问的内容不存在或已被删除。"
        }
        super().__init__(data, *args, **kwargs)


class BadRequestJsonResponse(JsonResponse):
    # 表单请求验证没有通过，错误显示
    status_code = 400

    def __init__(self, err_list=[], *args, **kwargs):
        data = {
            "error_code": "400000",
            "error_msg": "参数格式不正确。",
            "err_list": err_list
        }
        super().__init__(data, *args, **kwargs)


class MethodNotAllowedJsonResponse(JsonResponse):
    """请求方式不被运行"""
    status_code = 405

    def __init__(self, *args, **kwargs):
        data = {
            "error_code": "400000",
            "error_msg": "请求方式不被运行。",
        }
        super().__init__(data, *args, **kwargs)


class UnauthorizedJsonResponse(JsonResponse):
    """用户未登陆"""
    status_code = 401

    def __init__(self, *args, **kwargs):
        data = {
            "error_code": "401000",
            "error_msg": "请登录。",
        }
        super().__init__(data, *args, **kwargs)


class ServerErrorJsonResponse(JsonResponse):
    """用户为登陆"""
    status_code = 500

    def __init__(self, *args, **kwargs):
        data = {
            "error_code": "500000",
            "error_msg": "服务器正忙，请稍后重试。",
        }
        super().__init__(data, *args, **kwargs)