const MEN = document.querySelector('.hello');
const nav = document.querySelector('.nav');
MEN.addEventListener('click', function(){
    MEN.classList.toggle('is-active');
    nav.classList.toggle('is-active');
});
document.querySelector(".nav-mobile ul").forEach(n =>n.addEventListener("click", () => {
    nav.classList.remove("active");
    MEN.classList.remove("active");

 }));