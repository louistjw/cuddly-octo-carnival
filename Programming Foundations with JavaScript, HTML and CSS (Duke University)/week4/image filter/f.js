var base_image = null;

function loadImage() {
    var imgFile = document.getElementById("imgfile");
    var canvas = document.getElementById("can");
    base_image = new SimpleImage(imgFile);
    base_image.drawTo(canvas);
    alert("Image loaded");
}

function resetImage() {
    var canvas = document.getElementById("can");
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    var imgFile = document.getElementById("imgfile");
    base_image = new SimpleImage(imgFile);
    base_image.drawTo(canvas);
    alert("Image Reset");
}

function doGrayscale() {
    var gray_image = base_image;
    for (var pixel of gray_image.values()) {
        var avg = (pixel.getRed() + pixel.getGreen() +pixel.getBlue())/3;
        pixel.setRed(avg);
        pixel.setGreen(avg);
        pixel.setBlue(avg);
    }
    var canvas = document.getElementById("can");
    gray_image.drawTo(canvas);
}

function doRedscale() {
    var red_image = base_image;
    for (var pixel of red_image.values()) {
        var avg = (pixel.getRed() + pixel.getGreen() +pixel.getBlue())/3;
        if (avg < 128) {
            pixel.setRed(avg*2);
            pixel.setGreen(0);
            pixel.setBlue(0);
        }
        else {
            pixel.setRed(255);
            pixel.setGreen((avg*2)-255);
            pixel.setBlue((avg*2)-255);
        }
    }
    var canvas = document.getElementById("can");
    red_image.drawTo(canvas);
}