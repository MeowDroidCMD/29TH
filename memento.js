const slides = document.querySelectorAll(".slide");
let current = 0;
const slideDuration = 2000; // 7 seconds
const finalButton = document.getElementById("final-button");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

function nextSlide() {
  current++;
  if (current >= slides.length) {
    // All slides shown, now show final button
    finalButton.style.display = "block";
  } else {
    showSlide(current);
    setTimeout(nextSlide, slideDuration);
  }
}

// Initialize
showSlide(current);
setTimeout(nextSlide, slideDuration);
