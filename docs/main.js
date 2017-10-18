(function(){
	
	window.onload=function(){
		let box1 = document.getElementById("box1");
		let box2 = document.getElementById("box2");
		let box3 = document.getElementById("box3");
		
		document.getElementById("fm").addEventListener("submit",function(e){
			let tx = box1.value;
			if(tx == ""){
				e.preventDefault();
				return;
			}
			
			box2.value = "<script src=\"https://apis.google.com/js/platform.js\" async defer></script>";
			box3.value = "<div class=\"g-post\" data-href=\""+tx+"\"> </div>";
			
			//alert("generate!");
			e.preventDefault();
		});
		
		document.getElementById("btn2").addEventListener("click",function(){
			box2.select();
			document.execCommand("copy");
			box2.blur();
		});
		
		document.getElementById("btn3").addEventListener("click",function(){
			box3.select();
			document.execCommand("copy");
			box3.blur();
		});
		
		
	};
	
	
	
})();