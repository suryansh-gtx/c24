const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var pig1,pig2;
var Log1, Log2, Log3, Log4;
var box1;
var box2;
var box3,box4,box5;
var ground1;
function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;

    

    //pig1 = new pig(140,10);
    //pig2 = new pig(120,10);
    //log1 = new log(200,30,80,20);
    ground1 = new ground(200,height,400,20);
   
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    box5 = new Box(810,160,70,70);

   Log1 = new Log(810,260,300,PI/2);
   Log2 = new Log(810,180,300,PI/2);
   Log3 = new Log(760,120,150,PI/7);
   Log4 = new Log(870,120,150,-PI/7);


   pig1 = new pig(810,350);
   pig2 = new pig(810,220);

   
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    pig1.display();
    pig2.display();
   Log1.display();
   Log2.display();
   Log3.display();
   Log4.display();
   ground1.display();
}
