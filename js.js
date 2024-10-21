
// ________________Header Script_________________

window.addEventListener("scroll", function () {
  var header_navbar = document.getElementById("header-navbar");
  if (this.window.scrollY > 250) {
    header_navbar.classList.add("scrolled");
  } else {
    header_navbar.classList.remove("scrolled");
  }
});


// _________________Slider Script_____________________

let slideNum = 0;
let slide = document.getElementsByClassName("sliders");

function slider(){
  for (let i = 0 ; i < slide.length ; i++){
    slide[i].style.display = "none";
  }

  slideNum++;

  if(slideNum > slide.length){
    slideNum = 1;
  }
  
  slide[slideNum - 1].style.display = "block";
  setTimeout(slider,1500);

}

slider();

// _____________second card script____________

let slideIndex = 1;
let slideImg = document.getElementsByClassName("sliders-card2");

function slideBtn(n) {
  showSlider(slideIndex += n);
}

showSlider(slideIndex);

function showSlider(n) {
  if (n > slideImg.length){
    slideIndex = 1
  }

  if (n < 1){
    slideIndex = slideImg.length
  }

  for (let i = 0; i < slideImg.length; i++) {
    slideImg[i].style.display = "none";  
  }
  
  slideImg[slideIndex-1].style.display = ("block");

}


// _____________Third Slide Card_________________


var slideNo = 1;
showDivs(slideNo);
var x = document.getElementsByClassName("sliders-card3");

function currentDiv(n) {
  showDivs(slideNo = n);
}

function showDivs(n) {
  var i;
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideNo = 1}
  if (n < 1) {slideNo = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideNo-1].style.display = "block";  
  dots[slideNo-1].className += " w3-white";
}



// ---------------------------- header background color change ---------------------------

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
          
// ---------------------------- header background color change ---------------------------

