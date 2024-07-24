const menu = document.getElementById("menu");
const popup = document.getElementById("menu-popup");

menu.addEventListener("click", showMenu);

function showMenu()
{
   popup.style.animation="down 0.5s";
   popup.style.top="0px";
}

const button = document.getElementById("button");
button.addEventListener("click", () =>
{
   popup.style.top = "-1000px";
   popup.style.animation="up 0.5s";
});