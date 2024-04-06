const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot'); 
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let currentSlide = 0;

showSlide(currentSlide);

function updateDot(n) {
  dots.forEach((dot, index) => {
    dot.classList.remove('active');
    if (index === n) {
      dot.classList.add('active');
    }
  });
}

function showSlide(n) {
  slides.forEach((slide, index) => {
    slide.style.display = 'none';
  });
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].style.display = 'flex';
  updateDot(currentSlide);
}

nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));
prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => showSlide(index));
});
