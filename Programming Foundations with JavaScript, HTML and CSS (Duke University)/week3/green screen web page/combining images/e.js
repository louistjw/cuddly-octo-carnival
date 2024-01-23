var fgImage = null;
var bgImage = null;
var greenThreshold = null;

function loadForegroundImage() {
    var imgFile = document.getElementById("fgfile");
    var canvas = document.getElementById("fgcan");
    fgImage = new SimpleImage(imgFile);
    fgImage.drawTo(canvas);
    alert("Foreground image loaded");
}
function loadBackgroundImage() {
    var imgFile = document.getElementById("bgfile");
    bgImage = new SimpleImage(imgFile);
    var canvas = document.getElementById("bgcan");
    bgImage.drawTo(canvas);
    alert("Background image loaded");
}
function greenThresh() {
    var GT = document.getElementById("gt");
    greenThreshold = GT.value;
}
function doGreenScreen() {
    if (fgImage == null || ! fgImage.complete()) {
        alert("Foreground not loaded");
        return;
    }
    if (bgImage == null || ! bgImage.complete()) {
        alert("Background not loaded");
        return;
    }
    clearCanvas();
    var output = new SimpleImage(fgImage.getWidth(), fgImage.getHeight());
        for (var pixel of fgImage.values()) {
            var x = pixel.getX();
            var y = pixel.getY();
            if (pixel.getGreen() > greenThreshold) {
                var bgPixel = bgImage.getPixel(x,y);
                output.setPixel(x,y,bgPixel);
            }
            else {
                output.setPixel(x,y,pixel);
            }
        }
        var canvas = document.getElementById("fgcan");
        output.drawTo(canvas);
}
function clearCanvas() {
    var canvas = document.getElementById("fgcan");
    var canvas2 = document.getElementById("bgcan");
    var context = canvas.getContext('2d');
    var context2 = canvas2.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    context2.clearRect(0, 0, canvas2.width, canvas2.height);
}



