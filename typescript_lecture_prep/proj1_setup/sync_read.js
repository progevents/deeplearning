"use strict";
exports.__esModule = true;
var fs = require('fs');
var startDir = "/Users/dougchang/deeplearning/ts_directory_async";
fs.readdir(startDir, function (err, readMe) {
    readMe.forEach(function (x) {
        console.log(x);
    });
});
