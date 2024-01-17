
function openQuestionsArt(evt, cityName) {
    var i, tabQuestionArt, infoQuestionArt;
    tabQuestionArt = document.getElementsByClassName("tabQuestionArt");
    for (i = 0; i < tabQuestionArt.length; i++) {
      tabQuestionArt[i].style.display = "none";
    }
    infoQuestionArt = document.getElementsByClassName("infoQuestionArt");
    for (i = 0; i < infoQuestionArt.length; i++) {
      infoQuestionArt[i].className = infoQuestionArt[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpenArt").click();



