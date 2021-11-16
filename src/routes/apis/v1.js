const express = require('express');
let router = express.Router();
const blogController = require('../../controller/blogController');

router.use('/articles', blogController.router);

module.exports = { 
    router, 
};