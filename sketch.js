var eatSound;
var startOverSound;
var helloSound;
var song;
var shrine;
var buildIt = "";
var bg;

function preload() {
  babynames = loadJSON("babynames.json");
  bg = loadImage("diablo_menu.jpg");
  shrine = loadImage("shrine.png");

  myFont = loadFont('diablo.ttf');
  song = loadSound("intro.mp3");
}

function setup() {
  song.playMode('restart');
  song.play();
  textFont(myFont);
  createCanvas(windowWidth, windowHeight);

  stroke(255);
  fill(255);
  background(bg);

  textAlign(CENTER, CENTER);


  button = createButton('GENERATE');
  button.position(width / 2 - 60, height * .4);
  button.style("font-size", "16px");
  button.style("font-family", 'Orator Std');
  button.style("background-color", red);
  button.mousePressed(newName);
}

function newName() {

  var randomPrefix = floor(random(0, babynames.prefix.length));
  var randomSuffix = floor(random(0, babynames.suffix.length));
  var randomAppelation = floor(random(0, babynames.appelation.length));

  background(bg);
  buildIt = "";
  buildIt += babynames.prefix[randomPrefix] + " ";
  buildIt += babynames.suffix[randomSuffix] + " ";
  buildIt += babynames.appelation[randomAppelation];




}

function windowResized() {

  resizeCanvas(windowWidth, windowHeight);
  //background(bg);
  button.position(width / 2 - 70, height * .4);
}

function draw() {

  var shrineWidth = 71;
  var shrineHeight = 121;
  background(bg);

  textSize(32);
  text("NAME YOUR LEGACY", width / 2, height * 0.33);

  textSize(width / buildIt.length);
  text(buildIt, width / 2, height * .5);

  //image(shrine, width / 2, height / 2);
  //image(img,dx,dy,dWidth,dHeight,sx,sy,[sWidth],[sHeight])
  //image(shrine, width / 2 - (shrineWidth / 2), height / 2, shrineWidth, shrineHeight);
  image(shrine, width / 2 - (shrineWidth / 2), height / 2, shrineHeight, shrineWidth, width/2, height/2, shrineWidth, shrineHeight);

}
/*
  
    if (frameCount % 60 >= 20 && frameCount % 60 < 40) {

      image(playerSpriteSheet, this.position.x, this.position.y, playerSize, playerSize, sx + sw, sy + sh * 2, sw, sh);
    }
    if (frameCount % 60 >= 40 && frameCount % 60 <= 60) {

      image(playerSpriteSheet, this.position.x, this.position.y, playerSize, playerSize, sx + sw * 2, sy + sh * 2, sw, sh);
    }

}*/