function openUser(evt, cityName) {
    var i, tabUser, Listuser;
    tabUser = document.getElementsByClassName("Info-Tab");
    for (i = 0; i < tabUser.length; i++) {
        tabUser[i].style.display = "none";
    }
    Listuser = document.getElementsByClassName("Listuser");
    for (i = 0; i < Listuser.length; i++) {
        Listuser[i].className = Listuser[i].className.replace(" activeUser", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " activeUser";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultUser").click();