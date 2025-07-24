document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");
  const menuLinks = menu.querySelectorAll("a");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 600) {
        menu.classList.remove("active");
      }
    });
  });
});
