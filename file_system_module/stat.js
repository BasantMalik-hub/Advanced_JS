const fs = require("fs")

fs.stat("notes.txt",(err,stat)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("information about[notes.txt]",stat)
    console.log("size of the file [notes.txt]",Stats.size,"Bytes")
    console.log("creation time of the file[notes.txt]",stat.birthtime.toISOString)
})

