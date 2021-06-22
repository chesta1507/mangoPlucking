
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var Boy
var  Tree
function preload()
{
	BoyImage = loadImage("boy.png")
	TreeImage = loadImage("tree.png")
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground= new Ground(600, height, 1200, 20)

Boy=createSprite(150,640,40,100)
Boy.addImage(BoyImage)
Boy.scale=0.1

Tree=createSprite(800,390,50,150)
Tree.addImage(TreeImage)
Tree.scale=0.5
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);




  ground.display();
  
  drawSprites();
 
}



