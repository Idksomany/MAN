const menu = document.querySelector(".menu");
const navM = document.querySelector(".nav-mobile");

menu.addEventListener("click", () =>{
    navM.classList.toggle("active");
});

document.querySelector(".nav-mobile ul").forEach(i =>i.addEventListener("click", () => {
   navM.classList.remove("active"); 
}));