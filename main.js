var status = "";

function setup(){
    canvas = createCanvas(480, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function start(){
    objectDetector = objectDetector("cocossd");
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    getValue = document.getElementById("object_name").value();
}

function modelLoaded(){
    console.log("modelLoaded");
    status = true;
}

function draw(){
    image(video, 0, 0, 480, 380);
}