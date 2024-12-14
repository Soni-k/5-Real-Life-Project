let istatus=document.querySelector("h5")
let btn=document.querySelector("#add")
var check=0;

// let remove=document.querySelector("#remove")
// remove.addEventListener("click",function(){
// 	istatus.innerHTML="Stranger";
// 	istatus.style.color="red"
// })

// btn.addEventListener("click",function(){
//    istatus.innerHTML="Friends";
// 	 istatus.style.color="green"
// })

btn.addEventListener("click",function(){
	if(check==0){
       	istatus.innerHTML="Friends😊";
	      istatus.style.color="green";
				btn.innerHTML="Remove Friends";
				check=1
	}
	else{
		  istatus.innerHTML="Stranger";
			istatus.style.color="red"
			btn.innerHTML="Add Friends";
			 check=0
	}

})
