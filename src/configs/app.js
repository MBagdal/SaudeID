const express = require('express');
const parser  = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');

module.exports = () => {
    let server = express(),
        create,
        start;

    create = (config, db) => {
        let routes = require('../routes');

        server.set('env',config.env);
        server.set('port',config.port);
        server.set('hostname',config.hostname);

        server.use(express.urlencoded({ extended: false }));
        server.use(express.json())
        server.use(methodOverride('_method'));


        mongoose.connect(
            db.database,
            {
                useNewUrlParser: true, 
                useUnifiedTopology: true
            }
        );

        routes.init(server);
    };

    start = () => {
        let hostname = server.get('hostname'),
            port = server.get('port');
        
        server.listen(port, function(){
            console.log('Express server listening on - http://' + hostname + ':' + port);
        })
    }

    return {
        create,
        start,
    }
};