const Web3 = require("web3");
const infura_ws = "wss://mainnet.infura.io/ws/v3/bbaf0e44e44c58e4";
const webs3 = new Web3(infura_ws);

webs3.eth.subscribe('pendingTransactions', function(error, result){
   console.log(result)
})
