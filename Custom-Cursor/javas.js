let main=document.querySelector(".main")
let crur=document.querySelector(".cursor")

main.addEventListener("mousemove", function(details){
	// console.log(details);
	
	crur.style.left=details.x+"px"
	crur.style.top=details.y+"px"

})