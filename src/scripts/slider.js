document.addEventListener('DOMContentLoaded', () => {
    const sliderContainer = document.querySelector('.slider-container');
    const cards = document.querySelectorAll('.card');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    let currentIndex = 0;
  
    function updateSliderPosition() {
      const offset = -currentIndex * 100;
      sliderContainer.style.transform = `translateX(${offset}%)`;
    }
  
    prevButton.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateSliderPosition();
      }
    });
  
    nextButton.addEventListener('click', () => {
      if (currentIndex < cards.length - 1) {
        currentIndex++;
        updateSliderPosition();
      }
    });
  });
  