function setup() {
  canvas = createCanvas(300, 275);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier('MobileNet', ModelLoaded);
}

function draw() {
  image(video, 0, 0, 300, 275);
  classifier.classify(video, gotResult);
}

function preload() {

}

function ModelLoaded() {
  console.log("Model is loaded successfully.");
}

function gotResult(error, results) {
   if(error){
     console.error(error);
   }
   else{
     console.log(results);
     document.getElementById("result_object_name").innerHTML = results[0].label;
     document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
     }
}

