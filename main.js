import { setUpGame } from "./src/gameStart.js";
import { runGame } from "./src/runGame.js";
import { gameData } from "./src/game_data.js";

const main = () => {
  console.log("welcome to Jaipur Market");
  setUpGame(gameData);
  runGame(gameData);
  return 1;
};

main();