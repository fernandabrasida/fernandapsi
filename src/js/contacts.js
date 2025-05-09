const carousel = document.querySelector(".carousel")
const slides = document.querySelectorAll(".slide");
let currentIndex = 1;
let animationInterval;

function updateSlides() {
  slides.forEach((slide, index) => {
    slide.classList.remove("active", "left", "right");
    if (index === currentIndex) {
      slide.classList.add("active");
    } else if (index === (currentIndex - 1 + slides.length) % slides.length) {
      slide.classList.add("left");
    } else if (index === (currentIndex + 1) % slides.length) {
      slide.classList.add("right");
    }
  });
}

function startAnimation() {
    animationInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlides();
      }, 3000);
}

function stopAnimation() {
    clearInterval(animationInterval);
}

carousel.addEventListener("mouseenter", stopAnimation);
carousel.addEventListener("mouseleave", startAnimation);


startAnimation();
updateSlides();