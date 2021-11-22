const schemeSVG = document.querySelector(".scheme-svg");
const totalPriceTag = document.querySelector(".price-total");
const menuButton = document.querySelector(".m-menu");
const menu = document.querySelector(".menu");
const date = document.querySelector(".session-date", ".session-day");
let cost = 800;
let totalPrice = 0;
schemeSVG.addEventListener("click", (event) =>{
    if(!event.target.classList.contains("booked") & !event.target.classList.contains("light") & !event.target.classList.contains("kek")){
        event.target.classList.toggle("active");
        totalPrice = schemeSVG.querySelectorAll(".active").length * cost;
        totalPriceTag.textContent = totalPrice; 
    }

})
menuButton.addEventListener('click',() =>{
    menu.classList.toggle("is-open");

})
date.addEventListener("click", (event) =>{
    if(event.target.classList.contains("session-date-item")){
        event.target.classList.toggle("session-date-item-active");
    }
})