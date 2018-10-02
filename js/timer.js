var start = null;
function start(){
  start = event.timeStamp;
}

function stop(){
  var time = event.timeStamp - start;
  alert(time);
}
