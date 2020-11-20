const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

const navLeft = menu.getBoundingClientRect().left;

hamburger.addEventListener("click", () => {
  if (navLeft < 0) {
    menu.classList.toggle("show");
  }
});

gsap.from(".logo", { opacity: 0, duration: 1, delay: 0.5, y: -10 });
gsap.from(".hamburger", { opacity: 0, duration: 1, delay: 0.5, y: -10 });
gsap.from(".cart", { opacity: 0, duration: 1, delay: 1, x: -10 });
gsap.from(".shoe-figure", { opacity: 0, duration: 1, delay: 1.5, x: -100 });
gsap.from(".shoe-img", { opacity: 0, duration: 1, delay: 2, y: -50 });
gsap.from(".dots", { opacity: 0, duration: 1, delay: 2.2, y: 50 });
gsap.from(".shoe-info", { opacity: 0, duration: 1, delay: 2.5, y: -50 });
gsap.from(".size", { opacity: 0, duration: 1, delay: 3, x: -100 });
gsap.from(".count", { opacity: 0, duration: 1, delay: 3, x: 100 });
gsap.from(".price-title", { opacity: 0, duration: 1, delay: 3.5, y: 50 });
gsap.from(".price-button", { opacity: 0, duration: 1, delay: 3.5, y: -50 });
gsap.from(".nav-item", {
  opacity: 0,
  duration: 1,
  delay: 1.2,
  y: 30,
  stagger: 0.2,
});
