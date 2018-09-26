/*Create Window variable as global*/
var Window;

function windowOpen(){
  /*Open a Window*/
  var to_show = "https://github.com/Kascique";
  var window_size = "width=500, height=400";
  Window = window.open(to_show, "", window_size);
}

function closeWindows(){
  /*Close Window*/
  Window = window.close();
}
