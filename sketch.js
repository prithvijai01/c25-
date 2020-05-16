const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var rd1, rd2;

function setup() {

  engine = Engine.create();
  world = engine.world;
  createCanvas(800,400);
  
  
  rd1 = new Type1(200,200);
  rd2 = new Type2(100,100);

 
}

function draw() {
  background(255);  

  rd1.display();
  rd2.display();
  
}