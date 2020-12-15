const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight= 300;

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(240, 795)

  for (var k = 0; k <=innerWidth; k = k + 80){
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var j = 40; j <=width; j=j+50){
    plinkos.push(new Plinko(j, 75));
  }

  for (var j = 15; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j, 175));
  }

  for (var j = 40; j <=width; j=j+50){
    plinkos.push(new Plinko(j, 275));
  }

  for (var j = 15; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j, 375));
  }

  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);  
  Engine.update(engine);

  ground.display();

  for(var j = 0; j < divisions.length; j++){
    divisions[j].display();
  }

  for(var j = 0; j< plinkos.length; j++){
    plinkos[j].display();
  }

  if (frameCount % 90 === 0){
    particles.push(new Particle(random(230, 240), 0));
  }

  for (var k = 0; k < particles.length; k++){
    particles[k].display();
  }
}