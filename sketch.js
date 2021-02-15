const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;
var box1;

function preload(){
    backgroundImg = loadImage("GamingBackground.png")
}

function setup(){
    var canvas = createCanvas(1515, 725);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(550,300,70,70);
    box2 = new Ground2(620,300,70,70);
    box3 = new Ground2(690,300,70,70);
    box4 = new Ground2(760,300,70,70);
    box5 = new Ground2(690,370,70,70);
    box6 = new Ground2(550,370,70,70);
    box7 = new Ground2(620,370,70,70);
    box8 = new Ground2(760,370,70,70);
    box9 = new Ground2(550,440,70,70);
    box10 = new Ground2(620,440,70,70);
    box11 = new Ground2(690,440,70,70);
    box12 = new Ground2(760,440,70,70);
    box13 = new Ground2(550,510,70,70);
    box14 = new Ground2(620,510,70,70);
    box15 = new Ground2(690,510,70,70);
    box16 = new Ground2(760,510,70,70);
    box17 = new Ground2(550,580,70,70);
    box18 = new Ground2(620,580,70,70);
    box19 = new Ground2(690,580,70,70);
    box20 = new Ground2(760,580,70,70);










    

    ground = new Ground1(0, 600, width+width/2+90, 25);

    monster = new Monster(1100, 500, 200)

    ball = new Hero(200, 200, 80);

    rope = new Rope(ball.body, {x:300, y:50})
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    ball.display();

    monster.display();

    ground.display();

    fill(37, 247, 58);
    stroke("black")
    strokeWeight(2);
    textSize(50)
    text("KILL THE MONSTER", 500, 700)
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x:mouseX, y:mouseY})
}

