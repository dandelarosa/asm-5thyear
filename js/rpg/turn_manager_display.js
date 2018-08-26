function TurnManagerDisplay(turnManager) {
  this.turnManager = turnManager;

  this.draw = function() {
    var currentCombatant = this.turnManager.currentCombatant;
    var currentDescription = currentCombatant ? currentCombatant.name + "'s Turn" : "";
    drawText(currentDescription, GAME_WIDTH/2, 420, 'black', 'center', 'top');

    drawText(this.turnManager.battleTimer, GAME_WIDTH/2, 450, 'black', 'center', 'top');
  }
}
