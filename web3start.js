const Web3 = require("web3");
// HTTPS
const infura = "https://polygon-mainnet.infura.io/v3/b05af0e4de4";
const web3 = new Web3(infura);
// WEBSOCKETS
const infura_ws = "wss://mainnet.infura.io/ws/v3/05af44e4401de4";
const webs3 = new Web3(infura_ws);

const ABI = [];
const address = "";
const contract = new webs3.eth.Contract(ABI, address);


