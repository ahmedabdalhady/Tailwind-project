let toggler=document.querySelector(".open-menu");
let nav = document.querySelector("nav");
let close = document.querySelector(".close-menu");
toggler.onclick = function(){
    nav.classList.add("open");
}
close.onclick = function(){
    nav.classList.remove("open");
}