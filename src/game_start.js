import { chooseAction, fillMarket } from "./market_actions/general.js";
import { displayMarket, displayPlayer } from "./display/display.js";

export const runGame = (gameState) => {
  let currentPlayer = 0;
  while (true) {
    console.clear();
    fillMarket(gameState);
    const player = gameState.players[currentPlayer];
    displayMarket(gameState);
    displayPlayer(player);
    const doAction = chooseAction();
    doAction(player, gameState);
    displayMarket(gameState);
    displayPlayer(player);
    prompt("Go to next player, press enter");
    currentPlayer = 1 - currentPlayer;
  }
};