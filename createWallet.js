const Web3 = require("web3");
const infura = "https://polygon-mainnet.infura.io/v3/bfbe44e440de4";
const web3 = new Web3(infura);

const wallet = web3.eth.accounts.wallet.create(2, "wallet");
console.log(wallet);
