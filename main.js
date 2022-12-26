
const navToggle=document.querySelector(".mobile-nav-toggle");
const primaryNav=document.querySelector(".primary-navigation");

navToggle.addEventListener("click",()=>{
    primaryNav.toggleAttribute("data-visible");

    const visibility=primaryNav.hasAttribute("data-visible");
    if(visibility){
        navToggle.setAttribute("aria-expanded",true);
    }
    else
    {
        navToggle.setAttribute("aria-expanded",false);
    }
})