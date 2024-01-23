function upload() {
    var fileinput = document.getElementById("finput");
    var filename = fileinput.value;
    alert("You choose " + filename);}

function upload2() {
    var imgcanvas = document.getElementById("can2");
    var fileinput = document.getElementById("finput2");
    var image = new SimpleImage(fileinput);
    image.drawTo(imgcanvas);}