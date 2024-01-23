var hiddenImage = null;
var hiderImage = null;
var finalImage = null;

function loadHiddenImage() {
    var imgFile = document.getElementById("hiddenf");
    var canvas = document.getElementById("hiddencan");
    fgImage = new SimpleImage(imgFile);
    fgImage.drawTo(canvas);
    alert("Hidden image loaded");
    hiddenImage = new SimpleImage(imgFile)
}
function loadHiderImage() {
    var imgFile = document.getElementById("hiderf");
    bgImage = new SimpleImage(imgFile);
    var canvas = document.getElementById("hidercan");
    bgImage.drawTo(canvas);
    alert("Hider image loaded");
    hiderImage = new SimpleImage(imgFile)
}
function clearCanvas() {
    var canvas1 = document.getElementById("hiddencan");
    var canvas2 = document.getElementById("hidercan");
    var canvas3 = document.getElementById("finalcan");
    var context1 = canvas1.getContext('2d');
    var context2 = canvas2.getContext('2d');
    var context3 = canvas3.getContext('2d');
    context1.clearRect(0, 0, canvas1.width, canvas1.height);
    context2.clearRect(0, 0, canvas2.width, canvas2.height);
    context3.clearRect(0, 0, canvas3.width, canvas3.height);
}


// keeps last 4 digits  // for hidden
function clearbits(pixval) {
    var x = pixval % 16;
    return x;
}
// keeps first 4 digits // for hider
function clearbits2(pixval) {
    var x = Math.floor(pixval/16) * 16;
    return x;
}
function combine(hiddenimage, hiderimage) {
    for (var px1 of hiddenimage.values()) {
        for (var px2 of hiderimage.values()) {
            px1.setRed(clearbits(px1.getRed() + clearbits2(px2.getRed())));
            px1.setGreen(clearbits(px1.getGreen()+ clearbits2(px2.getGreen())));
            px1.setBlue(clearbits(px1.getBlue() + clearbits2(px2.getBlue())));
            break;
        } 
        break;
    }
    var canvas = document.getElementById("finalcan");
    hiddenimage.drawTo(canvas);
}
function stego() {
    combine(hiddenImage,hiderImage);
}
function decode() {
}
