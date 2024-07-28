const hamburger = document.querySelector("#hamburger");
const mobilemenu = document.querySelector("#mobile-menu");

function onClick() {
  mobilemenu.classList.toggle("hidden");
}

hamburger.addEventListener("click", onClick);

document.querySelector("#nextBtn").addEventListener("click", function () {
  document.querySelector(".carousel-container").style = "margin-left: -100vw";
});