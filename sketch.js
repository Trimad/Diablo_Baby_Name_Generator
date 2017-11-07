var eatSound;
var startOverSound;
var helloSound;
var song;
var buildIt = "";
var bg;

//Sprite stuff
var shrine; //declare object
var shrineSprite;
var idle = [];
var used = [];

function preload() {
  babynames = loadJSON("babynames.json");
  bg = loadImage("diablo_menu.jpg");
  myFont = loadFont('diablo.ttf');
  song = loadSound("intro.mp3");
  //Sprite Stuff
  shrineSprite = loadImage("shrine2.png");
}

function setup() {

  song.play();
  textFont(myFont);
  createCanvas(windowWidth, windowHeight);

  stroke(255);
  fill(255);
  background(bg);

  textAlign(CENTER, CENTER);

  loadFrames(shrineSprite, idle, 1, 17, 71, 121, 10);
  loadFrames(shrineSprite, used, 1, 155, 71, 121, 11);
  loadFrames(shrineSprite, used, 1, 277, 71, 121, 10);

  shrine = new Shrine(width / 2, height / 2, 71, 121); //create object
}

function loadFrames(spriteSheet, array, xStep, yStep, spriteWidth, spriteHeight, numFrames) {
  for (var f = 0; f < numFrames; f++) {
    temp = createGraphics(71 * 3, 121 * 3);
    temp.background(51);
    temp.image(spriteSheet, xStep + (f + spriteWidth * f), yStep, spriteWidth, spriteHeight, 0, 0, spriteWidth * 3, spriteHeight * 3);
    append(array, temp);
  }
}

function newName() {

  var randomPrefix = floor(random(0, babynames.prefix.length));
  var randomSuffix = floor(random(0, babynames.suffix.length));
  var randomAppelation = floor(random(0, babynames.appelation.length));
  imageMode(CORNER);
  background(bg);
  buildIt = "";
  buildIt += babynames.prefix[randomPrefix] + " ";
  buildIt += babynames.suffix[randomSuffix] + " ";
  buildIt += babynames.appelation[randomAppelation];

}

function windowResized() {

  resizeCanvas(windowWidth, windowHeight);
  shrine.x = width / 2;
  shrine.y = height / 2;

}

function mousePressed() {
  if (shrine.hover()) {
    newName();
    shrine.used = true;
    temp = frameCount;
  }
}

function draw() {

  imageMode(CORNER);
  background(bg);

  if (!shrine.used) {
    shrine.drawIdle();
  } else {
    shrine.drawUsed();
  }


  var greeting = "NAME YOUR LEGACY";
  textSize(width / greeting.length);
  text(greeting, width / 2, height * 0.25);
  textSize(width / buildIt.length);
  text(buildIt, width / 2, height * .75);

  if (shrine.hover()) {
    cursor(HAND);
  } else {
    cursor(ARROW);
  }
}
