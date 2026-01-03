import { setUpGame } from "./src/game_setup.js";
import { runGame } from "./src/game_start.js";
import { gameState } from "./DS/game_state.js";

const main = () => {
  console.log("welcome to Jaipur Market");
  setUpGame(gameState);
  runGame(gameState);
  return 1;
};

main();