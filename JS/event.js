import fs from "fs";

// setTimeout(() => {
//     console.log("setTimeout");
// }, 3000);

// fs.readFile("intro.txt","utf8",(err,data)=>{
//     console.log("file read completed");
// })

// setInterval(()=>{
//     console.log("set interval after 5ms");
// },500);

// setImmediate(()=>{
//     console.log("set immediate");
// })

// const fs = require('fs');

fs.readFile("intro.txt", "utf8", (err, data) => {
  console.log("file read completed");
  setTimeout(() => {
    console.log("message");
  }, 1000);

  setImmediate(() => {
    console.log("message");
  });
});
