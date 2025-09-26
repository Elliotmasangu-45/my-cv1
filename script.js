// Smooth scroll functionality
document.querySelectorAll('.down-arrow').forEach(arrow => {
  arrow.addEventListener('click', () => {
    const section = arrow.closest('.section');
    const next = section.nextElementSibling;
    if (next) {
      next.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Begin button scroll
document.getElementById('beginBtn').addEventListener('click', () => {
  document.getElementById('who').scrollIntoView({ behavior: 'smooth' });
});

// Dummy form submit
document.querySelector('.contact-form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Message sent! (demo only)');
});

// Background slideshow
let slides = document.querySelectorAll('.background-slideshow .slide');
let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

// Start slideshow
showSlide(current);
setInterval(nextSlide, 5000); // Change every 5s
