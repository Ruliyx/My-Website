const TestimonialBtns = document.querySelectorAll(".testimonials__btn");
const TestimonialCards = document.querySelectorAll(".testimonials__carousal");

// Scroll to top on refresh
history.scrollRestoration = "manual";
window.onbeforeunload = function () {
  stopPropagation();
  window.scrollTo(0, 0);
  preventDefault();
};

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

    //
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
const navList = document.querySelectorAll(".nav-li");

navToggle.addEventListener("click", () => {
  const navOpen = navToggle.getAttribute("aria-expanded");

  if (navOpen === "false") {
    navToggle.setAttribute("aria-expanded", "true");
  } else {
    navToggle.setAttribute("aria-expanded", "false");
  }
});

navList.forEach((li) => {
  li.addEventListener("click", () => {
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// Click on contact to go to bottom of page
const contact = document.querySelector(".contact");

contact.addEventListener("click", () => {
  window.scrollTo(0, document.body.scrollHeight);
  // preventDefault();
});

// Pause animation and transitions on resize
const resizeObserver = new ResizeObserver(() => {
  document.body.classList.add("resizing");

  requestAnimationFrame(() => {
    document.body.classList.remove("resizing");
  });
});

resizeObserver.observe(document.body);
