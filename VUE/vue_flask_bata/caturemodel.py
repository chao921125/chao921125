import base64
import io
import random
import string
from PIL import Image, ImageFont, ImageDraw

# 验证码代码  Pillow生成图形验证码

# 新建一个图层
im = Image.new('RGB', (50, 12), 'white')
# 加载默认字体
font = ImageFont.load_default()
# 获取draw对象
draw = ImageDraw.Draw(im)
# 设置随机4位数字验证码
code = ''.join(random.sample(string.digits, 4))
# 随机颜色
random_color = lambda: (random.randint(32, 127),
                        random.randint(32, 127),
                        random.randint(32, 127))
print(code)
# 将数字输出到图片
for item in range(4):
    draw.text(
        (6 + random.randint(-3, 3) + 10 * item,
         2 + random.randint(-2, 2)),
        text=code[item], fill=random_color(), font=font)

# 保存图片
im.save("test3.png", format="JPEG")

# 重新设置图片大小
im.resize((120, 50))
# 图片转换为Base64字符串
buffered = io.BytesIO()
im.save(buffered, format="JPEG")
img_str = b"data:image/png;base64," + base64.b64encode(buffered.getvalue())
print(img_str)

# from captcha.image import ImageCaptcha
# from random import randint
# list = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
#     'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
#     '', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
# chars = ''
# for i in range(4):
#   chars += list[randint(0, 62)]
# image = ImageCaptcha().generate_image(chars)
#
# image.show()
