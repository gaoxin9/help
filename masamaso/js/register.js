	window.onload = function(){
	//使图片模糊变清晰 一秒后实行
	setTimeout(
			"$('#total').css({'-webkit-filter':'blur(0px)'})"
		,1000)
	//box移动
		var box = document.getElementById("box");
		move(box,"left",800)
		}
