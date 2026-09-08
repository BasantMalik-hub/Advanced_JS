const fs = require("fs");
// callback based method

// create a file
fs.writeFile("notes.txt", "ECEA", (err) => {
    if (err) {
        console.log(err);
        return;
    }else{
    console.log("data successfully written in the file notes.txt");
    }
});
fs.readFile("notes.txt","utf8",(err,data)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(data);
})

// update file
const updateData = "Hello ECE-A";
fs.appendFile("notes.txt",updateData,(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("File updated successfully");
})