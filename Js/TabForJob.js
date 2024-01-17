
function openSteeProcess(evt, cityName) {
    var i, tabJobProcess, tablinkJob;
    tabJobProcess = document.getElementsByClassName("Tab-job");
    for (i = 0; i < tabJobProcess.length; i++) {
      tabJobProcess[i].style.display = "none";
    }
    tablinkJob = document.getElementsByClassName("Row-Process-job");
    for (i = 0; i < tablinkJob.length; i++) {
      tablinkJob[i].className = tablinkJob[i].className.replace(" activeJob", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " activeJob";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpenJob").click();