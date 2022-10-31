img = "";
objects =[];
status ="";
function preload(){
    img = loadImage('desk.jpg');
}


function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "status : Detecting Object";
}


function modelLoaded() {
console.log("modelLoaded")
status = true;
objectDetector.detect(img, gotResults);
}

function gotResults(error, results) {
    if (error){
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function draw() {
    image(img, 0, 0, 640, 420);
     if(status != "" )
     {
        for (i =0; i< objects.length; i++){
            document.getElementById("status").innerHTML="Status : Object Detected";
    
            fill("#FF00FF");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + "" + percent + "%", objects[i].x + 15, objects[i].y +15);
            noFill();
            stroke("#FF00FF");
            rect(objects[i].x, objects[i].y,objects[i].width, objects[i].height);
        }
     }
    }



