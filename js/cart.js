
//quantity button
let minus=document.querySelectorAll('.minus');
let plus=document.querySelectorAll('.plus');
let display=document.querySelectorAll('.number');
let price=document.querySelectorAll(".price");
let subtotal=document.querySelector(".subtotal");
let taxes=document.querySelector(".taxes");
let total=document.querySelector(".total");
let quantity=[];
let totalPayment=0;
let subtotalPayment=0;
let taxesPayment=0;

minus[0].addEventListener('click',()=>{
  remove(0);
});
plus[0].addEventListener('click',()=>{
  add(0);
});

minus[1].addEventListener('click',()=>{
  remove(1);
});
plus[1].addEventListener('click',()=>{
  add(1);
});

minus[2].addEventListener('click',()=>{
  remove(2);
});
plus[2].addEventListener('click',()=>{
  add(2);
});

quantity.length=3;
initializeArr();
findTotal();

function remove(i){
  if(quantity[i]!=1){
    quantity[i]=quantity[i] - 1;
    display[i].innerHTML=quantity[i];

    totalPayment=0;
    subtotalPayment=0;
    taxesPayment=0;

    findTotal();
   
  }
}
function add(i){
  quantity[i]=quantity[i] + 1;
  display[i].innerHTML=quantity[i];

  totalPayment=0;
  subtotalPayment=0;
  taxesPayment=0;

  findTotal();
 
}

function initializeArr(){
  for(let i=0;i<quantity.length;i++){
    quantity[i]=1;
  }
}

function findTotal(){
  for(let i=0;i<3;i++){
    subtotalPayment += quantity[i] * parseFloat(price[i].value);
  }
  subtotal.innerHTML=subtotalPayment.toFixed(2) + "$";

  taxesPayment = subtotalPayment*0.05;
  taxes.innerHTML=taxesPayment.toFixed(2) + "$";

  totalPayment = subtotalPayment + taxesPayment;
  total.innerHTML=totalPayment.toFixed(2) + "$";
}




  