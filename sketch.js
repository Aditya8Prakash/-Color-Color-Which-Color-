var r = 0;
var g = 0;
var b = 0;
var m;
function setup(){
createCanvas(255*2,255*2);
m=createSprite(0,40,10,40);
m.shapeColor="blue";
}
function draw(){
background(r,g,b);
if (mouseIsOver(m)) {
m.x=World.mouseX+4;   
}   
r=World.mouseX/2;
g=World.mouseY/2;
b=m.x/2;
drawSprites();
}