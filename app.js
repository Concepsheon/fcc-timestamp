var express = require('express');
var morgan = require("morgan");
var ts = require("readable-timestamp");
var unix = require("to-unix-timestamp");

var app = express();
var port = process.env.PORT || 3000;
var host = process.env.IP || 'localhost';


app.use(morgan('dev'));

app.get('/', function(req,res){
    res.send('<h1>Example</h1><div><h4>Input</h4><p>localhost:3000/771292800,</p><p>localhost:3000/June%2011%201994</p><h4>Output</h4><p>{"unix": "771292800", "natural": "11 Jun 1994"}</p></div>');
});

app.get('/:time', function(req, res){
    var time = req.params.time;
    if(+time >= 0){
        res.json({
            unix: time,
            //convert timestamp to Date object and multiply by 1000 so argument is in miliseconds
            natural: ts(new Date(time * 1000))
        });
    } else {
        var date = new Date(time);
        var natural = unix(date);
        res.json({
            unix: natural,
            natural: ts(date)
        });
    }
});

app.listen(port, host, function(){
    console.log(`https://${host}:${port}/`);
});
