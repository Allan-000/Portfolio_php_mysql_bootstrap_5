//sticky navbar
const navbar=document.querySelector(".navbar");
const sticky = navbar.offsetTop;
// When the user scrolls the page, execute the function
window.onscroll = ()=>{
    if(window.pageYOffset>=sticky){
        navbar.classList.add("sticky")
    }
    else{
        navbar.classList.remove("sticky")
    }
};
//navbar collaping
const collapsingIcon=document.querySelector(".navbar-toggler");
const nav=document.querySelector(".navbar");
const navbarItems=document.querySelectorAll("ul li");
collapsingIcon.addEventListener("click",()=>{
    nav.classList.toggle("collapsed-navbar");
    for(let i=0 ;i<navbarItems.length;i++){
        navbarItems[i].classList.toggle("collapsed-list-items");
    }
})
//theme switcher
const themeButton=document.querySelector(".theme-toggler");
const body=document.querySelector("body");
const texts=document.querySelectorAll("h2, h3, h4, h5, h6, p, label, input, .fa, .contact-links, .gmail-link, .facebook-link, .phone-num");
const horizontalrulers=document.querySelectorAll("hr");
console.log(horizontalrulers)
themeButton.addEventListener("click",()=>{
    body.classList.toggle("themed-body")
    for(let i= 0;i< texts.length; i++){
        texts[i].classList.toggle("themed-text");
    }
    for(let i= 0;i<horizontalrulers.length;i++){
        horizontalrulers[i].classList.toggle("themed-hr");
    }
})
//local storage
