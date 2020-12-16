
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4,bob5
var roof
var rope1,rope2,rope3,rope4,rope5

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
    roof = new Roof(400,50,300,50)
    bob1 = new Bob(25,300,15) 
    bob2 = new Bob(225,300,15) 
    bob3 = new Bob(425,300,15)
    bob4 = new Bob(625,300,15)
    bob5 = new Bob(825,300,15)  
  // rope1 = new Rope(bob1, {x:400,y:50});
	//  rope2 = new Rope(roof, bob2);
	//  rope3 = new Rope(roof, bob3);
	//  rope4 = new Rope(roof, bob4);
  //  rope5 = new Rope(roof, bob5);
  var options = {
    bodyA: bob1, 
    pointB : {x:400,y:50}
  }
  var rope1 = Matter.Constraint.create(options)
  World.add(world,rope1)
  console.log(rope1)
	
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  // rope1.display();
  // rope2.display();
  // rope3.display();
  // rope4.display();
  // rope5.display();
  drawSprites();
 
}



