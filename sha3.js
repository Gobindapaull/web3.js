const Web3 = require("web3");
const infura_ws = "wss://mainnet.infura.io/ws/v3/bfb05af0e44e44018a16c54c5a428de4";
const webs3 = new Web3(infura_ws);

_event = "Transfer(address,address,uint)";
_eventutils = webs3.utils.sha3(_event);
console.log(_eventutils);
