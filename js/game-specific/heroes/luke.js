function Luke(level) {
  Hero.call(this, level);
}

Luke.prototype = Object.create(Hero.prototype);
Luke.prototype.constructor = Luke;

Luke.prototype.name = "Luke";

Luke.prototype.level1HP = 100;
Luke.prototype.perLevelHP = 10;
Luke.prototype.ticksToNextTurn = 60;
