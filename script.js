/* Intersection Observer */
const observer = new IntersectionObserver(
  (entries) => {
    /* This callback runs every-time an observer element enter/leaves the viewport */

    entries.forEach((entry) => {
      /* To check if an entry is currently intersecting/visible */
      if (entry.isIntersecting) {
        console.log(entry);
        entry.target.classList.add("ani");
      } else {
        entry.target.classList.remove("ani");
      }
    });
  },
  { threshold: 1 }
);

/* For the observer to observe the .card class */
const cardElements = document.querySelectorAll(".card");
cardElements.forEach((el) => observer.observe(el));
// observer.observe(cardElements[0]);
