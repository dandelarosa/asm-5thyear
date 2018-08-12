function setupBattleFormationForSelectedOption(selectedOption) {
  if (selectedOption === "Fight Formation 1") {
    enemies = [
      new BadderGuy(30),
    ];
  }
  else if (selectedOption === "Fight Formation 2") {
    enemies = [
      new BadderGuy(2),
      new BadderGuy(2),
      new BadderGuy(2),
      new BadderGuy(2)
    ];
  }
  else if (selectedOption === "Fight Formation 3") {
    enemies = [
      new BadderGuy(10),
      new BadderGuy(10),
      new BadderGuy(10),
    ];
  }
}
