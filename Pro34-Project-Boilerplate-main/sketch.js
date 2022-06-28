
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
 const Constraint = Matter.Constraint;
  const Composites = Matter.Composites;
 const Composite = Matter.Composite;
var  ground
var bola
var trave1,trave2,trave3
var botao
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(250,height,width,20);
 
  trave1 = createSprite(350,350,30,500)
  trave1.scale = 0.2


  trave2 = createSprite(330,350,30,500)
  trave2.scale = 0.2
 
  trave3 = createSprite(340,303,80,30)
  trave3.scale = 0.2
 
  bola = Bodies.circle(300,300,20);
  World.add(world,bola)
  button = createImg('th-removebg-preview.png');
  button.position(300,150);
  button.size(50,50);
  button.mouseClicked(chute);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  ground.show();
  drawSprites()
  ellipse(bola.position.x,bola.position.y,30,30);
}

function chute(){
  Matter.Body.applyForce(bola,{x:0,y:0},{x:0.02,y:0})
 
}