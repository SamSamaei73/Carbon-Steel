
var slideIndex3 = 1;
showDivsCompanyProduct(slideIndex3);

function plusComBig(n) {
  showDivsCompanyProduct(slideIndex3 += n);
}

function showDivsCompanyProduct(n) {
  var i;
  var x = document.getElementsByClassName("companySlides2");
  if (n > x.length) {slideIndex3 = 1}
  if (n < 1) {slideIndex3 = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex3-1].style.display = "block";  
}


