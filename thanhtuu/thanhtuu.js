const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot'); 

let currentSlide = 0;

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

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => showSlide(index));
  });


showSlide(currentSlide); 