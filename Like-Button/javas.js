let con=document.querySelector(".container")
let love=document.querySelector("i")

con.addEventListener("dblclick",function(){
	love.style.transform='translate(-50%,-50%) scale(1)'
	love.style.opacity=0.8

	// heart small size
	setTimeout(function(){
		love.style.transform='translate(-50%,-50%) scale(0)'
	},2000)

	// not small 
	setTimeout(function(){
		love.style.opacity=0
	},1000)
	
})