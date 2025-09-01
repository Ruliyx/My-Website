import { gsap } from "gsap";

gsap.fromTo(
  ".hero-punchline",
  {
    opacity: 0,
    y: 20,
  },
  {
    y: 0,
    opacity: 1,
    delay: "500ms",
    ease: "power1.inOut",
    duration: 1,
  }
);

// gsap.to(".hero::before", {
//   y: 500,
//   duration: 1,
// });
