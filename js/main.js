/* =========================
   SCROLL REVEAL SETTINGS
========================= */

ScrollReveal({
  distance: "80px",

  duration: 1600,

  delay: 150,

  reset: false,

  easing: "cubic-bezier(0.5, 0, 0, 1)",
});

/* =========================
   HOME ANIMATIONS
========================= */

ScrollReveal().reveal(".developer-tag, .home-content h3", {
  origin: "top",
  interval: 150,
});

ScrollReveal().reveal(".home-content h1", {
  origin: "left",
  delay: 300,
});

ScrollReveal().reveal(".home-content p", {
  origin: "left",
  delay: 450,
});

ScrollReveal().reveal(".home-buttons", {
  origin: "bottom",
  delay: 550,
});

ScrollReveal().reveal(".social-media", {
  origin: "bottom",
  delay: 650,
});

ScrollReveal().reveal(".home-img", {
  origin: "right",
  distance: "100px",
  delay: 300,
});

/* =========================
   ABOUT
========================= */

ScrollReveal().reveal(".about-img", {
  origin: "left",
});

ScrollReveal().reveal(".about-content", {
  origin: "right",
});

/* =========================
   EDUCATION
========================= */

ScrollReveal().reveal(".timeline-item", {
  origin: "bottom",
  interval: 200,
});

/* =========================
   SKILLS
========================= */

ScrollReveal().reveal(".skill", {
  origin: "bottom",
  interval: 150,
});

/* =========================
   SERVICES
========================= */

ScrollReveal().reveal(".services-box", {
  origin: "bottom",
  interval: 200,
});

/* =========================
   PROJECTS
========================= */

ScrollReveal().reveal(".works-box", {
  origin: "bottom",
  interval: 200,
});

/* =========================
   CONTACT
========================= */

ScrollReveal().reveal(".contact form", {
  origin: "bottom",
});

/* =========================
   SKILL BAR ANIMATION
========================= */

const skillsSection = document.querySelector(".skills");

const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const fills = document.querySelectorAll(".fill");

        fills.forEach((fill) => {
          const width = fill.getAttribute("data-width");

          fill.style.width = width;
        });

        skillObserver.unobserve(entry.target);
      }
    });
  },

  {
    threshold: 0.3,
  },
);

if (skillsSection) {
  skillObserver.observe(skillsSection);
}

/* =========================
   HERO PARALLAX EFFECT
========================= */

const homeImage = document.querySelector(".home-img");

document.addEventListener("mousemove", (event) => {
  if (!homeImage) return;

  const x = (window.innerWidth / 2 - event.clientX) / 70;

  const y = (window.innerHeight / 2 - event.clientY) / 70;

  homeImage.style.transform = `translate(${x}px, ${y}px)`;
});

/* =========================
   RESET IMAGE POSITION
========================= */

document.addEventListener("mouseleave", () => {
  if (homeImage) {
    homeImage.style.transform = "translate(0, 0)";
  }
});
