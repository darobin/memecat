
var express = require("express")
,   app = express()
;

app.get("/", function(req, res) {
    res.send("<h1>ohai!</h1>");
});


app.listen(process.env.PORT);
