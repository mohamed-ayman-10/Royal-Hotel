// Flatpickr
config = {
  enableTime: true,
  dateFormat: "Y-m-d H:i",
};
flatpickr("#Arrival", config);

// WOW
new WOW().init();

// Swiper
const swiper = new Swiper(".swiper", {
  loop: true,
  autoplay: {
    delay: 5000,
  },
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },
});

//  Header Width

let header = document.getElementById("navbar");

window.onscroll = function () {
  if (window.scrollY >= 200) {
    header.style.transition = "5s";
    header.classList.remove("container");
  } else {
    header.style.transition = "5s";
    header.classList.add("container");
  }
};

// Menu
let menu = document.querySelector(".menu");
let span1 = document.querySelector(".menu .span1");
let span2 = document.querySelector(".menu .span2");
let span3 = document.querySelector(".menu .span3");

menu.onclick = function () {
  span2.classList.toggle("close-span")
  span1.classList.toggle("rotate-span1")
  span3.classList.toggle("rotate-span2")
}