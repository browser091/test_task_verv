setTimeout(function () {
   document.querySelector(".pro").classList.add("pp");
}, 2000);

$(".slider").slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   // autoplay: true,
   autoplaySpeed: 5000,
   arrows: false,
   dots: false,
   centerMode: true,
   centerPadding: "16px",
});

let list = document.querySelector(".price__list");
let item = document.querySelectorAll(".price__item");

for (let i = 0; i < item.length; i++) {
   item[i].addEventListener("click", function (e) {
      e.preventDefault();
      item.forEach((el) => {
         el.classList.remove("price__item_active");
      });
      $(this).addClass("price__item_active");
   });
}

let data = "";
for (let i = 0; i < item.length; i++) {
   item[i].addEventListener("click", function (e) {
      e.preventDefault();
      item.forEach((el) => {
         if (el.classList.contains("price__item_active")) {
            return (data = el.getAttribute("data"));
         }
      });
   });
}

let btn = document.querySelector(".app-footer__btn");

btn.onclick = function () {
   switch (data) {
      case "1":
         window.open("https://www.google.com/search?q=1", "_blank");
         break;
      case "2":
         window.open("https://www.google.com/search?q=2", "_blank");
         break;
      case "3":
         window.open("https://www.google.com/search?q=1", "_blank");
         break;
      default:
         break;
   }
};
btnDark = document.querySelector(".theme-switch-wrapper");
let dark = document.querySelector(".light");

btnDark.onchange = function () {
   dark.classList.toggle("dark");
};
