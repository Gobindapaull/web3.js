const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
const account = web3.eth.accounts;

console.log(Web3);
console.log(web3);
console.log(account);
