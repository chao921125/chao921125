# 去除关注博主

```JavaScript
var article_content=document.getElementById("article_content");
article_content.removeAttribute("style");

var follow_text=document.getElementsByClassName('follow-text')[0];
follow_text.parentElement.parentElement.removeChild(follow_text.parentElement);

var hide_article_box=document.getElementsByClassName(' hide-article-box')[0];
hide_article_box.parentElement.removeChild(hide_article_box);
```
