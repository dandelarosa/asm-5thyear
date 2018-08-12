function BadderGuy(level) {
  Enemy.call(this, level);
}

BadderGuy.prototype = Object.create(Enemy.prototype);
BadderGuy.prototype.constructor = BadderGuy;

BadderGuy.prototype.name = "Badder Guy";

BadderGuy.prototype.ticksToNextTurn = 100;

BadderGuy.prototype.baseHPAtLevel = function(level) {
  const level1HP = 100;
  const perLevelHP = 50;
  return level1HP + perLevelHP * (level - 1);
}

BadderGuy.prototype.basePhysicalAttackAtLevel = function(level) {
  const valueAtLevel1 = 10;
  const valuePerLevel = 10;
  return valueAtLevel1 + valuePerLevel * (level - 1);
}
