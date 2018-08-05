function Shane(level) {
  Hero.call(this, level);
}

Shane.prototype = Object.create(Hero.prototype);
Shane.prototype.constructor = Shane;

Shane.prototype.name = "Shane";
Shane.prototype.level1HP = 100;
Shane.prototype.perLevelHP = 10;
Shane.prototype.ticksToNextTurn = 50;
