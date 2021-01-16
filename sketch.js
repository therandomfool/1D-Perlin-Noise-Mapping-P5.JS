let inc=0.01;
let start=0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background('#010203');
  stroke('rgb(215, 190, 105)');
  noFill();
  beginShape();
  var xoff=start;
  for(var x=0; x<width;x++){
  
  stroke('rgb(215, 190, 105)');
   
    var y=noise(xoff)*height;
  
    vertex(x,y);
    xoff+=inc;
  }
  endShape();
  start+=inc;
}