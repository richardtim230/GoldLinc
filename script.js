let currentSlide = 0;

function showSlide(index) {

  const slides = document.querySelectorAll('.slide');

  const totalSlides = slides.length;

  if (index >= totalSlides) currentSlide = 0;

  if (index < 0) currentSlide = totalSlides - 1;

  document.querySelector('.slides').style.transform = `translateX(-${currentSlide * 100}%)`;

}

function nextSlide() {

  currentSlide++;

  showSlide(currentSlide);

}

function prevSlide() {

  currentSlide--;

  showSlide(currentSlide);

}