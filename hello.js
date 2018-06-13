console.log("Hello World!");

// Exit
const readline = require('readline');
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
process.stdout.write("Press any key to continue . . . ");
process.stdin.on('keypress', (str, key) => { process.exit(); });
