class BaseSerializer(object):
    """自定义序列化函数的基类，传进来一个结果集对象，返回成json格式的数据。
    继承需要重写to_dict()方法
    """

    def __init__(self, obj):
        self.obj = obj

    def to_dict(self):
        return {}


class MetaSerializer(object):
    """
    元数据序列化的基类，至少要传当前页对象进来。可以多传分页总数，总记录数
    """

    def __init__(self, page_obj, page_count=None, total_count=None):
        """
        :param page_obj: 当前页对象
        :param page_count: 总页数
        :param total_count: 总记录数
        """
        self.page = page_obj.number
        self.page_count = page_count if page_count else page_obj.paginator.num_pages
        self.total_count = total_count if total_count else page_obj.paginator.count

    def to_dict(self):
        return {
            'total_count': self.total_count,
            'page_count': self.page_count,
            'current_page': self.page
        }


class BaseListPageSerilizer(object):
    """
    列表序列化基类，把结果集序列化成一个个列表嵌套字典的json数据（分页封装）
    """

    def __init__(self, page_obj, paginator=None, object_list=None):
        """
        :param page_obj: 当前页对象
        :param paginator: 分页器对象，可以不传
        :param object_list: 当前页的数据列表
        """
        self.page_obj = page_obj
        self.paginator = paginator if paginator else page_obj.paginator
        self.object_list = object_list if object_list else page_obj.object_list

    def get_object(self, obj):
        """最后数据的 objects 列表里的单个字典的获取和序列化，需要继承后重写"""
        return {}

    def to_dict(self):
        meta = MetaSerializer(self.page_obj).to_dict()
        objects = []
        # 获取大列表里的每一个字典小元素
        for item in self.object_list:
            objects.append(self.get_object(item))

        return {
            'meta': meta,
            'objects': objects
        }
