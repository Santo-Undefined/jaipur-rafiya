import { take } from "./take.js";
import { exchange } from "./exchange.js";
import { sellGoods } from "./sell.js";

export const fillMarket = ({ market, deck }) => {
  if (deck.length < 1) return market;

  while (market.length < 5) {
    const good = deck.pop();
    if (good) market.push(good);
  }
  return market;
};

export const chooseAction = () => {
  const marketFns = [take, exchange, sellGoods];
  const promptMessage = `Available actions
  1. take
  2. exchange
  3. sell
Choose action number`;
  const action = parseInt(prompt(promptMessage));
  if (![1, 2, 3].includes(action)) {
    console.log("Enter valid action number");
    return chooseAction();
  }
  return marketFns[action - 1];
};