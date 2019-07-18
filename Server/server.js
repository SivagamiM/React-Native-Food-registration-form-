var express = require("express");
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post("/register1", (req, res, next) => {
    console.log(req.body);
    res.json(1);
   });

app.listen(3000, () => {
 console.log("Server running on port 3000");
});