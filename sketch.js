const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var pig1,pig2;
var log1;
var box1;
var box2;
var box3,box4;
var ground1;
function setup(){
    var canvas = createCanvas(1450,1000);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(100,100,70,50);
    box2 = new Box(100,50,100,50);
    box3 = new box(100,80,60,50);
    box4 = new box(100,120,90,50);

    pig1 = new pig(140,10);
    pig2 = new pig(120,10);
    //log1 = new log(200,30,80,20);
    ground1 = new ground(200,380,400,20);
   //log1 = new log(200,30,80,PI/2);  
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
   box2.display();
   box3.display();
   box4.display();
   pig1.display();
   pig2.display();
   //log1.display();
   ground1.display();
}
