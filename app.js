let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
function showSlide(index) {
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  } else {
    slideIndex = index;
  }
  document.querySelector(".slides").style.transform = `translateX(-${
    slideIndex * 100
  }%)`;
}

function changeSlide(direction) {
  showSlide(slideIndex + direction);
}
setInterval(() => {
  changeSlide(1);
}, 8000);
