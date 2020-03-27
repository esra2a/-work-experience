
   
var links=document.getElementsByClassName("nav-link");
var term;
   var news;
   var category=`general`;
   var country=`us`;
   var searchInp=document.getElementById("searchInp");
     searchInp.addEventListener("blur",function(){
        term=searchInp.Value;
        globalSeaarch();
     })
    
   
   for( var i=0;i<links.length ;i++){
    links[i].addEventListener("click",function(e){
    category =e.target.innerHTML;
    getnews();
     })
    
    }
    
   getnews();
   function getnews(){
  var req= new XMLHttpRequest();
    var url=`http://newsapi.org/v2/top-headlines?country=`+country+`&category=`+category+`&apiKey=03c39373bd5542eb8000808aab1268cc`;

  req.open("GET",url );
   req.onreadystatechange =function ()
   
   {
 if(req.status==200 && req.readyState==4)
 {

    news=JSON.parse (req.response);
    news=news.articles;
    display();
 
  }
   }
   req.send();
   }
   function display() {

 var temp="";
for(var i=0; i<news.length ; i++){
    temp += `<div class="col-md-4">
<div class="news">
<img src="`+news[i].urlToImage+`" class="img-fluid"/>
 <h5>`+news[i].title+`</h5>
<p class="text-muted" >`+news[i].description+` </p>
<a href="`+news[i].url+`">
 </div>
 
</div>`

}
document.getElementById("newRow").innerHTML=temp;
}
function globalSeaarch(){
    
  var req= new XMLHttpRequest();
  var url=`http://newsapi.org/v2/everything?q=`+term+`&from=2020-02-24&sortBy=publishedAt&apiKey=03c39373bd5542eb8000808aab1268cc
  `;

req.open("GET",url );
 req.onreadystatechange =function ()
 
 {
if(req.status==200 && req.readyState==4)
{

  news=JSON.parse (req.response);
  news=news.articles;
  display();

}
 }
 req.send();
}






