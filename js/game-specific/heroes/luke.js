function Luke(level) {
  Hero.call(this, level);
}

Luke.prototype = Object.create(Hero.prototype);
Luke.prototype.constructor = Luke;

Luke.prototype.name = "Luke";

Luke.prototype.ticksToNextTurn = 60;

Luke.prototype.baseHPAtLevel = function(level) {
  const level1HP = 100;
  const perLevelHP = 100;
  return level1HP + perLevelHP * (level - 1);
}
