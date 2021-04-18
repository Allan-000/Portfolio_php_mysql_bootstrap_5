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