const fs = require("fs");

const watcher = fs.watchFile("intro.txt",(curr,prev)=>{
    console.log("current:",curr.birthtime.toISOString())
    console.log("previous:",prev.birthtime.toISOString())
});

