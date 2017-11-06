let babynames;
let buildIt;
let bg;
let myfont;
let button;
let song;

function preload() {

  babynames = loadJSON("babynames.json");
  bg = loadImage("bg.jpg");
  myFont = loadFont('diablo.ttf');
  //song = loadSound('assets/intro.mp3');
}

function setup() {
  textFont(myFont);
  createCanvas(windowWidth, windowHeight);
  //song.play();
  stroke(255);
  fill(255);
  background(bg);
  button = createButton('NEW BABY NAME');
  button.position(width-500, 100);
  button.style("font-size", "32px");
  let col = color(100,0,00);
  button.style("background-color", col);
  button.mousePressed(newName);


}

function windowResized() {

  resizeCanvas(windowWidth, windowHeight);
  background(bg);
  text(buildIt, width / 2, height / 2 - 24);

}

function newName() {

  let randomPrefix = floor(random(0, babynames.prefix.length));
  let randomSuffix = floor(random(0, babynames.suffix.length));
  let randomAppelation = floor(random(0, babynames.appelation.length));

  background(bg);
  buildIt = "";
  buildIt += babynames.prefix[randomPrefix] + " ";
  buildIt += babynames.suffix[randomSuffix] + " ";
  buildIt += babynames.appelation[randomAppelation];

  textSize(48);
  text(buildIt, width / 2, height / 2 - 24);

}
