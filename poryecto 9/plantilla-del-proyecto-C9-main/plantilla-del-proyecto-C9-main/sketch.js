var box, box1,box2,box3,box4



function setup() {
  createCanvas(400,400);
  background(51);
  box = createSprite(200,200,30,30);
  box.scale = 0.1
box1 = loadImage("mario.png")
box2 = loadImage("pika.png")

}

function draw() 
{

  // escribir el código para cambiar el color del fondo 
  // rojo cuando se presiona RIGHT_ARROW (tecla de flecha derecha)
  
  

  if (keyIsDown(LEFT_ARROW)) 
  {
    background("blue");
    box.addImage("mario",box1)
  
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("yellow");
   
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("green");

  }

  if(keyIsDown(RIGHT_ARROW)){
    background("red");

  }


  
  drawSprites();
}

