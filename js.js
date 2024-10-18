window.addEventListener("scroll", function () {
  var header_navbar = document.getElementById("header-navbar");
  if (this.window.scrollY > 650) {
    header_navbar.classList.add("scrolled");
  } else {
    header_navbar.classList.remove("scrolled");
  }
});

// window.addEventListener("scroll", function () {
//   var nav = document.getElementsByClassName("nav-a");
//   if (this.window.scrollY > 650) {
//     for (let i = 0; i < 3; i++) {
//       nav[i].style.color = "#000";
//     }
//   } else {
//     for (let i = 0; i < 3; i++) {
//       nav[i].style.color = "#fff";
//     }
//   }
// });
