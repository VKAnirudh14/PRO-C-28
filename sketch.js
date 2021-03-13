const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box6;
var box2,box3,box4,box5;
var sling1,ball1;


function setup(){
     createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    ground = new Ground(400,380,800,10);
    ball1=  Bodies.circle(200,100,20,options);
    World.add(world,ball1);
    box1 = new Box(500,350,70,70);
    box2 = new Box(525,350,70,70);
    box3 = new Box(550,350,70,70);
    box4 = new Box(515,325,70,70);
    box5 = new Box(530,325,70,70);
    box6 = new Box(520,300,70,70);
    sling1 = new SlingShot(ball1,{x:100,y:340});
}

function draw(){
    background(0);
    Engine.update(engine);
  //  ball1.display();
    box1.display();
    box2.display();
    ground.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    sling1.display();
    ellipseMode(RADIUS);
    ellipse(ball1.position.x,ball1.position.y,20,20);
}

function mouseDragged(){
    Matter.Body.setPosition(ball1, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling1.fly();
}


