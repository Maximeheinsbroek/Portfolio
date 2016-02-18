var hamburger = document.getElementById("hamburger");
var menu = document.getElementsByClassName("menu")[0];

hamburger.addEventListener("click", function(){
  menu.classList.toggle("hamburgerActive");
});