/* =========================
   MENU
========================= */

const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");

  navbar.classList.toggle("active");
};

/* =========================
   CLOSE MENU AFTER CLICK
========================= */

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuIcon.classList.remove("bx-x");

    navbar.classList.remove("active");
  });
});

/* =========================
   STICKY HEADER
========================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 80);
});

/* =========================
   ACTIVE NAVIGATION
========================= */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 200;

    const sectionHeight = section.offsetHeight;

    const sectionId = section.getAttribute("id");

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      current = sectionId;
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

/* =========================
   TYPED JS
========================= */

const typed = new Typed(".multiple-text", {
  strings: [
    "Frontend Developer",
    "React Developer",
    "Backend Developer",
    "Full Stack Developer",
  ],

  typeSpeed: 80,

  backSpeed: 50,

  backDelay: 1500,

  loop: true,
});

/* =========================
   SMOOTH NAV EFFECT
========================= */

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (event) {
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
