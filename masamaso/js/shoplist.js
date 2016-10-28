$(document).ready(function(){
	$.get("../js/menu.json",function(data){
		str=""
		$(data).each(function(index,eve){
				str+="<li><a href='../html/shoplist.html?"+index+"'>"+eve.type+"</a></li>"
		})
				$(str).appendTo("#ul1")
	}) //获取上部菜单数据，引入上部菜单中
	
	$("#navigation_bottom").mouseenter(function(){
		$("#navigation_bottom").find("a").css({"color":"#fff"})
		$("#navigation_bottom").find("i").attr("class","arr1")
		$("#pddown").animate({"height":"232px"},500)
		
	})
	$("#navigation_bottom").mouseleave(function(){
		$("#navigation_bottom").find("a").css({"color":"#000"})
		$("#navigation_bottom").find("i").attr("class","arr")
		$("#pddown").animate({"height":"232"},500)
	})
	test("#cart",".cir",".mycart",0)
		test("#money","cir",".mymoney",1)
		test2("#indent",".myindent")	
		test2("#collect",".mycollect")	
		test2("#service",".myservice")	
		test2("#skip",".mytop")
			function test (obj,obj1,obj2,num){
				$(obj).on("mouseenter",function(){
					var gx = document.body.offsetWidth;
					console.log(gx)
					$(obj).css({"background":"#990101"})
						if(obj1){
							$(obj1).eq(num).css({"background":"#fff","color":"black"})
						}
					$(obj2).stop().animate({"left":gx-190,"opacity":"1"},500)
					$(obj).on("mouseleave",function(){
						$(obj).css({"background":"black"})
						if(obj1){
							$(obj1).eq(0).css({"background":"#990101","color":"#fff"})
						}
					$(obj2).stop().animate({"left":gx-250,"opacity":"0"},500)
					})
				})
			}
			
			function test2 (obj,obj1){
				$(obj).on("mouseenter",function(){
					var gx = document.body.offsetWidth;
					$(obj).css({"background":"#990101"})
					$(obj1).animate({"left":gx-190,"opacity":"1"},500)
					$(obj).on("mouseleave",function(){
						$(obj).css({"background":"black"})
					$(obj1).stop().animate({"left":gx-250,"opacity":"0"},500)
					})
				})
			}
			
			//回到首部
			var id = window.location.href.split(/\?/gi)[1];
			 $("#skip").on("click",function(){
         		$("html,body").animate({
             	"scrollTop":"0"
          		},500)
      		 })
		$.get("../js/list1.json",function(data){
			var str = "";
			var str1 = "";
			for(var i in data){
				if(data[i].id==id){
					str="<li><a href=#"+i+">"+data[i].name+"</a></li>"
					$(str).appendTo("#margin30")
					str1 = "<div class='floor'><div class='title'><a name='"+i+"'>"+data[i].name+"</a></div></div>"
					$(str1).appendTo("#baok")
				}
			}
		})
		$.get("../js/list1.json",function(data){
			
			$.each(data, function(index,ele) {
				var str2 = "";
				if(data[index].id==id){
					var type = data[index].type;
					for(var i in type){
//						console.log(data[index].floor)
						if(type[i].hot==0){
							str2+="<dl><dt><a href='shopdetails.html?"+type[i].pid+"'><img src='"+type[i].url1+"'/></a></dt><dd class='introduce'><a href='#'>针织衬衫款系列/丝滑舒适/桑蝉丝混纺/</a></dd><dd class='evaluate'>等待评价</dd><dd class='price'><span>￥399</span>吊牌价:￥1499</dd></dl>"
						}else if(type[i].hot==1){
							str2+="<dl><dt><a href='shopdetails.html?"+type[i].pid+"'><img src='"+type[i].url1+"'/></a></dt><dd class='introduce'><a href='#'>针织衬衫款系列/丝滑舒适/桑蝉丝混纺/</a></dd><dd class='evaluate'>等待评价</dd><dd class='price'><span>￥399</span>吊牌价:￥1499</dd><img class='hot' src='../images/logo1.png' /></dl>"
						}else if(type[i].hot==2){
							str2+="<dl><dt><a href='shopdetails.html?"+type[i].pid+"'><img src='"+type[i].url1+"'/></a></dt><dd class='introduce'><a href='#'>针织衬衫款系列/丝滑舒适/桑蝉丝混纺/</a></dd><dd class='evaluate'>等待评价</dd><dd class='price'><span>￥399</span>吊牌价:￥1499</dd><img class='hot' src='../images/logo2.png' /></dl>"
						}else{
							str2+="<dl><dt><a href='shopdetails.html?"+type[i].pid+"'><img src='"+type[i].url1+"'/></a></dt><dd class='introduce'><a href='#'>针织衬衫款系列/丝滑舒适/桑蝉丝混纺/</a></dd><dd class='evaluate'>等待评价</dd><dd class='price'><span>￥399</span>吊牌价:￥1499</dd><img class='hot' src='../images/logo3.png' /></dl>"
						}
					}
				$(str2).appendTo($(".floor").eq(data[index].floor))
				}
			})
		})
		$(window).scroll(function(){
			var top =document.documentElement.scrollTop||document.body.scrollTop;
//			console.log(top)
			if(top>544){
				$("#tab3").addClass("active11")
			}else{
				$("#tab3").removeClass("active11")
			}
		})
		
		$.get("../js/list_top.json",function(data){
			for(var i in data){
				var str = "";
				if(data[i].id==id){
					console.log(data[i].url)
					str = "<a href='#'><img src='"+data[i].url+"' /></a>" 
				}
				$(str).appendTo("#s_top")
			}	
		})
})