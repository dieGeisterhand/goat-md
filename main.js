const hamburger = document.querySelector(".hamburger");

const navMenu = document.querySelector(".nav-bar-option");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})