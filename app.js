var Web3 = require('web3');

var web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/5eef205c93678a2f648d6ed4'));

const address = "0x91a7c0acef1fC528CE695513C8242191A";

web3.eth
    .getBalance(address)
    .then((balance) => {
        console.log(`${web3.utils.fromWei(balance)}`)
});