var express = require('express');
var morgan = require("morgan");
var ts = require("ts");
var unix = require("to-unix-timestamp");

var app = express();
var port = process.env.PORT;
var host = process.env.IP;


app.use(morgan('dev'));

app.get('/', function(req,res){
    res.send("<h1>Example</h1><div><h4>Input</h4><p>https://mongodb-concepsheon.c9users.io:8080/771292800,</p><p>https://mongodb-concepsheon.c9users.io:8080/June%2011%201994</p><h4>Output</h4><p>{'unix': '771292800', 'natural': 'Sat Jun 11 1994 00:00:00 GMT+0000 (UTC) (21y 47w 1d 10h 3m 46s ago)'}</p></div>");
});

app.get('/:time', function(req, res){
    var time = req.params.time;
    if(+time >= 0){
        res.json({
            unix: time,
            natural: ts(time)
        });
    } else {
        var date = new Date(time);
        var natural = unix(date);
        res.json({
            unix: natural,
            natural: ts(natural)
        });
    }
});

app.listen(port, host, function(){
    console.log(`https://${host}:${port}/`);
});