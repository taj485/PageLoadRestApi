const http = require('http');
const app = require('./app');
const chalk = require('chalk');

const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port, function(){
    console.log(`listening on port number ${chalk.green(port)}`)
});


