var astronaut; astronaut_sleeping;
var gym,sleep,brush,drink,move,eat;
var background,backgroundImg; 

function preload(){
  backgroundImg = loadImage("iss.png");
  astronaut_sleeping = loadAnimation("sleep.png");
  brush = loadAnimation("brush.png");
  gym = loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");
  eat = loadAnimation("eat1.png","eat2.png");
  drink = loadAnimation("drink1.png","drink2.png");
  move = loadAnimation("move.png","move1.png");

}


function setup(){
  createCanvas(400, 400);

  astronaut = createSprite(200,200,20,20);
  astronaut.addAnimation("sleeping", astronaut_sleeping);
  astronaut.scale = 0.1;
} 

function draw() {
  background(220);

  drawSprites();
}