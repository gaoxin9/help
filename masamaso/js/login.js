$(document).ready(function(){ //设置开关
	$(".style").each(function(){
			$(this).on("click",function(){
				$(".style:not('this')").prop("class","style");  //改变点击style的样式
				$(this).prop("class","style active");
				$(".style:not('this')").find("span").prop("class","");
				$(this).find("span").prop("class","active1");
			})
	})
	$(".style:eq(1)").on("click",function(){
					var num = parseInt($("#con").css("top"))
							$("#con").animate({"top":"-400px"},100)
				})
	$(".style:eq(0)").on("click",function(){
					var num = parseInt($("#con").css("top"))
							$("#con").animate({"top":"0px"},100)
				})
	
	//邮箱验证  ； ； 
})