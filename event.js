import fs from "fs";

setTimeout(() => {
    console.log("setTimeout");
}, 3000);

fs.readFile("intro.txt")