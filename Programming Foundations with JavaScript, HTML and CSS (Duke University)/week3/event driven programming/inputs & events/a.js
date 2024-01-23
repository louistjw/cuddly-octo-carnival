function doGrey() {
    var canvas = document.getElementById("div1");
    canvas.style.backgroundColor = "grey";
  }
function doGrey2() {
    var canvas = document.getElementById("div2");
    canvas.style.backgroundColor = "grey";
    var context = canvas.getContext("2d");
    context.clearRect(0,0,canvas.width,canvas.height)
  }
  
function doColor() {
    var canvas = document.getElementById("div1")
    var colorinput = document.getElementById("clr");
    canvas.style.backgroundColor = colorinput.value;
}
function doColor2() {
    var canvas = document.getElementById("div2")
    var colorinput = document.getElementById("clr2");
    canvas.style.backgroundColor = colorinput.value;
}


function doSquare() {
    var canvas = document.getElementById("div2")
    var colorinput2 = document.getElementById("clr3");
    
    var sliderinput = document.getElementById("slr");
    var len = sliderinput.value;
    var canvas = document.getElementById("div2");
    var context = canvas.getContext("2d");
    context.clearRect(0,0,canvas.width,canvas.height)
    context.fillStyle = colorinput2.value;
    context.fillRect(10*2,10,len*2,len);
}