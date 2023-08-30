// navbar fixed
window.onscroll = function (e) {
  const header = document.querySelector("header");
  const toTop = document.querySelector("#to-top");
  const sticky = header.offsetTop;

  if (window.pageYOffset > sticky) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};

// hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// diluar hamburger
window.addEventListener("click", (e) => {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// dark mode toogle
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");
const lightText = document.getElementById("light");
const darkText = document.getElementById("dark");

darkToggle.addEventListener("change", () => {
  if (darkToggle.checked) {
    html.classList.add("dark");
    html.localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

//pindah posisi toggle sesuai mode
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}
