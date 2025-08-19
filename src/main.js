const TestimonialBtns = document.querySelectorAll(".testimonials__btn");
const TestimonialCards = document.querySelectorAll(".testimonials__carousal");

TestimonialBtns.forEach((btn, btnIndex) => {
  btn.addEventListener("click", (clickedBtn) => {
    TestimonialCards.forEach((card, cardIndex) => {
      if (btnIndex === cardIndex) {
        card.classList.remove("testimonial__hide");
        TestimonialBtns.forEach((b) => {
          b.classList.remove("active__btn");
        });

        clickedBtn.target.classList.add("active__btn");
      } else {
        card.classList.add("testimonial__hide");
      }
    });
  });
});

// Initialize Lenis
const lenis = new Lenis();

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Mobile Nav
const navToggle = document.querySelector("[aria-controls='primary-nav']");
const primaryNav = document.getElementById("primary-nav");

navToggle.addEventListener("click", () => {
  const navOpen = navToggle.getAttribute("aria-expanded");

  if (navOpen === "false") {
    navToggle.setAttribute("aria-expanded", "true");
  } else {
    navToggle.setAttribute("aria-expanded", "false");
  }

  console.log(navOpen);
});
