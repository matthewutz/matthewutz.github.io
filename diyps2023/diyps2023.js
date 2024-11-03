var img;
var img2;
var initials ='mu'; // your initials
var choice = '1'; // starting choice,
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken

function preload() {
  img = loadImage('/diyps2023/images/brick.png')
  img2 = loadImage('/diyps2023/images/star.png')
}

function setup() {
createCanvas(600, 400);
background(screenbg);
image(img, 0, 0);

}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed

 if (toolChoice == '1' ) {//Black Thin
    stroke(0);
    strokeWeight(5);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '2') {//Black Fat Cap
    stroke(0);
    strokeWeight(15);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '3') {//Yellow Thin
    stroke(255, 255, 0);
    strokeWeight(10);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '4') {//Yellow Fat Cap
    stroke(255, 255, 0);
    strokeWeight(30);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (key == '5') {//Blue Thin
    stroke(0, 0, 255);
    strokeWeight(10);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '6') {//Blue Fat Cap
    stroke(0, 0, 255);
    strokeWeight(30);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '7') {//Red Thin
    stroke(255, 0, 0);
    strokeWeight(10);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '8') {//Red Fat Cap
    stroke(255, 0, 0);
    strokeWeight(30);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '9') {//Black Shading
    stroke(0, 55);
    strokeWeight(10);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '0') {//White Star
    image(img2, mouseX-15, mouseY-15, 30, 30);
  }
}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
    image(img, 0, 0);
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
    key="";
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second 
}
