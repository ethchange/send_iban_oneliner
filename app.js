var web3 = require('web3');
var program = require('commander');
var abi = require('./node_modules/web3/lib/contracts/SmartExchange.json');

program
    .version('1.0.0')
    .option('-a, --address <address>', 'set address of the exchange')
    .option('-i, --identifier <id>', 'set user identifier')
    .parse(process.argv);

if (!program.address || !program.identifier) {
    console.log('error: you need to specify address and identifier');
    process.exit(1);
}

var address = program.address;
var identifier = program.identifier;

var contract = web3.eth.contract(abi).at(address);
var request = contract.deposit.request(web3.fromAscii(identifier));
console.log(JSON.stringify(request, null, 2));

