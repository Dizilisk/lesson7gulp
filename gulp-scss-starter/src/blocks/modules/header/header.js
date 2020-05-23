const btn = document.getElementById("openMenu");
const menu = document.getElementById("headerMenu");

btn.addEventListener("click", (event) => {
  menu.classList.toggle("open");
  btn.classList.toggle("opened");
});
