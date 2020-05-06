var express = require('express');
var app =  express();
app.use(express.static('public'));
app.listen(3000,function() {
    console.log("Listening");
});

app.get('/test',function(req,res) {
    res.sendFile('./test.html',{ root : __dirname});
});

module.exports = app;