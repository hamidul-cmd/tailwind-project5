let open = document.querySelector(".open");
let close = document.querySelector(".close");
let manu = document.querySelector(".manu");


open.addEventListener("click", () => {
    manu.classList.toggle("active");
    open.style.display = "none";
    close.style.display = "block";
    document.body.classList.toggle("active")

})
close.addEventListener("click", () => {
    manu.classList.toggle("active");
    close.style.display = "none";
    open.style.display = "block";
    document.body.classList.toggle("active")
})

//active nave code 
const navelinks = document.querySelectorAll(".nav__link")
const pathname = window.location.pathname;


navelinks.forEach(navelinks => {
    const navepathname = new URL(navelinks).pathname;
    if(pathname === navepathname) {
        navelinks.classList.add("naveactive")
    }
})