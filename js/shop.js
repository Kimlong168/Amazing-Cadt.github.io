
// -----------------------variable------------------------------------
let gridView=document.querySelector(".grid-view-btn");
let listView=document.querySelector(".list-view-btn");
let pricelistContainer=document.querySelector(".pricelist-container");
let pricelistDropdown=document.querySelector(".pricelist-dropdown");
let sortContainer=document.querySelector(".sort-container");
let sortDropdown=document.querySelector(".sort-btn-dropdown");
let get=document.querySelectorAll(".input_type-range");
let put=document.querySelectorAll(".price-range-number-put");
let productBox=document.querySelectorAll(".product-image-container");
let gridBox=document.querySelectorAll(".grid-box-container");
let productInfo=document.querySelectorAll(".product-info-container");
let filterContainer=document.querySelector(".filter-container");
let filerPlusIcon=document.querySelectorAll(".filter-plus-icon");
let filterSortDropdown=document.querySelectorAll(".filter-sort-dropdown");
let hiddenFilterIcon=document.querySelector(".hidden-price-range-btn");
let hiddenFilterContainer=document.querySelector(".filter-container");
let hideFilterIcon=document.querySelector(".hide-filter-icon");
var check=0,check2=0,check3=0;

// ----------------------Fucntion Call---------------------------------

// price range
get[0].addEventListener("change",()=>{
  changeValue(0);
});
get[1].addEventListener("change",()=>{
  changeValue(1);
});

// grid and list view
gridView.addEventListener('click',gridActive);
listView.addEventListener('click',listActive);

// sort and pricelist dropdown
pricelistContainer.addEventListener('click',()=>{
  if(check==0){
    PricelistDropdown();
    removeSortDroplown();
  } 
  else removePricelistDropdown();
});
sortContainer.addEventListener('click',()=>{
  if(check2==0){
    SortDropdown();
    removePricelistDropdown();
  } 
  else removeSortDroplown();
});

// hidden filter bar
filerPlusIcon[0].addEventListener("click",()=>{
  if(check3==0){
    plusFilter(0);
    
  }else{
    removeFilterSortDropdown(0);
  }
});

filerPlusIcon[1].addEventListener("click",()=>{
  if(check3==0){
    plusFilter(1);
  }else{
    removeFilterSortDropdown(1);
  }
});

hiddenFilterIcon.addEventListener("click",showFilterBar);
hideFilterIcon.addEventListener("click",removeFilterBar)

// --------------------------------------- Function -------------------------------------

// ------------- grid and list view
function gridActive(){
  gridView.classList.add("active");
  listView.classList.remove("active");
  document.querySelector(".product-grid-container").style.gridTemplateColumns="";
  for(let i=0;i<productBox.length;i++){
    productBox[i].classList.remove("product-image-container-list");
    gridBox[i].classList.remove("grid-box-container-list");
    productInfo[i].classList.remove("product-info-container-list");
    productInfo[i].classList.add("product-info-container");
  }
}
function listActive(){
  gridView.classList.remove("active");
  listView.classList.add("active");
  document.querySelector(".product-grid-container").style.gridTemplateColumns="1fr";
  for(let i=0;i<productBox.length;i++){
    productBox[i].classList.add("product-image-container-list");
    gridBox[i].classList.add("grid-box-container-list");
    productInfo[i].classList.add("product-info-container-list");
    productInfo[i].classList.remove("product-info-container");

  }
}

// --------------- dropdown
function PricelistDropdown(){
  pricelistDropdown.style.display='block';
  check=1;
}
function removePricelistDropdown(){
  pricelistDropdown.style.display='';
  check=0;
}
function SortDropdown(){
  sortDropdown.style.display="block";
  check2=1;
}
function removeSortDroplown(){
  sortDropdown.style.display="";
  check2=0;
}

// --------- price range
function changeValue(i){
  put[i].innerHTML=get[i].value+".00 $";
}


// --------- ads slider

var counter = 1,check=1;
const myInterval = setInterval(function () {
  if(check==1) counter++;
  else counter--;

  if(counter == 1){
    document.querySelector(".first").style.marginLeft="0";
  }
  if(counter == 2){
    document.querySelector(".first").style.marginLeft="-100%";
  }
  if(counter == 3){
    document.querySelector(".first").style.marginLeft="-200%";
  }
  if(counter == 4){
    document.querySelector(".first").style.marginLeft="-300%";
  }
  if(counter == 5 ){
    document.querySelector(".first").style.marginLeft="-400%";
  }

  if(counter == 5) check=0;
  if(counter == 1) check=1;
}, 4000);

// ----------------hidden filter bar----------------------

function plusFilter(i){
  if(i==1) removeFilterSortDropdown(0);
  else removeFilterSortDropdown(1);
  filterSortDropdown[i].style.display='block';
  filerPlusIcon[i].style.transform="rotate(-45deg)";
  filerPlusIcon[i].style.transition=".2s ease";
  check3=1;
}
function removeFilterSortDropdown(i){
  filterSortDropdown[i].style.display="";
  filerPlusIcon[i].style.transform="";
  check3=0;
}

function showFilterBar(){
  hiddenFilterContainer.style.transform="translate(0)";
  hiddenFilterContainer.style.position="fixed";
  filterContainer.style.display="block";
}
function removeFilterBar(){
  hiddenFilterContainer.style.transform="";
  hiddenFilterContainer.style.position="";
  filterContainer.style.display="";
}

// ------------------------detail product----------------------------

for(let i=0;i<productBox.length;i++){
  productBox[i].addEventListener('click',()=>{
    if(productBox[i].id=="T-shirt"){
      localStorage.setItem("itemName","T-shirt");
      localStorage.setItem("itemPrice","12.00");
      localStorage.setItem("itemImage","../images/clothes/T-shirt.jpg");
    }else if(productBox[i].id=="Jean"){
      localStorage.setItem("itemName","Jean");
      localStorage.setItem("itemPrice","25.00");
      localStorage.setItem("itemImage","../images/clothes/Jean.jpg");
    }else if(productBox[i].id=="Jacket"){
      localStorage.setItem("itemName","Jacket");
      localStorage.setItem("itemPrice","30.00");
      localStorage.setItem("itemImage","../images/clothes/Jacket.jpg");
    }else if(productBox[i].id=="Vest"){
      localStorage.setItem("itemName","Vest");
      localStorage.setItem("itemPrice","25.00");
      localStorage.setItem("itemImage","../images/clothes/vest.jpg");
    }else if(productBox[i].id=="Dress"){
      localStorage.setItem("itemName","Dress");
      localStorage.setItem("itemPrice","10.00");
      localStorage.setItem("itemImage","../images/clothes/dress.webp");
    }else if(productBox[i].id=="Fitted-blazer"){
      localStorage.setItem("itemName","Fitted Blazer");
      localStorage.setItem("itemPrice","57.00");
      localStorage.setItem("itemImage","../images/clothes/Fitted-blazer.jpg");
    }else if(productBox[i].id=="Grapic-T-shirt"){
      localStorage.setItem("itemName","Grapic T-shirt");
      localStorage.setItem("itemPrice","40.00");
      localStorage.setItem("itemImage","../images/clothes/Grapic-T-shirt.jpg");
    }else if(productBox[i].id=="sport-bra"){
      localStorage.setItem("itemName","Sport Bra");
      localStorage.setItem("itemPrice","35.00");
      localStorage.setItem("itemImage","../images/clothes/sport-bra.jpg");
    }else if(productBox[i].id=="lady-top"){
      localStorage.setItem("itemName","Lady Top");
      localStorage.setItem("itemPrice","52.00");
      localStorage.setItem("itemImage","../images/clothes/lady-top.jpg");
    }else if(productBox[i].id=="Sweaterpants"){
      localStorage.setItem("itemName","Sweaterpants");
      localStorage.setItem("itemPrice","85.00");
      localStorage.setItem("itemImage","../images/clothes/Sweaterpants.jpg");
    }else if(productBox[i].id=="Ribbed-T-shirt"){
      localStorage.setItem("itemName","Ribbed T-shirt");
      localStorage.setItem("itemPrice","60.00");
      localStorage.setItem("itemImage","../images/clothes/Ribbed-T-shirt.jpg");
    }else if(productBox[i].id=="Crop-Blouse"){
      localStorage.setItem("itemName","Crop Blouse");
      localStorage.setItem("itemPrice","45.00");
      localStorage.setItem("itemImage","../images/clothes/Crop-Blouse.jpg");
    }
    // alert(localStorage.getItem("itemName"));
  });

}


