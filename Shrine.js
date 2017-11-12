function Shrine(x, y, spriteWidth, spriteHeight) {

  this.x = x;
  this.y = y;
  this.spriteWidth = spriteWidth;
  this.spriteHeight = spriteHeight;
  this.used = false;
  this.idleDrawn = 0;
  this.usedDrawn = 0;

  this.drawIdle = function() {
    imageMode(CENTER);
    image(idle[this.idleDrawn], this.x, this.y);
    if (frameCount % 1 === 0) {
      this.idleDrawn++;
      if (this.idleDrawn == idle.length) {
        this.idleDrawn = 0;
      }
    }
  }

  this.drawUsed = function() {
    imageMode(CENTER);
    image(used[this.usedDrawn], this.x, this.y);
    if (frameCount % 1 === 0) {
      this.usedDrawn++;
      if (this.usedDrawn == used.length) {
        shrine.used = false;
        this.usedDrawn = 0;
      }
    }
  }

  this.interact = function() {
    click.play();
    shrine.used = true;
  }

  this.hover = function() {
    let d = dist(mouseX, mouseY, this.x, this.y);
    if (d < (this.spriteHeight / 2)) {
      return true;
    } else {
      return false;
    }
  }

}
