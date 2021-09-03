var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg
var green, greenImg
var red,redImg
var orenge, orengeImg
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg=loadImage("apple.png")
  greenImg=loadImage("leaf.png")
  redImg=loadImage("redImage.png")
  orengeImg=loadImage("orangeLeaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating rabbit running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);


}


function draw() {
  background(0);
  rabbit.x=mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);
  if (frameCount%60==0){
    var hola = Math.round(random(1,4))
    if (hola==1){
      applee()

  }
else if (hola==2){
  leafs()
}
else if (hola==3){
    reds()
}

else if (hola==4){
  or()
}

  }
 
drawSprites();
}
function applee (){
    apple=createSprite (200,100,40,10)
    apple.scale=0.1
    apple.addImage(appleImg)
    apple.velocityY=3
    apple.x=Math.round(random(10,390))
    apple.y=Math.round(random(10,80))
  
}
function leafs (){
    green=createSprite (200,100,40,10)
    green.scale=0.1
    green.addImage(greenImg)
    green.velocityY=3
    green.x=Math.round(random(10,390))
    green.y=Math.round(random(10,80))
  
}

function reds (){
    red=createSprite (200,100,40,10)
    red.scale=0.1
    red.addImage(redImg)
    red.velocityY=3
    red.x=Math.round(random(10,390))
    red.y=Math.round(random(10,80))
  
}

function or (){
    orenge=createSprite (200,100,40,10)
    orenge.scale=0.1
    orenge.addImage(orengeImg)
    orenge.velocityY=3
    orenge.x=Math.round(random(10,390))
    orenge.y=Math.round(random(10,80))
  
}