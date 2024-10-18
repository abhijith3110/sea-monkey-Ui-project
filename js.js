window.addEventListener("scroll", function () {
  var headerNavbar = document.getElementById("header-navbar");
  if (this.window.scrollY > 650) {
    headerNavbar.classList.add("scrolled");
  } else {
    headerNavbar.classList.remove("scrolled");
  }
});
