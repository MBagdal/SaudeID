const express = require('express');
const v1Controller = require('./v1');

let routes = express.Router();

routes.use('/v1', v1Controller.router);

module.exports = {
    routes,
}