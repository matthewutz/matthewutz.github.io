var popup;
var popup2;
var popup3;
var bg;
var pX = 135;
var pY = 212;
var pSizeX = 330;
var pSizeY = 177;
var score = 0;
var gameState = "L1";

function preload() {
  popup = loadImage('popup.png');
  popup2 = loadImage('popup2.png');
  popup3 = loadImage('popup3.png');
  bg = loadImage('bg.png');
}

function setup() {
 createCanvas(600, 600);
 textAlign(CENTER);
 textSize(20);
}

function draw() {
 background(220);
 image(bg, 0, 0);
 if(gameState == "L1"){
  levelOne();
 }
 if(gameState == "L2"){
  levelTwo();
 }
 if(gameState == "L3"){
  levelThree();
 }
 if(gameState == "WIN"){
  levelWin();
 }
 
 text(("Score: " + score), width/2, 40);
}

function levelOne(){
  fill(255);
  text("Level 1", width/2, height-20);
  var distToP = dist(pX+306, pY+22, mouseX, mouseY);
  if(distToP < 12 && mouseIsPressed === true){
   pX = random(270);
   pY = random(423);
   score = score + 1;
  }
  
  if(score > 5){
   gameState = "L2";
  }
  
  image(popup, pX, pY);
  line(pX+306, pY+22, mouseX, mouseY);
  
}
function levelTwo(){
  text("Level 2", width/2, height-20);
  var distToP = dist(pX+204, pY+14, mouseX, mouseY);
  if(distToP < 8 && mouseIsPressed === true){
   pX = random(380);
   pY = random(482);
   score = score + 1;
  }
  
  if(score > 10){
   gameState = "L3";
  }
  
  image(popup2, pX, pY);
  
}
function levelThree(){
  text("Level 3", width/2, height-20);
  var distToP = dist(pX+102, pY+7, mouseX, mouseY);
  if(distToP < 4 && mouseIsPressed === true){
   pX = random(490);
   pY = random(541);
   score = score + 1;
   pSizeX = pSizeX - 5;
   pSizeY = pSizeY - 5;
  }
  
  if(score > 15){
   gameState = "WIN";
  }
  
  image(popup3, pX, pY);
  
}
function levelWin(){
  text("You Win!", width/2, height-20);
}
