

const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine, world;
var ground;
var ball;
function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  var obj_options={

isStatic: true,

  }
  
  ground= Bodies.rectangle(200,390,50,100, obj_options )
  World.add(world,ground);
  console.log(ground)

  var ball_options ={
    restitution: 0.5
}

ball = Bodies.circle(200,100,20, ball_options);
World.add(world,ball);
console.log(ball)
  
}
function draw() {
  background(0) 
Engine.update(engine);


 rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,50)
  
ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,20,20)

}


