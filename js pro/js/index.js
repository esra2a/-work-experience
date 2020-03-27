/* var h1s=document.getElementsByClassName("test");
for(var i=0;i<h1s.length;i++){
    h1s[i].addEventListener("click",function(){
        alert('salma')
        
    })
    
}
var x =document.getElementById("myImage");
  
document.addEventListener("mousemove",function(e){
    x.style.left=e.pageX
    x.style.top=e.pageY
    
})*/

var imgs=document.getElementsByClassName("img-item");
var  next=document.getElementById("next");
var prev=document.getElementById("prev");
var wClose=document.getElementById("wClose");
var imgsArray=[];
var currentIndex=0;

var lightboxContainer=document.querySelector(".lightbox-conatiner ");
var lightboxItem=document.querySelector(".lightbox-item");

for (var i=0;i<imgs.length;i++){
imgsArray.push( imgs[i]);
   imgs[i].addEventListener("click",function(e){
       lightboxContainer.classList.add("show");
      currentIndex= imgsArray.indexOf(e.target);
        var imgSrc=e.target.src;
       lightboxItem.style.backgroundImage="url("+imgSrc+")"
       
   })  
 }

next.addEventListener("click",function(){
  nextMove();
})
function nextMove(){
    currentIndex++;
    if(currentIndex==imgsArray.length){
        currentIndex=0;
    }
    lightboxItem.style.backgroundImage="url("+imgsArray[currentIndex].src+")"
  
}




prev.addEventListener("click",function(){
 prevMove();
})

function prevMove(){
       currentIndex--;
    if(currentIndex <0){
        currentIndex=imgsArray.length-1 ;
    }
    lightboxItem.style.backgroundImage="url("+imgsArray[currentIndex].src+")"

}

 
wClose.addEventListener("click",function(){
           lightboxContainer.classList.remove("show");

    
})

  document.addEventListener("keydown",function(e){
       if(e.keyCode==27){//esc
           lightboxContainer.classList.remove("show");
      }
      else if (e.keyCode==39){//next
          nextMove();
      }
      else if(e.keyCode==37){
prevMove();
    
}
      
  })



lightboxContainer.addEventListener("click",function(e){
    if(e.target==lightboxContainer){
           lightboxContainer.classList.remove("show");

    }
    
})









