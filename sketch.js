
var paper;
var bin1;
var bin2;
var bin3;
var ground;
var bin,binIMG;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
binIMG = loadImage("paper/dustbingreen.png");
}

function setup() {
    createCanvas(1200, 600);
    engine = Engine.create();
	world = engine.world;
	
	ground = new Ground(600,570,1200,20);
	bin1 = new dustbin(990,560,200,10);
	bin2 = new dustbin(1090,457,10,220);
	bin3 = new dustbin(890,457,10,220);
	
	paper = new Paper(120,500);
	paper.scale = 0.5;

	bin = createSprite(990,440,200,200);
	bin.addImage(binIMG);
	bin.scale = 0.85;

	
    
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("brown");
  
    ground.display();
	bin1.display();
	bin2.display();
	bin3.display();
	paper.display();


   drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(paper.body,paper.body.position,{x:80,y:-90});
	}
	}
	


