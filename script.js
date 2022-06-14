const bar = document.querySelector(".lines");
const menu = document.querySelector("nav ul");
const items = document.querySelectorAll("nav ul li a");

bar.addEventListener("click", function(){
    menu.classList.toggle("active");
    items.forEach(function(item){
        item.classList.toggle("active");
    })
})