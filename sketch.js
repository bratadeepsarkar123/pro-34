const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;
var backgroundImg,platform;
var bg="gaingbackground2.png";
var game=0;
var score = 0;
function preload() {
  getBackgroundImg();
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2, 600*height/695,width, 20*height/695);

  hero = new Hero(130*width/1366,500*height/695,250*height/695,110*height/695);
  rope = new Rope(hero.body, { x:130*width/1366, y: 250*height/695 });
  monster = new Monster(width*7/9,400*height/695,175*height/695,200*height/695);

  box1 = new Box(width*8/9, 550*height/695, 70*height/695, 70*height/695);
  box2 = new Box(width*7/9, 500*height/695, width*2/9, 30*height/695);
  box3 = new Box(width*6/9, 550*height/695, 70*height/695, 70*height/695);
 // box4 = new Box(900, 300, 70, 70);

}

function draw() {
 
  if(backgroundImg)
    background(backgroundImg);
  else 
    background("gamingbackground2.png")
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
 // box4.display()
 stroke(0);
 text("SCORE is :- "+score,width*9/10,height/5)
  hero.display();
  //rope.display();
 
  monster.display();
  monster.score();
 
  //text(mouseX+","+mouseY,100,100);
 
 

}

function mouseDragged(){
  if(game===0){ 
    Body.setPosition(hero.body,{x:mouseX,y:mouseY});
  hero.body.speed=0;
  }
 
 // rope.options.stiffness=0;
}

function mouseReleased(){
  if(game===0)
    rope.fly();
    game===1
    //hero.body.speed=0;
}

function keyPressed(){
  if(keyCode===32&&game===1){
    rope.attach(hero.body);
    Body.setPosition(hero.body,{x:130,y:280})
    game=0;
  }
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1900){
      bg = "gamingbackground2.png";
  }
  else{
      bg = "gamingbackground1.jpg";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}

