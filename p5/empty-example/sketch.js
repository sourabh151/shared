
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}
let x = 0,y = 1.25;
function draw() {
  background(100);

  noStroke();
  fill(50);
  push();
  translate(0, 0);
  rotateY(y);
  rotateX(x);
  x+=0.02;
  y+=0.02;
  box(100);
  pop();

  noFill();
  stroke(255);
  push();
  translate(500, height * 0.35, -200);
  sphere(300);
  pop();
}
