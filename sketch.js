var iss;

var spacecraft;

var issImage;

var spacecraft1Image, spacecraft2Image, spacecraft3Image, spacecraft4Image;

var hasDocked = false;

function preload(){
  issImage = loadImage("iss.png")
  spacebg = loadImage("spacebg.jpg")
  spacecraft1Image = loadImage("spacecraft1.png")
  spacecraft2Image = loadImage("spacecraft2.png")
  spacecraft3Image = loadImage("spacecraft3.png")
  spacecraft4Image = loadImage("spacecraft4.png")

}
function setup() {
 canvas = createCanvas(displayWidth - 20, displayHeight-140);
iss = createSprite(width/2, height/2) 
iss.addImage(issImage)

spacecraft = createSprite(width -100, height -100)
spacecraft.addImage(spacecraft1Image)
spacecraft.scale = 0.4
}

function draw() {
  background(spacebg);  
  if(!hasDocked){
    spacecraft.x = spacecraft.x +random(-1, 1)
  }

  if(keyDown(UP_ARROW)){
    spacecraft.y = spacecraft.y -2
  }

  if(keyDown(LEFT_ARROW)){
    spacecraft.x = spacecraft.x -2
    spacecraft.addImage(spacecraft3Image)
}

if(keyDown(RIGHT_ARROW)){
  spacecraft.x = spacecraft.x +2
  spacecraft.addImage(spacecraft4Image)
}

if(keyDown(DOWN_ARROW)){
  spacecraft.y = spacecraft.y +2
  spacecraft.addImage(spacecraft2Image)
}

if(spacecraft.x <= 690 && spacecraft.y <= 498){
hasDocked = true;
strokeWeight(2)
textSize(20)
fill("white")
text("Docking Successful!!", 50, 100)
}

  drawSprites();
}