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
			//回到顶部
				$("#skip").on("click",function(){
			          $("html,body").animate({
			             "scrollTop":"0"
			          },500)
			       })
				
	
	
	
	
	
	//尺寸选择
		$("#size").on("mouseenter","li",function(){
//			console.log($(this).index())
			$("#size li").removeClass("active13")
			$("#size li").eq($(this).index()).addClass("active13")
			
			$("#size").on("mouseleave","li",function(){
				$("#size li").removeClass("active13")
			})
			
			$("#size").on("click","li",function(){
				$("#size li").removeClass("active14")
				$("#size li").eq($(this).index()).addClass("active14")
			})
		})
	// 数量选择
		var num = $("#num").find("span").html()
		$("#num").on("click","#add",function(){
			if(num>9){
				num=10;
			}else{
				num++
			}
			$("#num").find("span").html(num)
		})
		$("#num").on("click","#cut",function(){
			if(num<2){
				num=1;
			}else{
				num--
			}
			$("#num").find("span").html(num)
		})
		//左侧选项卡
		$("#select").on("click","li",function(){
			console.log($(this).index())
			$("#select").find("li").removeClass("active12")
			$("#select").find("li").eq($(this).index()).addClass("active12")
			var uu = $("#select").find("li").eq($(this).index()).html();
			console.log(uu)
			$("#show").html("");
			$("#bigbox").html("");
			$(uu).appendTo($("#show"))
			$(uu).appendTo($("#bigbox"))
			
		})
		//放大镜指定放大范围控制
		var tool = document.querySelector("#picshow span")
		var picshow = document.getElementById("picshow")
		var imge = document.getElementById("bigbox")
		var box = document.querySelector("#fangda")
		picshow.onmouseover=function(e){
		var e = window.event||e;
		box.style.display = "block";
		tool.style.display = "block";
		picshow.onmousemove=function(e){
			var e = window.event||e;
			var x = e.pageX-picshow.offsetLeft-tool.offsetWidth/2;
			var y = e.pageY-picshow.offsetTop-tool.offsetHeight/2;
			if(x<0){
				x = 0;
			}
			if(x>picshow.offsetWidth-tool.offsetWidth){
				x = picshow.offsetWidth-tool.offsetWidth;
			}
	if(y<0){
		y = 0;
	}
	if(y>picshow.offsetHeight-tool.offsetHeight){
		y = picshow.offsetHeight-tool.offsetHeight;
	}
			tool.style.top = y+"px";
			tool.style.left = x+"px";
			imge.style.top = -y*3.1+ "px";
			imge.style.left = -x*3.1+ "px";
		}
	}
	$("#picshow").on("mouseleave",function(){
		$("#fangda").hide();
		$("#picshow span").hide();
	})
	
	var id = window.location.href.split(/\?/gi)[1]
	$.get("../js/shopdetails.json",function(data){
		for(var i in data){
			if(data[i].pid==id){
				$("#gps span").append(data[i].title)
				$("#goodname .txt").append(data[i].title+"商品编号<span>"+data[i].pid+"</span>")
				$("#goodprice b").append("<span>特价:</span><span style='font-size:16px;font-weight: bold;margin-right: 10px;'><span id='xianjia'>￥"+data[i].price+"</span>吊牌价:<span id='yuanjia'>￥"+data[i].yuanjia+"</span>")
				$("#peculiarity span").append(data[i].speciality)
				$(data[i].url).each(function(){
					$("#select ul").append("<li><img src='"+this+"' /></li>")
					$("#bigbox").append("<img src='"+this+"' />")
					$("#show").append("<img src='"+this+"' />")
				})
				$("#select ul").find("li").eq(0).addClass("active12");
				console.log(data[i].size)
				var size = data[i].size
				$(size.size1).each(function(){
					console.log(this)
				$("#size").find("ul").append("<li><span>"+this+"</span></li>")
				})
				$(size.size2).each(function(index){
					console.log(index)
				$("#size").find("li").eq(index).append("<em>"+this+"</em>")
				})
			}
		}
	})
	$("#cart").on("click",function(){
		  window.location.href="cart.html";
	})
	
	var data = $.cookie("data");
	var listArr;
	if(data){
		listArr = JSON.parse(data)
	}else{
		$.cookie("data","[]")
		data= $.cookie("data");
		 listArr = JSON.parse(data);
	}
	console.log(listArr)
		
		$("#cir").html(total());
		$("#addcart").on("click",function(){
		//确定尺寸
		var flag = $("#size").find("li").hasClass("active14")
		if(flag==false){
			alert("请选择尺码")
		}else{
			$("#size").find("li").each(function(index){
				 if($("#size").find("li").eq(index).hasClass("active14")==true){
				 	
				 	//获得数据
			 			var pid = $("#goodname .txt").find("span").html();
				 		var pic = $("#select li").eq(0).html();
				 		var size = $("#size").find("span").eq(index).html();
				 		var yuanjia = $("#yuanjia").html();
				 		var xianjia = $("#xianjia").html();
				 		var num = $("#num span").html();
				 		var title = $("#gps span").html();
						var flag=have(pid,size); 
						console.log(flag)
							if(flag==true){
								var numb=$("#num span").html();
								changgenum(pid,numb)
								console.log(window.decodeURIComponent(document.cookie))
								var jsonStr = $.cookie("data");
								var arr = JSON.parse(jsonStr);
								listArr=arr;
								$("#cir").html(total());
							}else if(flag==false){
								var obj = {
						 			pid:pid,
						 			pic:pic,
						 			size:size,
						 			yuanjia:yuanjia,
						 			xianjia:xianjia,
						 			num:num,
						 			title:title,
						 		}
					 			listArr.push(obj); //把数据添加进去
					 		jsonStr = JSON.stringify(listArr); //
					 		$.cookie("data",jsonStr)
					 		console.log(window.decodeURIComponent(document.cookie))
							}
							
				}
			})
		}
	})
		
})
