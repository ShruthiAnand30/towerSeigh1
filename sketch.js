const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,stand;
var box1,box2,box3,box4,box5,box6,box7,box8,box9;
var slingshot;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    stand = new Ground(400, 385, 300, 250);

    box1 = new Box(330,135,30,40);
    box2 = new Box(360,135,30,40);
    box3 = new Box(390,135,30,40); 
    box4 = new Box(420,135,30,40);
    box5 = new Box(450,135,30,40);

    box6 = new Box(360,105,30,40);
    box7 = new Box(390,105,30,40);
    box8 = new Box(420,105,30,40);

    box9 = new Box(390,85,30,40);

    polygon= Bodies.circle(50,200,20);
    World.add(world,polygon);
    slingshot = new SlingShot(this.polygon,{x:100, y:200});
}

function draw(){
    background ('white');
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();

    ground.display();
    stand.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(bird.body);
    }
}
