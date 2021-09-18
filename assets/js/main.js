const button = document.querySelector(".menuBtn");

const navBar = document.querySelector(".navigation-bar");

button.addEventListener("click", function () {
  navBar.classList.toggle("show");
});
