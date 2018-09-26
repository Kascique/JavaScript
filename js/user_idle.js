function isIdle() {
  var time;
  window.onload = notIdle;
  window.onmousemove = notIdle;
  window.onmousedown = notIdle;
  window.ontouchstart = notIdle;
  window.onclick = notIdle;
  window.onkeypress = notIdle;
  window.addEventListener("scroll", notIdle, true);
  function userIdle(){  
    //function to run if user idle
    document.write("Idle.........");
  }
  function notIdle(){
     clearTimeout(time);
    time = setTimeout(userIdle, 3000); //time idle
  }
}

isIdle();
