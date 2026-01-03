import { shuffle } from "jsr:@std/random";

const distributeCardsToPlayers = (gameState) => {
  const deck = gameState.deck;
  for (const player of gameState.players) {
    while (player.hand.length < 5) {
      player.hand.push(deck.pop());
    }
    while (player.hand.includes("m")) {
      player.herd.push(player.hand.splice(player.hand.indexOf("m"),1)[0]);
    }
  }
};

const addPlayerDetails = (gameData) => {
  for (const player of gameData.players) {
    player.playerName = prompt(`enter player ${player.playerId} name`);
  }
};

export const setUpGame = (gameData) => {
  gameData.deck = shuffle(gameData.deck);
  gameData.bonus["3"] = shuffle(gameData.bonus["3"]);
  gameData.bonus["4"] = shuffle(gameData.bonus["4"]);
  gameData.bonus["5"] = shuffle(gameData.bonus["5"]);
  addPlayerDetails(gameData);
  distributeCardsToPlayers(gameData);
};