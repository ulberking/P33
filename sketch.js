var student1, student2;
function setup() {
  createCanvas(800, 800);
  var arr = [10, 20, -26, -93, -34, 43, 30, 40, 50, 55, 59, 67, 78, 49];
  for (var i = arr.length-1; i > -1; i = i - 1) {
    var a = arr[i] % 10;
    var b = Math.trunc(arr[i] / 10);
    var c = a + b;
    console.log(c);
  }
}

function draw() {
  background("black");
}
