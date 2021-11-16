const server = require('./src/configs/app')();
const config = require('./src/configs/config/config');
const db     = require('./src/configs/db');

server.create(config, db);
server.start();