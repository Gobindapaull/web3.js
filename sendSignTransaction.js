const Web3 = require('web3');
const infura = "https://polygon-mainnet.infura.io/v3/bfbf0018a54c5a428de4";
const web3 = new Web3(infura);

const private_key = "2897cc107e37f38701f3ac0b2c1d49b88e7ea3616";
const from_address = "0xEb33Ff2FFe9Ff744366734E4133a6F4";
const to_address = "0xc94757e3Ce30acC95d2F92a8b723E98Af1";

async function eth_transaction() {
    var value = web3.utils.toWei('0.1', 'ether');
    var signedTransaction = await web3.eth.accounts.signTransaction({
        to: to_address,
        value: value,
        gas: 2000000
    }, private_key);

    web3.eth.sendSignedTransaction(signedTransaction.rawTransaction).then((receipt) => {
        console.log(receipt);
    });

}
eth_transaction();
