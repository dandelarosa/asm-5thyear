function Shane(level) {
  Hero.call(this, level);
}

Shane.prototype = Object.create(Hero.prototype);
Shane.prototype.constructor = Shane;

Shane.prototype.name = "Shane";
Shane.prototype.ticksToNextTurn = 50;

Shane.prototype.baseHPAtLevel = function(level) {
  const level1HP = 100;
  const perLevelHP = 75;
  return level1HP + perLevelHP * (level - 1);
}
