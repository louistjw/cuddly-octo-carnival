function changecolor() {
  var divelement1 = document.getElementById("div1");
  var divelement2 = document.getElementById("div2");
  divelement1.className = "blueback";
  divelement2.className = "orangeback";
}

function changetext() {
  var divelement1 = document.getElementById("div1");
  var divelement2 = document.getElementById("div2");
  divelement1.innerHTML = "first div";
  divelement2.innerHTML = "second div";
}

function resetbutton() {
  var divelement1 = document.getElementById("div1");
  var divelement2 = document.getElementById("div2");
  divelement1.className = "orangeback";
  divelement2.className = "pinkback";
  divelement1.innerHTML = "Here is div 1";
  divelement2.innerHTML = "Here is div 2";
}

function doRed() {
  var canvas = document.getElementById("div1")
  canvas.style.backgroundColor = "red";
  var context = canvas.getContext("2d");

  context.fillStyle = "yellow";
  context.fillRect(10,10,60,60);
  context.fillRect(80,10,60,60);

  context.fillStyle= "black";
  context.font = "20px Arial";
  context.fillText("Hello", 15 ,45)
}

function doBlue() {

}