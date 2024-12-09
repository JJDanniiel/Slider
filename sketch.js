// var sliders = [];
// var angle = 0;

// function setup() {
//   createCanvas(400, 400);
//   for (var i = 0; i < 100; i++) {
//     sliders[i] = createSlider(0, 255, 50);
//   }
// }

// function draw() {
//   var offset = 0;
//   for (var i = 0; i < sliders.length; i++) {
//     var x = map(sin(angle + offset), -1, 3, 10, 400);
//     sliders[i].value(x);
//     offset += 0.5;
//   }
//   angle += 0.07;
// }

var sliders = [];
var angle = 0;

function setup() {
  createCanvas(400, 400);
  for (var i = 0; i < 100; i++) {
    sliders[i] = createSlider(0, 255, 50);
    sliders[i].style("width", "100px");
    // sliders[i].style('background', '#FFB84C');
    sliders[i].style("accent-color", "#A64D79");
  }
}

function draw() {
  var offset = 0;
  for (var i = 0; i < sliders.length; i++) {
    var x = map(sin(angle + offset), -1, 3, 10, 400);
    sliders[i].value(x);
    offset += 0.5;
  }
  angle += 0.07;
}
