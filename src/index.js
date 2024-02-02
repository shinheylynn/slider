document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.slides-container img');
  const prevBtn = document.querySelector('.view__btn.prev');
  const nextBtn = document.querySelector('.view__btn.next');
  const indicators = document.querySelectorAll('.indicator');
  const autoplayBtn = document.querySelector('.autoplay-btn');
  let currentIndex = 0;
  let autoplay = false;
  let interval;

  function updateSlide(position) {
      slides.forEach((slide, index) => {
          slide.style.transform = `translateX(${100 * (index - position)}%)`;
      });
      updateIndicators(position);
  }

  function updateIndicators(position) {
      indicators.forEach((indicator, index) => {
          indicator.classList.toggle('active', index === position);
      });
  }

  function goToSlide(slideIndex) {
      currentIndex = (slideIndex + slides.length) % slides.length;
      updateSlide(currentIndex);
  }

  function prevSlide() {
      goToSlide(currentIndex - 1);
  }

  function nextSlide() {
      goToSlide(currentIndex + 1);
  }

  function toggleAutoplay() {
      autoplay = !autoplay;
      if (autoplay) {
          autoplayBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
          interval = setInterval(nextSlide, 2000);
      } else {
          autoplayBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
          clearInterval(interval);
      }
  }

  prevBtn.addEventListener('click', prevSlide);
  nextBtn.addEventListener('click', nextSlide);
  autoplayBtn.addEventListener('click', toggleAutoplay);

  indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => goToSlide(index));
  });

  updateSlide(currentIndex);
});
