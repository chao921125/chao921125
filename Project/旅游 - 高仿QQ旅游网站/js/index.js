
	var d_Value=$(".search input.txt").val();//获取到他的默认的值
	//获取焦点时
	$(".search input.txt").focus(function(){
	//$(this)同等于我们的 $(".search input.txt")
		if($(this).val()==d_Value){
			$(this).val("");//当前输入框的值设置为空
			//$(this).css("border","1px solid red");
		}
	});
	//失去焦点
	$(".search input.txt").blur(function(){
		if($(this).val()==""){
			$(this).val(d_Value);//给他赋他的初始值
		}
	});

	//二级菜单的实现
	$(".Nav .mainNav ul li").hover(function(){
		$(this).find(".menu").show();//显示 .menu 盒子
		$(this).addClass("hover");//给li添加 class="hover"
	},function(){
		$(this).find(".menu").hide();//隐藏
		$(this).removeClass("hover");//移除 li class="hover"
	});

	//=======广告轮播图的实现=======
	var _index=0;//初始化序列
	var timePlay=null;
	$("#Adv .ImgList").eq(0).show().siblings("div").hide();//最开始显示第一张

	$("ul.button li").hover(function(){/*鼠标在上面*/ 
		clearInterval(timePlay);//清处定时播放器
		_index=$(this).index();//获取当前li序列号
		//alert(_index);//弹窗
		$(this).addClass("hover").siblings().removeClass("hover");//显示按扭
		//fadeIn  淡入  fadeOut 淡出  
		$("#Adv .ImgList").eq(_index).fadeIn().siblings("div").fadeOut();//显示图片
	},function(){/*鼠标移开*/
		autoPlay();//启用定时播放器
	});

	//自动轮播
	//构建自动轮播的函数
	function autoPlay(){
		//alert("sss");
		//设置定时器
		timePlay=setInterval(function(){
			_index++;
			if(_index<4){
				if(_index==3){_index=-1; }//变成-1 
				$("ul.button li").eq(_index).addClass("hover").siblings().removeClass("hover");//显示按扭
				$("#Adv .ImgList").eq(_index).fadeIn().siblings("div").fadeOut();//显示图片
				 
			}else{_index=-1;/*设置序列号为-1,跳到播放第一张图片*/}
		},2000);	
	};
	autoPlay();//调用和执行



	//路线推荐先项卡效果
	//鼠标滑上去的效果 mouseover
	$("ul.select_but li").mouseover(function(){
		$(this).addClass("hover").siblings().removeClass("hover");//改变选项卡样式
		//$(this).index();序列号
		$(".select_con .select_content").eq($(this).index()).show().siblings().hide();//改变内容区

	});

	//路线推荐 图片文字滑动效果
	$("ul.sel_imgList li").hover(function(){
			$(this).find("p").stop().animate({height:"41px"},200)
	},function(){
			$(this).find("p").stop().animate({height:"0px"},200)
			});


//第一部分内容区广告轮播效果
var _index2=0;//定义了序列号变量
var timeInterval=null;
$("ul.Part_ScrollBut li").hover(function(){
		clearInterval(timeInterval);//清除定时器
		_index2=$(this).index();//获取当前的序列号
		$(this).addClass("hover").siblings().removeClass("hover");//当前li添加 class="hover" 其它li移除
		$(".Part_ScrollCon").animate({left:"-"+_index2*339+"px"},1000);
		$("ul.Part_ScrollTxt li").eq(_index2).show().siblings().hide();//序列相同的li显示，其它的隐藏
},function(){autoPlay2();
		
});

//自动轮播
function autoPlay2(){

		timeInterval=setInterval(function(){	
			_index2++;//序列号加1
			if(_index2==4){_index2=-1;}
			if(_index2==5){_index2=0;}
			if(_index2<=4){ 				
				$("ul.Part_ScrollBut li").eq(_index2).addClass("hover").siblings().removeClass("hover");//当前li添加 class="hover" 其它li移除
				$(".Part_ScrollCon").animate({left:"-"+_index2*339+"px"},1000);
				$("ul.Part_ScrollTxt li").eq(_index2).show().siblings().hide();
			}else{_index2=-1;}//这个地方要不要
		},3000);

};
autoPlay2();