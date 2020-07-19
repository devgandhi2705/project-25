
var ground,stop;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
  var canvas = createCanvas(700,800);

  engine = Engine.create();
	world = engine.world;

  paper1 = new Paper(150,350,70);
  
  dustbin1 = new Dustbin(500,590,175,160);
  
  var options = {
    isStatic: true
  }

  stop = Bodies.rectangle(655,670,20,150,options);
  World.add(world,stop);

  ground = Bodies.rectangle(width/2,height-40,width,20,options);
  World.add(world, ground);
  
 
	Engine.run(engine);
  
}


function draw() {
  background("KhaKi");

  rectMode(CENTER);
  Engine.update(engine);

  rect(ground.position.x,ground.position.y,width,20);
  rect(stop.position.x,stop.position.y,20,150);
  paper1.display(); 
  dustbin1.display();
  
  
}

function keyPressed(){
     if(keyCode === UP_ARROW){
       Matter.Body.applyForce(paper1.body,paper1.body.position,{x:520,y:-520});
     }
}


