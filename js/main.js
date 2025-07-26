const sidebar = document.querySelector("#sidebar");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");

// toggle navbar
navBtn.addEventListener("click", () => {
  sidebar.classList.add("show-sidebar");
})

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar")
});