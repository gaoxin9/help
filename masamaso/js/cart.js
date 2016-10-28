$(document).ready(function(){
//	var data = $.cookie("data")
//	if(data){
//		$("#cartlist").css({"display":"block"})
//		$("#nogood").css({"display":"none"})
//		$("#mid span").css({"display":"block"})
//	}else{
//		$("#nogood").css({"display":"block"})
//		$("#cartlist").css({"display":"none"})
//		$("#mid").find("span").css({"display":"none"})
//	}
	var total = total();
	if(total==0){
		$("#nogood").css({"display":"block"})
		$("#cartlist").css({"display":"none"})
		$("#mid").find("span").css({"display":"none"})
	}else{
		$("#nogood").css({"display":"block"})
		$("#cartlist").css({"display":"none"})
		$("#mid").find("span").css({"display":"none"})
	}
})
