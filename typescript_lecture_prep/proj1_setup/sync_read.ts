
const fs = require('fs');

const startDir = "/Users/dougchang/deeplearning/ts_directory_async"

fs.readdir(startDir, (err:any,readMe:any)=>{
    readMe.forEach( (x:any)=>{
        console.log(x)
    })
})