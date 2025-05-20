// JavaScript-basierte Slideshow
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
const totalSlides = slides.length;
const slideInterval = 5000; // 5 Sekunden

function showNextSlide() {
  // Entferne "active" von der aktuellen Slide
  slides[currentSlide].classList.remove('active');
  // Erhöhe den Index, starte bei Erreichen des Endes von vorne
  currentSlide = (currentSlide + 1) % totalSlides;
  // Setze "active" auf die nächste Slide
  slides[currentSlide].classList.add('active');
}

setInterval(showNextSlide, slideInterval);