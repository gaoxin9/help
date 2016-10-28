function have(id,size){
			var jsonStr = $.cookie("data");
			var arr = JSON.parse(jsonStr);
			for(var i in arr ){
				if(arr[i].pid==id&&arr[i].size==size){
					return true;
				}
			}
			return false;
		}
		function changgenum(id,numbe){
			var jsonStr = $.cookie("data");
			var arr = JSON.parse(jsonStr);
			for(var i in arr ){
				var good = arr[i];
				if(good.pid==id){
					good.num = parseInt(good.num) + parseInt(numbe);
					console.log(good.num)
					break;
				}
			}
			update(arr)
		}
		function update(arr){
			var jsonStr = JSON.stringify(arr);
			$.cookie("data",jsonStr,{expires:7})
		}
		function total(){
			var jsonStr = $.cookie("data");
			var arr = JSON.parse(jsonStr);
			var sum = 0;
			for(var i in arr){
				var good = arr[i];
				console.log(good.num)
				sum = parseInt(sum)+parseInt(good.num)
			}
			return sum
		}