const slider = document.getElementById('slider');
const sliderItems = document.querySelectorAll('.reviews__slider-item');
const prevBtn = document.getElementById('slider__prev-btn');
const nextBtn = document.getElementById('slider__next-btn');

const slide = () => {
  const size = sliderItems.length;
  let activeIndex = 0;

  const moveSlider = () => {
    const itemWidth = sliderItems[0].offsetWidth;
    const gap = 24;
    const moveWidth = (itemWidth + gap) * activeIndex;
    slider.style.transform = `translateX(-${moveWidth}px)`;
  }

  prevBtn.addEventListener('click', () => {
    if (activeIndex > 0) {
      activeIndex--;
      moveSlider();
    }
  });

  nextBtn.addEventListener('click', () => {
    const windowWidth = window.outerWidth;
    if (windowWidth > 1536 && activeIndex < size - 2) {
      activeIndex++;
      moveSlider();
    }

    if (windowWidth <= 1536 && activeIndex < size - 1) {
      activeIndex++;
      moveSlider();
    }
  });

  window.addEventListener('resize', () => {
    moveSlider();
  })
}

slide();