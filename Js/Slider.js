var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}



var slideIndex2 = 1;
showDivsCompany(slideIndex);

function plusCom(n) {
  showDivsCompany(slideIndex2 += n);
}

function showDivsCompany(n) {
  var i;
  var x = document.getElementsByClassName("companySlides");
  if (n > x.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex2-1].style.display = "block";  
}



let slideIndex3 = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlidesMain");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex3++;
  if (slideIndex3 > slides.length) {slideIndex3 = 1}
  slides[slideIndex3-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


