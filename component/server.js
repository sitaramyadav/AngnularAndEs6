/**
 * Created by seetaramyadav on 9/11/16.
 */

var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('./movies_list/bower_components/index.html');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});