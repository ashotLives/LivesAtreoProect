for(let i=0;i<range.length;i++){range[i].addEventListener("input",function(){code.innerHTML=`<h2>CSS code</h2>`+`<a id="close">&times;</a>`+`img{`+"<br>"+"     filter: "+getFiltres()+";"+"<br>"+`}`;let closed=document.querySelector("#close");closed.addEventListener("click",function(){code.classList.remove("sideCode")});})}
filterCode.onclick=function(){code.classList.toggle("sideCode");}
code.innerHTML=getFiltres;