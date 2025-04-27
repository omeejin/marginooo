const hamburger = document.querySelector("#hamburger");
const mobilemenu = document.querySelector("#mobile-menu");

function onClick() {
  mobilemenu.classList.toggle("hidden");
}

hamburger.addEventListener("click", onClick);