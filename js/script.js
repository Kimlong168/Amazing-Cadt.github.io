
// hidden navigation bar
let hiddenBar=document.getElementById("hiddenNav");
let menuIcon=document.getElementById("menuIcon");
let backIcon=document.getElementById("backIcon");
let nav=document.getElementById("navAbout");
menuIcon.addEventListener('click',()=>{
  nav.style.zIndex='2';
  hiddenBar.style.zIndex='1';
  hiddenBar.style.transform='translateY(0)';
  backIcon.style.display='table';
  menuIcon.style.display='none';
});

backIcon.addEventListener('click',()=>{
  hiddenBar.style.transform='';
  backIcon.style.display='';
  menuIcon.style.display='';
  hiddenBar.style.zIndex='';
  nav.style.zIndex='';
});

function autoScroll(){
  if(window.pageYOffset > 100){
    hiddenBar.style.transform='';
    backIcon.style.display='';
    menuIcon.style.display='';
    hiddenBar.style.zIndex='';
  }
}

// home page - category box
let categoryLeftBox= document.getElementById("category__slide-left");
let categoryRightBox= document.getElementById("category__slide-right");
let categoryCenterBox= document.getElementById("category__slide-center");
let Category= document.getElementById("Category");
let wave=document.getElementById("wave");
let heroTitle=document.getElementById("heroTitle");
let centerSlideHeight= nav.offsetHeight + heroTitle.offsetHeight + 670;
let navWidth= nav.offsetWidth;

function categoryAnimation(){
  if(window.pageYOffset > 235){
    categoryLeftBox.style.transform="translate(0)";
    categoryRightBox.style.transform="translate(0)";
  }else{
    categoryLeftBox.style.transform="";
    categoryRightBox.style.transform="";
  }
}

function categoryCenterAnimation(){
  if(window.pageYOffset > centerSlideHeight){
    categoryCenterBox.style.transform="translate(0)";
  }else{
    categoryCenterBox.style.transform="";
  }
}

// window object -- scroll
window.onscroll = function(){
  autoScroll();
  categoryAnimation();
  categoryCenterAnimation();
  headerFixed();
}

