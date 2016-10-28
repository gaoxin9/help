$(document).ready(function(){
	$.get("js/menu.json",function(data){
		str=""
		$(data).each(function(index,eve){
				str+="<li><a href='html/shoplist.html?"+index+"'>"+eve.type+"</a></li>"
		})
				$(str).appendTo("#ul1")
	})
//获取上部菜单数据，引入上部菜单中
	
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
					$(obj).css({"background":"#990101"})
					$(obj1).eq(num).css({"background":"#fff","color":"black"})
					$(obj2).stop().animate({"left":gx-190,"opacity":"1"},500)
					$(obj).on("mouseleave",function(){
						$(obj).css({"background":"black"})
						$(obj1).eq(num).css({"background":"#990101","color":"#fff"})
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
			// 回到顶部
			$("#skip").on("click",function(){
          		$("html,body").animate({
            	 "scrollTop":"0"
          		},500)
      		 })
				
//		$.ajax({
//		type:"GET",
//		url:"js/menu1.json"
//	}).done(function(data){
//		$(data).each(function(index,ele){
//				$("#navigation_bottom").append("<dl><dt><a href='#'>"+this.type+"<i class='arr'></i></a></dt></dl>")	
//				var This = this;
//				$("#navigation_bottom dt").each(function(){
//				if($("#navigation_bottom dt").text()==This.type){
//					$("#navigation_bottom dt").append("<dt><a href='#'>"+This.classfiy+"</a></dt>")
//				}
//				})
//				
//		})
//		})
//	})
//	$.get("js/menu1.json",function(data){//下部菜单 未完成
//				$.each(data,function(index,ele){
////				$("#navigation_bottom").append("<dl><dt><a href='#'>"+ele["type"]+"<i class='arr'></i></a></dt></dl>")
////					$.each(ele["classfiy"],function(i,v){
////					console.log(ele["type"]);
////					})
//				})
//	})	
		//使右侧自适应高度
//		$("#cart").on("mouseenter",function(){
//			var gx = document.body.offsetWidth;
//			console.log(gx)
//			$("#cart").css({"background":"#990101"})
//			$(".cir").eq(0).css({"background":"#fff","color":"black"})
//			$(".mycart").animate({"left":gx-190,"opacity":"1"},500)
//			$("#cart").on("mouseleave",function(){
//				$("#cart").css({"background":"black"})
//				$(".cir").eq(0).css({"background":"#990101","color":"#fff"})
//				$(".mycart").animate({"left":gx-250,"opacity":"0"},500)
//			})
//		})
		
			
			//后台获取轮播图片
			$.get("js/lunbo.json",function(data){
				$(data).each(function(index,eve){
					$("#c_top").append("<li><a href='#'><img src = "+this.url+" /></a></li>")
					$("#bottom").append("<li><a href='#'><img src = "+this.url+" /></a></li>")
					var li = document.querySelectorAll("#c_top li")
					for( var i = 0;i<li.length;i++){
					li[0].className = "active4"
					}
					$("#bottom").find("li").eq(0).addClass("active5")
				})
			})
			//轮播图
			var i = 0;
			var gx = setInterval(xd,3000);
			
			function xd(){
				if(i<$("#c_top li").length-1){
					i++;
				}else{
					i=0;
				}
				change(i)
			}
			
			
			function change(num){
				$("#c_top").find("li").removeClass("active4").hide().eq(num).fadeIn().addClass("active4")
				$("#bottom").find("li").removeClass("active5").eq(num).addClass("active5")			
			}
			$("#c_top").on("mouseenter",function(){
				clearInterval(gx)
			})
			$("#c_top").on("mouseleave",function(){
					gx = setInterval(xd,3000)
			})
			
			$("#bottom").on("mouseenter","li",function(){
						clearInterval(gx)
						var l = $(this).index()
						change(l);
						i=l
				})
			$("#bottom").on("mouseleave","li",function(){
						gx = setInterval(xd,3000)
			})
			
			//下部轮播
			 $.get("js/roll.json",function(data){
			 	$(data).each(function(index,ele){
			 		if(this.red==1){
			 			$(".gund").append("<li><a style='color:red' href='#'>"+this.con+"</a></li>")
			 		}else{
			 			$(".gund").append("<li><a href='#'>"+this.con+"</a></li>")
			 		}
			 	})
			 })
			
				var step = -5;
			var gund =  setInterval(roll,100)
			$(".gund").on("mouseenter",function(){
					clearInterval(gund);
			})
			$(".gund").on("mouseleave",function(){
			gund = setInterval(roll,100)
			})
			function roll(){
				 step= step - 2;
				if(step>-1600){
					$(".gund").css({"left":step+"px"})
				}else{
					step=0;
				}
			}
			
	//滑动门
	$(".type").eq(3).css({"width":"780px"})
	$(".type_top").eq(3).css({"width":"0"})
	$(".type_bottom").eq(3).css({"height":"182px","width":"379px","left":"400px","top":"260px"})
	
	$(".type").each(function(){
		$(".type").eq($(this).index()).css({"background":"url(images/c"+($(this).index()+1)+".jpg) no-repeat"})
		$(".type_top").eq($(this).index()).css({"background":"url(images/b"+($(this).index()+1)+".jpg) no-repeat"})
	})
	
	$(".type").on("mouseenter",function(){
		console.log($(this).index())
		
		type($(this).index())
	})
	
	
	function type(num){
		$(".type").stop().animate({"width":"135px"})
		$(".type_top").stop().animate({"width":"135px"})
		$(".type_bottom").stop().animate({"height":"275px","width":"135px","left":"0","top":"193px"})
		$(".type").eq(num).stop().animate({"width":"780px"})
		$(".type_top").eq(num).stop().animate({"width":"0"})
		$(".type_bottom").eq(num).stop().animate({"height":"182px","width":"379px","left":"400px","top":"260px"})
	}
	$.get("js/good.json",function(data){
		$.each(data, function(index,ele) {
			$("#show_top").append("<li>"+ele.cname+"</li>")
			$("#show_bottom").append("<div class='box'></div>")
		});
		for(var i in data){
				$.each(data[i].con, function() {
					$(".box").eq(i).append("<dl><dt><img src ='"+this.url+"' /></dt><dd>"+this.name+"</dd><dd class='weight'>"+this.price+"</dd></dl>")
				});
			}
			$("#show_top").find("li").eq(0).addClass("active7")
			$(".box").eq(0).clone().appendTo("#show_bottom")
	})
		
	//商品轮播
			var q = 0;
			 function add(){
			 	if(q<$(".box").length-1){
			 		q++;
			 	}else if(q==$(".box").length-1){
			 		q=1;
			 		$("#show_top").find("li").eq(0).addClass("active7")
			 		$("#show_bottom").animate({"left":"9560"})
					$("#show_bottom").css({"left":"0"})	
			 	}else{
			 		alert(1)
			 	}
			 	changge(q)
//			 	console.log(q)
			 }
		$("#show_top").on("click","li",function(){
			$("#show_top").find("li").removeClass("active7")
			$(this).addClass("active7")
			     console.log($(this).index())
			     q = $(this).index()
			     changge(q)
			})
			
			function changge(num){
				$("#show_bottom").stop().animate({"left":num*-1195})
				$("#show_top").find("li").removeClass("active7")
				$("#show_top").find("li").eq(num).addClass("active7")
			}
			var shopp = setInterval(add,5000)
		$("#show_top").on("mouseenter","li",function(){
			clearInterval(shopp)
		})
		$("#show_top").on("mouseleave","li",function(){
				shopp = setInterval(add,5000)
		})
		$("#show_bottom").on("mouseenter","dl",function(){
			clearInterval(shopp)
		})
		$("#show_bottom").on("mouseleave","dl",function(){
				shopp = setInterval(add,5000)
		})
		//图片点击效果
		$(".rela").on("mouseenter",function(){
			var i = $(this).index();
			$("#theme").find("span").eq(i).css({"background":"#990101","color":"#fff"})
			$("#theme").find("span").eq(i).stop().animate({"opacity":"1"},1000)
		})
		$(".rela").on("mouseleave",function(){
			var i = $(this).index();
			$("#theme").find("span").eq(i).css({"background":"#fff","color":"#000"})
			$("#theme").find("span").eq(i).stop().animate({"opacity":"0.7"},1000)
		})
		$(".rela").on("mouseenter",function(){

			var i = $(this).index();
			$("#sutra").find("span").eq(i).css({"background":"#990101","color":"#fff"})
			$("#sutra").find("span").eq(i).stop().animate({"opacity":"1"},1000)
		})
		$(".rela").on("mouseleave",function(){
//			console.log($(this).index())
			var i = $(this).index();
			$("#sutra").find("span").eq(i).css({"background":"#fff","color":"#000"})
			$("#sutra").find("span").eq(i).stop().animate({"opacity":"0.7"},1000)
		})
		$("#foot_pic").on("mouseenter",function(){
			$("#foot_pic").find("span").css({"background":"#990101","color":"#fff"})
			$("#foot_pic").find("span").stop().animate({"opacity":"1"},1000)
		})
		$("#foot_pic").on("mouseleave",function(){
			$("#foot_pic").find("span").css({"background":"#fff","color":"#000"})
			$("#foot_pic").find("span").stop().animate({"opacity":"0.7"},1000)
		})
		
		//滚轮时间
		$(window).scroll( function() {
			var top =document.documentElement.scrollTop||document.body.scrollTop;
//			console.log(top)
			if(top>150){
				$("#navigation_top").find("a").addClass("active10")
				$("#navigation_top").addClass("active9")
			}else{
				$("#navigation_top").find("a").removeClass("active10")
				$("#navigation_top").removeClass("active9")
			}
			
		});		 
});		
