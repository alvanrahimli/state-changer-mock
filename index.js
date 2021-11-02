var express = require("express");
var app = express();

app.use(express.json());

var boolState = false;

app.get('/state', function (req, res) {
    res.json({state: boolState});
});

app.post('/set-state', function (req, res) {
    if (req.body.password === "khCN3KYotpXh") {
        boolState = req.body.state;
        res.json({state: boolState});
    } else {
        res.sendStatus(401);
    }
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("App listening at http://%s:%s", host, port);
});