var movingBox, fixedBox;

function setup() {
  createCanvas(800,400);
  movingBox = createSprite(100, 200, 50, 50);
  fixedBox = createSprite(600, 200, 30, 50);
  movingBox.velocityX = 5;
  fixedBox.velocityX = -5;

  movingBox.debug=true;
  fixedBox.debug=true;
  movingBox.shapeColor = "yellow";
  fixedBox.shapeColor= "yellow";

}

function draw() {
  background(0);  
  //movingBox.x = mouseX;
  //movingBox.y = mouseY;
  

  if(fixedBox.x-movingBox.x <= fixedBox.width/2+movingBox.width/2&&
    movingBox.x-fixedBox.x <= fixedBox.width/2+movingBox.width/2&&
    fixedBox.y-movingBox.y <= fixedBox.height/2+movingBox.height/2&&
    movingBox.y-fixedBox.y <= fixedBox.height/2+movingBox.height/2){
    movingBox.shapeColor = "red";
    fixedBox.shapeColor= "red";
    movingBox.velocityX = - movingBox.velocityX;
    fixedBox.velocityX = -fixedBox.velocityX;
    
  }else{
    movingBox.shapeColor = "yellow";
    fixedBox.shapeColor= "yellow";
  }



  drawSprites();
}