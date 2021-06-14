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
  let response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum%2Cbitcoin%2Cripple%2Cvechain&vs_currencies=gbp&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true');
  let data = await response.json();

  let ethereum = data.ethereum;
  let bitcoin = data.bitcoin
  let xrp = data.ripple
  let vechain = data.vechain

  ethereum.name = "Ethereum"
  bitcoin.name = "Bitcoin"

      
  console.log([ethereum, bitcoin]);
  return [ ethereum, bitcoin ]
}
getCurrentPrice()

module.exports = { getCurrentPrice };
