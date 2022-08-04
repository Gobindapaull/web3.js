const Web3 = require("web3");
const infura_ws = "wss://mainnet.infura.io/ws/v3/b5af0e6c8de4";
const webs3 = new Web3(infura_ws);

_event = "Transfer(address,address,uint)";
_eventutils = webs3.utils.sha3(_event);
console.log(_eventutils);


webs3.eth.subscribe('logs', {
    address: '',
    topics: [''],
    fromBlock: 'latest',
}, (error, log) {
    if(!error) {
        console.log(log)
    }
})
