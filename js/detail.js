let minus=document.querySelector('.minus');
let plus=document.querySelector('.plus');
let display=document.querySelector('.number');
let quantity=1;

minus.addEventListener('click',remove);
plus.addEventListener('click',add);

function remove(){
  if(quantity>1){
    quantity--;
    display.innerHTML=quantity;
  }
}
function add(){
  quantity++;
  display.innerHTML=quantity;
}

 // -------------add to detail page-----------------
let productName=document.getElementById("productName");
let productPrice=document.getElementById("productPrice");
let productImage=document.getElementById("productImage");

 productName.innerHTML=localStorage.getItem("itemName");
 productPrice.innerHTML=localStorage.getItem("itemPrice")+" $";
 productImage.setAttribute("src",localStorage.getItem("itemImage"));
