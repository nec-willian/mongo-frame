var mongodb = require('mongodb');
var mongoose = require('mongoose');
var fs = require('fs');
var utils = require('./src/utils.js');
var app = require('./src/routes');


var schemasFiles = fs.readdirSync('./src/schema');
schemasFiles.forEach(function (schema) {
    let className = schema.classify();
    let content = require('./src/schema/'+schema);
    global[className] =  mongoose.model(className, content);
});

mongoose.connect('mongodb://localhost/framework', { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));