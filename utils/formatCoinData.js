function formatCoinData(arrayCoins) {
  let coins = arrayCoins.map((coin) => {
    return {
      symbol: coin.symbol,
      current_price: coin.current_price,
      name: coin.name,
      image: coin.image.large,
      last_updated: coin.last_updated,
    };
  });
  return coins;
}

module.exports = formatCoinData;
