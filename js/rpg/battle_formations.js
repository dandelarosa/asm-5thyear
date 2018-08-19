function setupBattleFormationForSelectedOption(selectedOption) {
  if (selectedOption === "Fight Formation 1") {
    enemies = [
      new BadderGuy(30),
    ];
  }
  else if (selectedOption === "Fight Formation 2") {
    enemies = [
      new BadderGuy(32),
      new Barmander(32),
      new BadderGuy(32),
    ];
  }
  else if (selectedOption === "Fight Formation 3") {
    enemies = [
      new Barmander(40),
      new PizzaToto(40),
      new Barmander(40),
      new PizzaToto(40),
    ];
  }
  else {
    // Use as a fallback in case the other formations haven't been defined
    enemies = [
      new BadderGuy(30),
    ];
  }
}
