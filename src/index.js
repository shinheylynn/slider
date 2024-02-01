
  const slides = document.querySelectorAll('.slides__item');
  const indicators = document.querySelectorAll('.indicator');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');

  let currentSlide = 0; // 현재 슬라이드의 인덱스를 추적합니다.

  // 슬라이드를 보여주는 함수
  function showSlide(index) {
      slides.forEach((slide, i) => {
          slide.style.display = i === index ? 'block' : 'none';
      });
      currentSlide = index;
  }

  // 인디케이터 클릭 이벤트를 처리합니다.
  indicators.forEach((indicator, i) => {
      indicator.addEventListener('click', () => {
          showSlide(i);
      });
  });

  // 'prev' 버튼 클릭 이벤트를 처리합니다.
  prevButton.addEventListener('click', () => {
      let newIndex = currentSlide - 1 < 0 ? slides.length - 1 : currentSlide - 1;
      showSlide(newIndex);
  });

  // 'next' 버튼 클릭 이벤트를 처리합니다.
  nextButton.addEventListener('click', () => {
      let newIndex = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
      showSlide(newIndex);
  });

  // 초기 슬라이드를 설정합니다.
  showSlide(0);

