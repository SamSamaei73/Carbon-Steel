
function openProducts(evt, cityName) {
    var i, tabProducts, infoProducts;
    tabProducts = document.getElementsByClassName("tabProducts");
    for (i = 0; i < tabProducts.length; i++) {
      tabProducts[i].style.display = "none";
    }
    infoProducts = document.getElementsByClassName("infoProduct");
    for (i = 0; i < infoProducts.length; i++) {
      infoProducts[i].className = infoProducts[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpenPro").click();