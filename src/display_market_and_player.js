export const displayMarket = ({ market }) => {
  const marketInfo = `  Market Goods
  ${market.join(" ")}
  ${[0, 1, 2, 3, 4].join(" ")} \n\n`;

  console.log(marketInfo);
};

export const displayPlayer = (player) => {
  const playerInfo = `Current player = ${player.playerName}
hand = ${player.hand}
herd = ${player.herd}
points = ${player.points}
`;
  console.log(playerInfo);
};
