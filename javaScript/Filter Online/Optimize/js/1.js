const img=document.querySelector(".defaultImg"),range=document.querySelectorAll("input");const getFiltres=()=>`grayscale(${f1.value}%)
blur(${f2.value/30}px)
brightness(${f3.value}%)
contrast(${f4.value*2}%)
hue-rotate(${f5.value}deg)
opacity(${f6.value}%)
sepia(${f7.value}%)`;f1.addEventListener("input",function(){img.style.filter=getFiltres();rnageVal.innerHTML=this.value+"%";})
f2.addEventListener("input",function(){img.style.filter=getFiltres();rnageVal2.innerHTML=this.value/30+"px";})
f3.addEventListener("input",function(){img.style.filter=getFiltres();rnageVal3.innerHTML=this.value+"%";})
f4.addEventListener("input",function(){img.style.filter=getFiltres();rnageVal4.innerHTML=this.value*2+"%";})
f5.addEventListener("input",function(){img.style.filter=getFiltres();rnageVal5.innerHTML=this.value+"deg";})
f6.addEventListener("input",function(){img.style.filter=getFiltres();rnageVal6.innerHTML=this.value+"%";})
f7.addEventListener("input",function(){img.style.filter=getFiltres();rnageVal7.innerHTML=this.value+"%";})