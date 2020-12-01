
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8;
var stone1;
var boyim,boy;
var ground1;
var tree1;


function preload()
{
	boyim = loadImage("boy.png");

}

function setup() {
	createCanvas(1200, 700);


	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground1 = new Ground(600,620,1200,10); 
    tree1 = new Tree(1000,390,350,450);
	mango1 = new Mango(600,300,20,20);
	stone1 = new Stone(150,300,50);

	var render  = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });





	Engine.run(engine);
    Render.run(render);
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");
  
  ground1.display();
  tree1.display();
  mango1.display();
  stone1.display();


  
 
}



