$(document).ready(function(){
	$.ajax({
		type:"GET",
		url:"../js/menu.json"
	}).done(function(data){
		$(data).each(function(){
			if(this.hot==1){
				$("#navigation_top ul").append("<li><a href='#'>"+this.type+"<img src='../logo/hot.gif'/></a></li>")
			}else{
				$("#navigation_top ul").append("<li><a href='#'>"+this.type+"</a></li>")
			}
		})
	})  //获取上部菜单数据，引入上部菜单中
	
	$("#navigation_bottom").mouseenter(function(){
		$("#navigation_bottom").find("a").css({"color":"#fff"})
		$("#navigation_bottom").find("i").attr("class","arr1")
		
	})
	$("#navigation_bottom").mouseleave(function(){
		$("#navigation_bottom").find("a").css({"color":"#000"})
		$("#navigation_bottom").find("i").attr("class","arr")
		
	})
	
		$.ajax({
		type:"GET",
		url:"../js/menu1.json"
	}).done(function(data){
		$(data).each(function(index,eve){
				$("#navigation_bottom ul").append("<li><a href='#'>"+eve.type+"<i class='arr'></i></a></li>")
		})
	})
	
})
	