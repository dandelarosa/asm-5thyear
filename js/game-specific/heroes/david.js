function David(level) {
  Hero.call(this, level);
}

David.prototype = Object.create(Hero.prototype);
David.prototype.constructor = David;

David.prototype.name = "David";

David.prototype.level1HP = 100;
David.prototype.perLevelHP = 10;
David.prototype.ticksToNextTurn = 40;
