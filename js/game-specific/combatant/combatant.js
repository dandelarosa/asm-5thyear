function Combatant(level) {
  // These properties are calculated using the combatant's level
  this.maxHP = 0;

  // Transient stats
  this.currentHP = 0;

  this.setLevel = function(level) {
    this.level = level;
    this.maxHP = this.baseHPAtLevel(level);
  }
  this.setLevel(level);

  // Don't heal on level up (for now)
  this.currentHP = this.maxHP;
}

// Below are properties to be overridden for each combatant subclass
Combatant.prototype.canControl = false;

Combatant.prototype.baseHPAtLevel = function(level) {
  const level1HP = 100;
  const perLevelHP = 100;
  return level1HP + perLevelHP * (level - 1);
}
