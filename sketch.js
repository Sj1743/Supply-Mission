//declare variables
var helicopterIMG, helicopterSprite;
var packageSprite,packageIMG, packageBody;
var groundSprite;

//declare constants
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//preload images
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {

	//create canvas
	createCanvas(800, 700);
	
	//create sprite 'packageSprite'
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	//create sprite 'helicopterSprite'
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	//create sprite 'groundSprite'
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	//create Physics Engine 'engine', add to world
	engine = Engine.create();
	world = engine.world;

	//create circular body 'packageBody', add to World world
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);

	
	//create rectangular body 'ground', add to World world
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	 
	//run Engine engine
	Engine.run(engine);
  
}


function draw() {

	//background
	background(0);
	//align rectangles to center
	rectMode(CENTER);
	
	//set position of Sprite 'packageSprite' to position of Body 'packageBody"
	packageSprite.x= packageBody.position.x 
	packageSprite.y= packageBody.position.y 

	//drop package when down arrow pressed
	keyPressed();

	//draw all sprites
	drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody, false);
}
}
