let currentSlide = 0;
const slides = document.querySelectorAll('.story-slide');

function nextSlide() {
  if (currentSlide < slides.length - 1) {
    slides[currentSlide].classList.remove('active');
    currentSlide++;
    slides[currentSlide].classList.add('active');
  }
}
