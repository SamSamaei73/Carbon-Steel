

function openSteel(evt, cityName) {
    var i, tabSteels, tablinks;
    tabSteels = document.getElementsByClassName("tabSteels");
    for (i = 0; i < tabSteels.length; i++) {
      tabSteels[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tabsteel");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen2").click();


function openSteel2(evt, cityName) {
    var i, tabSteelsMain, tablinks;
    tabSteelsMain = document.getElementsByClassName("tabSteelsMain");
    for (i = 0; i < tabSteelsMain.length; i++) {
      tabSteelsMain[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tabsteel");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen2").click();





function openNumber(evt, cityName) {
    var i, tabNumber, infoBox;
    tabNumber = document.getElementsByClassName("tabNumber");
    for (i = 0; i < tabNumber.length; i++) {
      tabNumber[i].style.display = "none";
    }
    infoBox = document.getElementsByClassName("infoBox");
    for (i = 0; i < infoBox.length; i++) {
      infoBox[i].className = infoBox[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen3").click();



function openQuestions(evt, cityName) {
    var i, tabQuestion, infoQuestion;
    tabQuestion = document.getElementsByClassName("tabQuestion");
    for (i = 0; i < tabQuestion.length; i++) {
      tabQuestion[i].style.display = "none";
    }
    infoQuestion = document.getElementsByClassName("infoQuestion");
    for (i = 0; i < infoQuestion.length; i++) {
      infoQuestion[i].className = infoQuestion[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen4").click();



