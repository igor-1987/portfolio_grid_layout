const sidebar = document.querySelector("#sidebar");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const date = document.querySelector("#date");

// toggle navbar
navBtn.addEventListener("click", () => {
  sidebar.classList.add("show-sidebar");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
});

// get current year
date.innerHTML = new Date().getFullYear();

// add fixed class to navbar
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 80) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed");
  }
});
