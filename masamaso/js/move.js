function move(obj,attr,target,fn){

	clearInterval(obj.timer);

	obj.timer =	setInterval(function  (argument) {
			var nowCurrent = 0;
			
			if(attr == "opacity"){

				nowCurrent =  parseFloat( getClass(obj,attr))*100;

			}else{
				
				nowCurrent =  parseInt(getClass(obj,attr));

			};	

			var speed = (target - nowCurrent) / 8;

			// 缓冲运动 速度取整
			speed = speed>0? Math.ceil(speed) : Math.floor(speed);

			if( nowCurrent == target){

				 clearInterval(obj.timer); //清除定时器
				if(fn){
					fn();
				}
			}else{
 				
 				if(attr == "opacity"){
					obj.style[attr] = (nowCurrent+speed)/100;
				 
				}else{

					obj.style[attr] = nowCurrent + speed + "px"; //设置物体运动
				}
 
			}	
	}, 30);
}


function getClass (obj,attr) {
			if(obj.currentStyle){
				return  obj.currentStyle[attr];
			}else{
				return getComputedStyle(obj,false)[attr];
			}
		}	