function BadderGuy(level) {
  Enemy.call(this, level);
}

BadderGuy.prototype = Object.create(Enemy.prototype);
BadderGuy.prototype.constructor = BadderGuy;

BadderGuy.prototype.name = "Badder Guy";

BadderGuy.prototype.level1HP = 100;
BadderGuy.prototype.perLevelHP = 10;
BadderGuy.prototype.ticksToNextTurn = 100;
