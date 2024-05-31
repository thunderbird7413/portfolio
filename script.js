var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

let sections = document.querySelectorAll(".wodka");
let navLinks = document.querySelectorAll("nav li a");
console.log(sections);
console.log(navLinks);

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrolly;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a [href=" + id + "]")
          .classList.add("active");
      });
    }
  });
};
