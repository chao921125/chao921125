
	var d_Value=$(".search input.txt").val();//��ȡ������Ĭ�ϵ�ֵ
	//��ȡ����ʱ
	$(".search input.txt").focus(function(){
	//$(this)ͬ�������ǵ� $(".search input.txt")
		if($(this).val()==d_Value){
			$(this).val("");//��ǰ������ֵ����Ϊ��
			//$(this).css("border","1px solid red");
		}
	});
	//ʧȥ����
	$(".search input.txt").blur(function(){
		if($(this).val()==""){
			$(this).val(d_Value);//���������ĳ�ʼֵ
		}
	});

	//�����˵���ʵ��
	$(".Nav .mainNav ul li").hover(function(){
		$(this).find(".menu").show();//��ʾ .menu ����
		$(this).addClass("hover");//��li��� class="hover"
	},function(){
		$(this).find(".menu").hide();//����
		$(this).removeClass("hover");//�Ƴ� li class="hover"
	});

	//=======����ֲ�ͼ��ʵ��=======
	var _index=0;//��ʼ������
	var timePlay=null;
	$("#Adv .ImgList").eq(0).show().siblings("div").hide();//�ʼ��ʾ��һ��

	$("ul.button li").hover(function(){/*���������*/ 
		clearInterval(timePlay);//�崦��ʱ������
		_index=$(this).index();//��ȡ��ǰli���к�
		//alert(_index);//����
		$(this).addClass("hover").siblings().removeClass("hover");//��ʾ��Ť
		//fadeIn  ����  fadeOut ����  
		$("#Adv .ImgList").eq(_index).fadeIn().siblings("div").fadeOut();//��ʾͼƬ
	},function(){/*����ƿ�*/
		autoPlay();//���ö�ʱ������
	});

	//�Զ��ֲ�
	//�����Զ��ֲ��ĺ���
	function autoPlay(){
		//alert("sss");
		//���ö�ʱ��
		timePlay=setInterval(function(){
			_index++;
			if(_index<4){
				if(_index==3){_index=-1; }//���-1 
				$("ul.button li").eq(_index).addClass("hover").siblings().removeClass("hover");//��ʾ��Ť
				$("#Adv .ImgList").eq(_index).fadeIn().siblings("div").fadeOut();//��ʾͼƬ
				 
			}else{_index=-1;/*�������к�Ϊ-1,�������ŵ�һ��ͼƬ*/}
		},2000);	
	};
	autoPlay();//���ú�ִ��



	//·���Ƽ����Ч��
	//��껬��ȥ��Ч�� mouseover
	$("ul.select_but li").mouseover(function(){
		$(this).addClass("hover").siblings().removeClass("hover");//�ı�ѡ���ʽ
		//$(this).index();���к�
		$(".select_con .select_content").eq($(this).index()).show().siblings().hide();//�ı�������

	});

	//·���Ƽ� ͼƬ���ֻ���Ч��
	$("ul.sel_imgList li").hover(function(){
			$(this).find("p").stop().animate({height:"41px"},200)
	},function(){
			$(this).find("p").stop().animate({height:"0px"},200)
			});


//��һ��������������ֲ�Ч��
var _index2=0;//���������кű���
var timeInterval=null;
$("ul.Part_ScrollBut li").hover(function(){
		clearInterval(timeInterval);//�����ʱ��
		_index2=$(this).index();//��ȡ��ǰ�����к�
		$(this).addClass("hover").siblings().removeClass("hover");//��ǰli��� class="hover" ����li�Ƴ�
		$(".Part_ScrollCon").animate({left:"-"+_index2*339+"px"},1000);
		$("ul.Part_ScrollTxt li").eq(_index2).show().siblings().hide();//������ͬ��li��ʾ������������
},function(){autoPlay2();
		
});

//�Զ��ֲ�
function autoPlay2(){

		timeInterval=setInterval(function(){	
			_index2++;//���кż�1
			if(_index2==4){_index2=-1;}
			if(_index2==5){_index2=0;}
			if(_index2<=4){ 				
				$("ul.Part_ScrollBut li").eq(_index2).addClass("hover").siblings().removeClass("hover");//��ǰli��� class="hover" ����li�Ƴ�
				$(".Part_ScrollCon").animate({left:"-"+_index2*339+"px"},1000);
				$("ul.Part_ScrollTxt li").eq(_index2).show().siblings().hide();
			}else{_index2=-1;}//����ط�Ҫ��Ҫ
		},3000);

};
autoPlay2();