/* =========================
   SKILLS PROGRESS ANIMATION
========================= */

document.addEventListener("DOMContentLoaded", function () {
  const skillsSection = document.querySelector(".skills");
  const fills = document.querySelectorAll(".fill");

  if (!skillsSection || !fills.length) return;

  window.addEventListener("scroll", function () {
    const sectionTop = skillsSection.getBoundingClientRect().top;

    const screenHeight = window.innerHeight;

    if (sectionTop < screenHeight - 100) {
      fills.forEach(function (fill) {
        const width = fill.getAttribute("data-width");

        fill.style.width = width;
      });
    }
  });
});
