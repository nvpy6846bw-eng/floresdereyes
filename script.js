/*================================
 FLORES DE REYES
 Website Effects
================================*/


console.log("Flores De Reyes website loaded");



/*===============================
SCROLL FADE ANIMATION
================================*/


const sections = document.querySelectorAll("section");


const observer = new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){

entry.target.classList.add("show");

}


});


},{
threshold:.15

});


sections.forEach(section=>{

observer.observe(section);

});





/*===============================
FAQ ACCORDION
================================*/


const faqButtons = document.querySelectorAll(".faqItem button");


faqButtons.forEach(button=>{


button.addEventListener("click",()=>{


const answer = button.nextElementSibling;

const symbol = button.querySelector("span");



if(answer.style.maxHeight){


answer.style.maxHeight = null;

symbol.textContent="+";


}

else{


document.querySelectorAll(".answer").forEach(item=>{

item.style.maxHeight=null;

});



document.querySelectorAll(".faqItem span").forEach(icon=>{

icon.textContent="+";

});



answer.style.maxHeight = answer.scrollHeight + "px";

symbol.textContent="-";


}



});


});





/*===============================
GALLERY IMAGE LIGHTBOX
================================*/


const galleryImages = document.querySelectorAll(".galleryItem img");



galleryImages.forEach(image=>{


image.addEventListener("click",()=>{


const overlay = document.createElement("div");


overlay.className="imagePopup";



overlay.innerHTML = `

<img src="${image.src}">

`;



document.body.appendChild(overlay);



overlay.addEventListener("click",()=>{


overlay.remove();


});


});


});





/*===============================
ADD LIGHTBOX STYLE
================================*/


const popupStyle = document.createElement("style");


popupStyle.innerHTML = `


.imagePopup{

position:fixed;

inset:0;

background:rgba(0,0,0,.85);

display:flex;

justify-content:center;

align-items:center;

z-index:9999;

padding:30px;

}



.imagePopup img{

max-width:90%;

max-height:90%;

border-radius:20px;

box-shadow:0 0 50px rgba(255,200,200,.5);

}


`;



document.head.appendChild(popupStyle);





/*===============================
NAVBAR SHADOW
================================*/


const nav = document.querySelector("nav");



window.addEventListener("scroll",()=>{


if(window.scrollY > 50){


nav.style.boxShadow =
"0 10px 35px rgba(100,50,50,.15)";


}

else{


nav.style.boxShadow="none";


}


});





/*===============================
SMOOTH INSTAGRAM BUTTON EFFECT
================================*/


const buttons = document.querySelectorAll("a");


buttons.forEach(button=>{


button.addEventListener("mouseenter",()=>{


button.style.transition=".3s";


});


});
