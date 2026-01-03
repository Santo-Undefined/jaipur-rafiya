export const isDeckEmpty = (deck) => !deck.length;

export const are3CoinColorsFinished = (goods) => {
  const emptyCoins = Object.values(goods).reduce(
    (count, { coins }) => (!coins.length) ? ++count : count,
    0,
  );

  return emptyCoins >= 3;
};

export const assignCamelToken = (players) => {
  const playerWithMoreCamels = players[0].herd.length > players[1].herd.length
    ? 0
    : 1;

  players[playerWithMoreCamels].points += 5;
};

export const assignSealOfExcellence = (players) => {
  const playerWithMorePoints = players[0].points > players[1].points
    ? 0
    : 1;

  players[playerWithMorePoints].sealOfExcellenceCount++;
}