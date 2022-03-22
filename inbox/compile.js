// compile code will go here
const path = require('path');
const fs = require('fs');
const solc = require('solc');

const InboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const source = fs.readFileSync(InboxPath, 'utf-8');

module.exports =  solc.compile(source, 1).contracts[':Inbox'];
