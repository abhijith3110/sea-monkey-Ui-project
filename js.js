window.addEventListener("scroll", function () {
  var header_navbar = document.getElementById("header-navbar");
  if (this.window.scrollY > 650) {
    header_navbar.classList.add("scrolled");
  } else {
    header_navbar.classList.remove("scrolled");
  }
});
