"use strict";

// swiper
// var swiper = new Swiper(".mySwiper", {
//     effect: "coverflow",
//     grabCursor: true,
//     centeredSlides: true,
//     slidesPerView: "auto",
//     coverflowEffect: {
//         rotate: 50,
//         stretch: 0,
//         depth: 100,
//         modifier: 1,
//         slideShadows: true,
//     },
//     pagination: {
//         el: ".swiper-pagination",
//     },
// });

var Modal = new HystModal({
  linkAttributeName: "data-hystmodal"
});
lightGallery(document.getElementById('animated-thumbnails-gallery'), {
  thumbnail: true
});
var table = new DataTable('#myTable');