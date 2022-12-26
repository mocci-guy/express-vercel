const Web3 = require("web3");
const abi = require("./abi.json");

const web3 = new Web3('https://bsc-dataseed1.binance.org/'); // @dev Input blockchain node link
const tokenContract = new web3.eth.Contract(abi, '0xd92377433705E3065f1706d618eBE043bDA751c4'); // @dev Input smart-contract that you need

module.exports = tokenContract;