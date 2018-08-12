const BATTLE_FORMATIONS = (function() {
  var battleFormations = [];

  battleFormations[0] = [
    new BadderGuy(30),
  ];

  battleFormations[1] = [
    new BadderGuy(30),
  ];

  battleFormations[2] = [
    new BadderGuy(32),
    new Barmander(32),
    new BadderGuy(32),
  ];

  battleFormations[3] = [
    new Barmander(40),
    new PizzaToto(40),
    new Barmander(40),
    new PizzaToto(40),
  ];

  return battleFormations;
})();

function setupBattleFormationForSelectedOption(selectedOption) {
  // TODO: access BATTLE_FORMATIONS without having to use so many if statements
  if (selectedOption === "Fight Formation 1") {
    enemies = BATTLE_FORMATIONS[1];
  }
  else if (selectedOption === "Fight Formation 2") {
    enemies = BATTLE_FORMATIONS[2];
  }
  else if (selectedOption === "Fight Formation 3") {
    enemies = BATTLE_FORMATIONS[3];
  }
}
