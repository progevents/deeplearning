"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
const startDir = "/Users/dougchang/deeplearning/ts_directory_async";
fs.readdir(startDir, (err, readMe) => {
    readMe.forEach((x) => {
        console.log(x);
    });
});
