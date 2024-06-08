let currentIndex = 0;

function showSlide(index) {
  const slides = document.getElementsByClassName('carousel-slide');
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[index].style.display = 'block';
}

function nextSlide() {
  const slides = document.getElementsByClassName('carousel-slide');
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  const slides = document.getElementsByClassName('carousel-slide');
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

document.addEventListener('DOMContentLoaded', () => {
  showSlide(currentIndex);
  setInterval(nextSlide, 7000); 
});