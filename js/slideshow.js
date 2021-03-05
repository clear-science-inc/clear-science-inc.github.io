var slideIndex = 1;
var timer;
showSlides(slideIndex);
autoPlaySlides();


function autoPlaySlides() {
  // Autoplays the slideshow until user manually selects a slide
  timer = setInterval(function() {
    showSlides(slideIndex += 1);
  }, 10000);
}

// Arrow next/previous controls
function plusSlides(n) {
  clearInterval(timer);
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  clearInterval(timer);
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("slideshow-dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" slideshow-active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " slideshow-active";
}

function jumpToNewsBlurb(section, blurb) {
  document.getElementById('company_news').scrollIntoView();
  document.getElementById(section).click();
  document.getElementById(blurb).click();  
}