// var elem1=document.querySelector("#elem1")
// var elem2=document.querySelector("#elem2")
// var elem3=document.querySelector("#elem3")
// var elem4=document.querySelector("#elem4")
// var elem5=document.querySelector("#elem5")

// var elemImg=document.querySelector("#elem1 img")
  
// elem1.addEventListener("mousemove",function(details){
// 	elemImg.style.left=details.x+"px"
// 	elemImg.style.top=details.y+"px"
// })
// elem1.addEventListener("mouseenter",function(details){
// 	elemImg.style.opacity=6
// })
// elem1.addEventListener("mouseleave",function(details){
// 	elemImg.style.opacity=0
// })

var elem=document.querySelectorAll(".elem")

elem.forEach(function(value){
	// console.log(value);
	// console.log(value.childNodes[3]);
	
	value.addEventListener("mouseenter",function(){
		 //  value.style.backgroundColor="red"
		value.childNodes[3].style.opacity=1
		})

	value.addEventListener("mouseleave",function(){
		// value.style.backgroundColor="transparent"
		value.childNodes[3].style.opacity=0
		})

		value.addEventListener("mousemove",function(details){
	     value.childNodes[3].style.left=details.x+"px"
			 value.childNodes[3].style.top=details.y+"px"
			//  value.childNodes[3].style.height="120px"
	})
	
})