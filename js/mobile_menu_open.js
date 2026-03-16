const toggle = document.querySelector(".header__nav");
const menu = document.querySelector(".menu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("open"); // openクラスのON/OFF
});
