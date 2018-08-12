function setupBattleFormationForSelectedOption(selectedOption) {
  if (selectedOption === "Fight Formation 1") {
    enemies = [
      new BadderGuy(30),
    ];
  }
  else if (selectedOption === "Fight Formation 2") {
    enemies = [
      new BadderGuy(32),
      new BadderGuy(32),
      new BadderGuy(32),
      new BadderGuy(32)
    ];
  }
  else if (selectedOption === "Fight Formation 3") {
    enemies = [
      new BadderGuy(40),
      new BadderGuy(40),
      new BadderGuy(40),
    ];
  }
}
