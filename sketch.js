var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
var divisionHeight = 300;
var particles = [];
var plinko = [];

var score = 0;

function preload()
{

}

function setup() {
  createCanvas(800, 700);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(400,690,800,20);

  for (var i = 0; 1<=width; i = i+80 ){
    divisions.push(new Division(i,height-divisionHeight/2,10, divisionHeight))
  }

  for (var j = 75; j<=width; j = j+50 )
  {
    plinkos.push(new Plinko(j,75));
  }

  for (var j = 50; j<=width - 10; j = j+50 )
  {
    plinkos.push(new Plinko(j,175));
  }

  for (var j = 75; j<=width; j=j+50)
  {
    plinkos.push(new Plinko(j,275));
  }
  
  for (var j = 50; j<=width - 10; j = j+50 )
  {
    plinkos.push(new Plinko(j,375));
  }


  Engine.run(engine);


}


 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();

  text('Score' + score, 20, 20);
  if(frameCount%60===0)
  {
     particles.push(new Particles(random(width/2-30, width/2+30), 10,10)); 
     score++; 
    }
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //create the particles using frameCount


  //display the particles 


}