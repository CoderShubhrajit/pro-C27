const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5, roof, thread1, thread2, thread3,thread4,thread5;

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(800, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400,50,700,15);
	bobObject1 = new Ball(260,450,70);
	bobObject2 = new Ball(330,450,70);
	bobObject3 = new Ball(400,450,70);
	bobObject4 = new Ball(470,450,70);
  bobObject5 = new Ball(540,450,70);
  thread1 = new RubberBand(bobObject1.body, {x:100, y:50});

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("pink");
  Engine.update(engine);

  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  thread1.display();
}