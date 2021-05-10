//--java script !--//
var slideIndex = 0;
showSlides();

function showSlides() {
var i;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
for (i = 0; i < slides.length; i++) {
slides[i].style.display = "none";  
}
slideIndex++;
if (slideIndex > slides.length) {slideIndex = 1}    
for (i = 0; i < dots.length; i++) {
dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";  
dots[slideIndex-1].className += " active";
setTimeout(showSlides, 5000); // Change image every 5 seconds
}



// Slide every slideDelay seconds
  const slideDelay = 5000;

  const dynamicSlider = document.getElementById("slider");

  var curSlide = 0;
  window.setInterval(()=>{
    curSlide++;
    if (curSlide === dynamicSlider.childElementCount) {
      curSlide = 0;
    }

    // Actual slide
    dynamicSlider.firstElementChild.style.setProperty("margin-left", "-" + curSlide + "00%");
  }, slideDelay);
