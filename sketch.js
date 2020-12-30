var paper,left,right,bottom,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper=new Paper(100,350,20);
	left=new Dustbin(550,330,20,100);
	right=new Dustbin(750,330,20,100);
	bottom=new Dustbin(650,370,200,20);
	ground=new Ground (400,390,800,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  left.display();
  right.display();
  bottom.display();
  ground.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===38){
		Matter.Body.applyForce(paper.body,paper.body.position,{x : 60,y :-70});
	}
}

