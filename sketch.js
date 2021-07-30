
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1, ground1, bottom, side1, side2,boxImage;
function preload() {
	boxImage=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 = new Paper(50, 400);
	ground1 = new Ground(400, 720, 800, 20)
	bottom = new Ground(600, 690, 150, 20)
	side1 = new Ground(525, 625, 20, 150)
	side2 = new Ground(675, 625, 20, 150)
	box1= createSprite(600,600,150,130)
	box1.addImage(boxImage)
	box1.scale=0.6
	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(230);
	paper1.display()
	ground1.display()
	bottom.display()
	side1.display()
	side2.display()
	drawSprites();

}
function keyPressed() {
	if (keyCode == UP_ARROW) {
		Matter.Body.applyForce(paper1.body, paper1.body.postion, { x: 13.25, y: -12 })
	}
}
