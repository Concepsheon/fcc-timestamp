var express = require('express');
var morgan = require("morgan");
var ts = require("readable-timestamp");
var unix = require("to-unix-timestamp");


var fs = require("fs");
var file = "./index.html"

var app = express();
var port = process.env.PORT || 3000;
var host = process.env.IP || 'localhost';


app.use(morgan('dev'));

app.get('/', function(req,res){
    res.writeHead(200, {
        'Content-Type': "text/html"
    });
    
    fs.readFile(file, "utf8", function(err, data){
        if(err) throw err;
        res.write(data);
        res.end();
    });
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
