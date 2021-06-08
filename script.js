//collapsable navbar
const navbarToggler=document.querySelector(".navbar-toggler");
const navbar=document.querySelector(".navbar");
const ul=document.querySelector("ul");
navbarToggler.addEventListener("click",()=>{
    navbar.classList.toggle("collapsed-navbar");
    ul.classList.toggle("collapsed-ul");
})
//sticky navbar
const sticky=navbar.offsetTop;
window.onscroll = ()=>{
    if(window.pageYOffset>=sticky){
        navbar.classList.add("sticky")
    }
    else{
        navbar.classList.remove("sticky")
    }
};
//theme switcher
const texts=document.querySelectorAll("h2, h3, h4, h5, h6, p, label, input, .fa, .contact-links, .gmail-link, .facebook-link, .phone-num");
const themeToggler=document.querySelector(".theme-toggler");
themeToggler.addEventListener("click",()=>{
    for(let i=0 ;i<texts.length;i++){
        texts[i].classList.toggle("themed-texts");
    }
    document.body.classList.toggle("themed-body");
})