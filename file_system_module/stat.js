const fs = require("fs")

fs.stat("notes.txt",(err,stat)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("information about[notes.txt]",typeof(stat))
})