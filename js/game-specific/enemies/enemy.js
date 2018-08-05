function Enemy(level) {
  // These properties are calculated using the enemy's level
  this.maxHP = 0;

  // Transient stats
  this.currentHP = 0;

  this.setLevel = function(level) {
    this.level = level;
    this.maxHP = this.level1HP + this.perLevelHP * (level - 1);
  }
  this.setLevel(level);

  // Don't heal on level up (for now)
  this.currentHP = this.maxHP;
}

Enemy.prototype.canControl = false;

// These properties should be customized per enemy

Enemy.prototype.name = "Badder Guy";

Enemy.prototype.level1HP = 100;
Enemy.prototype.perLevelHP = 10;
Enemy.prototype.ticksToNextTurn = 100;
