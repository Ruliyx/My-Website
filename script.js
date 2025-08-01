// /* Intersection Observer */
// const observer = new IntersectionObserver(
//   (entries) => {
//     /* This callback runs every-time an observer element enter/leaves the viewport */

//     entries.forEach((entry) => {
//       /* To check if an entry is currently intersecting/visible */
//       if (entry.isIntersecting) {
//         console.log(entry);
//         entry.target.classList.add("ani");
//       } else {
//         entry.target.classList.remove("ani");
//       }
//     });
//   },
//   { threshold: 1 }
// );

/* For the observer to observe the .card class */
// const cardElements = document.querySelectorAll(".card");
// cardElements.forEach((el) => observer.observe(el));
// observer.observe(cardElements[0]);

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
