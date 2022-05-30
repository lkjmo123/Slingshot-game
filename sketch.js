const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



var ground,ground1,ground2;
var box,box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11;
var engine,world;
var bird;
var slingShot;

var gameState = "onSling";

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;

  ground = new Ground(100,400,800,10);
  ground1 = new Ground(200,300,100,10);
  ground2 = new Ground(400,200,100,10);

  box = new Box(170,190,30,30);
  box1 = new Box(200,190,30,30);
  box2 = new Box(230,190,30,30);
  box3 = new Box(185,140,30,30);
  box4 = new Box(215,140,30,30);
  box5 = new Box(200,90,30,30);
  box6 = new Box(370,50,30,30);
  box7 = new Box(400,50,30,30);
  box8 = new Box(430,50,30,30);
  box9 = new Box(385,30,30,30);
  box10 = new Box(415,30,30,30);
  box11 = new Box(400,10,30,30);


  bird = new Bird(50,200,150,150);

  slingShot = new SlingShot(bird.polygon,{x:50,y:300});

}

function draw() {
  background("black"); 
  Engine.update(engine);
  ground.display(); 
  ground1.display();
  ground2.display();
  box.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  bird.display();
  slingShot.display();
}

function mouseDragged(){
  
      Matter.Body.setPosition(bird.polygon, {x: mouseX , y: mouseY});
  
}


function mouseReleased(){
  slingShot.fly();
  gameState = "launched";

}


