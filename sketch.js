var box
function setup() {
  createCanvas(600,600);
  box = createSprite (300,300,25,25);
  box.shapeColor = "red";
}

function draw() 
{
  background(30);
drawSprites();

if (keyDown ("right")){
  box.velocityX = 2;
}

if (keyDown ("left")){
  box.velocityX = -2;
}
}




