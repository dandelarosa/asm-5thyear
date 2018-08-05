function Hero(level) {
  // These properties are calculated using the hero's level
  this.maxHP = 0;

  // These properties should be saved in the game state
  this.currentHP = 0;

  this.setLevel = function(level) {
    this.level = level;
    this.maxHP = this.level1HP + this.perLevelHP * (level - 1);
  }
  this.setLevel(level);

  // Don't heal on level up (for now)
  this.currentHP = this.maxHP;

  this.getSaveState = function() {
    var saveState = {
      // Name is used to determine which hero class to load
      name: this.name,
      level: this.level,
      currentHP: this.currentHP,
    };
    return saveState;
  }

  this.loadSaveState = function(saveState) {
    // All stats should've been calculated previously
    this.currentHP = saveState.currentHP;
  }
}

/**
 * Call this instead of Hero.loadSaveState to ensure that the correct hero subclass gets loaded.
 */
function heroFromSaveState(saveState) {
  var heroClasses = {
    "David": David,
    "Shane": Shane,
    "Luke": Luke,
  }
  var heroName = saveState.name;
  var heroClass = heroClasses[heroName];
  if (!heroClass) {
    return null;
  }
  var heroLevel = saveState.level;
  var hero = new heroClass(heroLevel);
  if (hero) {
    hero.loadSaveState(saveState);
  }

  return hero;
}

Hero.prototype.canControl = true;

// These properties should be customized per hero

Hero.prototype.name = "Hero";

Hero.prototype.level1HP = 100;
Hero.prototype.perLevelHP = 10;
Hero.prototype.ticksToNextTurn = 40;
