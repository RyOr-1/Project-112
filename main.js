Webcam.set({
  width: 350,
  height: 350,
  image_format: "jpeg",
  jpeg_quality: 100,
});

Webcam.attach("camera");

function takePicture() {
  Webcam.snap(function (dataUri) {
    document.getElementById("result").innerHTML =
      "<img id='imgResult' src='" + dataUri + "'><br><br>";
  });
}


var classifier = mlf.imageClassifier("https://teachablemachine.withgoogle.com/models/AKp1Ph0cr/model.json")
