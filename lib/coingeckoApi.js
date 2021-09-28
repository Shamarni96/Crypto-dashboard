// const fetch = require("node-fetch");

// async function getCurrentPrice() {
//   // put your request to the api here
//   let response = await fetch('https://api.coingecko.com/api/v3/coins/ethereum/history?date=11-05-2021&localization=false');
//   let data = await response.json();
//   console.log(data.market_data.current_price.gbp);
//   return data.market_data.current_price.gbp
// }
// getCurrentPrice()

// module.exports = { getCurrentPrice };

const fetch = require("node-fetch");

async function getCurrentPrice() {
  // put your request to the api here
  let response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cripple%2Cvechain%2Ccardano%2Cbinancecoin%2Cdogecoin%2Cpolkadot%2Cchainlink%2Csolana&vs_currencies=gbp&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true');
  let data = await response.json();

  let ethereum = data.ethereum;
  let bitcoin = data.bitcoin
  let xrp = data.ripple
  let vechain = data.vechain
  let cardano = data.cardano
  let dogecoin = data.dogecoin
  let chainlink = data.chainlink
  let solana = data.solana
  let polkadot = data.polkadot
  let binancecoin = data.binancecoin


  ethereum.name = "Ethereum"
  bitcoin.name = "Bitcoin"
  xrp.name = "Xrp"
  vechain.name = "VeChain"
  cardano.name = "Cardano"
  dogecoin.name = "Dogecoin"
  chainlink.name = "Chainlink"
  solana.name = "Solana"
  polkadot.name = "Polkadot"
  binancecoin.name = "Binance Coin"
      
  console.log([ethereum, bitcoin, xrp, vechain, cardano, dogecoin, chainlink, solana, polkadot, binancecoin]);
  return [ ethereum, bitcoin, xrp, vechain, cardano, dogecoin, chainlink, solana, polkadot, binancecoin ]

};
getCurrentPrice()

module.exports = { getCurrentPrice };
