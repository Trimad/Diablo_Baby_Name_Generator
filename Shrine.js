var temp = 0;
var framesDrawn = 0;

function Shrine(x, y, spriteWidth, spriteHeight) {

  this.x = x;
  this.y = y;
  this.spriteWidth = spriteWidth;
  this.spriteHeight = spriteHeight;
  this.used = false;

  this.drawIdle = function() {

      imageMode(CENTER);
    for (var i = 0; i < idle.length; i++) {
      if (frameCount % 60 >= (60 / idle.length * i)) {
        image(idle[i], this.x, this.y);
      }
    }

  }

  this.drawUsed = function() {

      imageMode(CENTER);
    for (var i = 0; i < used.length; i++) {
      if (frameCount % 60 >= (60 / used.length * i)) {
        image(used[i], this.x, this.y);
        framesDrawn++;
      }
    }

    if (framesDrawn > used.length * 60) {
      shrine.used = false;
      framesDrawn = 0;
    }

  }

  this.hover = function() {

    var d = dist(mouseX, mouseY, this.x, this.y);
    if (d < (this.spriteHeight / 2)) {
      return true;
    } else {
      return false;
    }
  }

}
