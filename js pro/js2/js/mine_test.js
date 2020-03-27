




//get values

var productName = document.getElementById("pname");
var productPrice = document.getElementById("pprice");
var productCompany = document.getElementById("pcompany");
var productDesc = document.getElementById("pdesc");
var addBtn = document.getElementById("btns");
addBtn.onclick=function()
{
    addproduct();
}
var products;
if(JSON.parse(localStorage.getItem("products")) == null)
    {
        products = [];
    }
else
    {
        products = JSON.parse(localStorage.getItem("products"));
        display();
    }
function addproduct()
{
    var product={
        
        name:productName.value,
        price:productPrice.value,
        company:productCompany.value,
        desc:productDesc.value
    }
    products.push(product);
    localStorage.setItem("products",JSON.stringify(products));

    display();
    clear();
}
                       
//display
function display(){
    var temp="";
for(var i=0;i<products.length;i++)
    {
     temp+='<tr><td>'+products[i].name+'</td>'+'<td>'+products[i].price+'</td>'+'<td>'+products[i].company+'</td><td>'+products[i].desc+'</td><td><button id="dele" class="btn btn-primary" onclick="deleted('+i+')">delete</button>'+'</td></tr>';
        
    }
document.getElementById("tab").innerHTML=temp;
}
function clear()
{
    var disposals= document.getElementsByClassName("form-control");
    for(var i=0;i<disposals.length;i++)
        {
            disposals[i].value="";
        }
}
var delBtn = document.getElementById("del");

delBtn.onclick=function()
{
    products.pop();
        localStorage.setItem("products",JSON.stringify(products));

    display();
}
function deleted(id)
{
    products.splice(id,1);
    localStorage.setItem("products",JSON.stringify(products));
    display();
}
