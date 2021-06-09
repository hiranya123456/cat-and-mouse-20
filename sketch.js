var graden,gradenImg;
var mouse,mouse_run;
var cat ,cat_running;



function preload() {
    Garden = loadImage("garden.png");
    cat = loadImage("cat1.png");
    mouse = loadImage("mouse1.png");
    mouseImg1 = loadAnimation("mouse2.png","mouse3.png");
    mouseImg2 = loadImage("mouse4.png");
    catImg1 = loadAnimation("cat2.png","cat3.png");
    catImg2 = loadImage("cat4.png");
}

function setup(){
    createCanvas(1000,800);
    garden = createSprite(500,400);
    garden.addImage(Garden);
    tom = createSprite(850,500,30,30);
    tom.addImage(cat);
    tom.scale = 0.2;
    jerry = createSprite(200,500,10,10);
    jerry.addImage(mouse);
    jerry.scale = 0.2;
}

function draw() {
    background("White");
    drawSprites();
        if (tom.x-jerry.x < (tom.width - jerry.width)/2){
            jerry.addAnimation("Mouse looking",mouseImg2);
            jerry.changeAnimation("Mouse looking");
            tom.addAnimation("Cat sitting",catImg2);
            tom.changeAnimation("Cat sitting");
            tom.velocityX = 0;
        }   
    }      
function keyPressed(){
  if (keyCode === LEFT_ARROW) {
    jerry.addAnimation("Mouse Teasing",mouseImg1);  
    jerry.changeAnimation("Mouse Teasing");
    tom.addAnimation("Cat moving",catImg1);  
    tom.changeAnimation("Cat moving");
    tom.velocityX = tom.velocityX - 10;
  }
}


