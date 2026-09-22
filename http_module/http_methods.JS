// http methods

// - GET
// - POST 
// - PUT 
// - PATCH
// - DELETE

// import http from 'http'

const http = require("http");
const fs = require("fs"); 

const server = http.createServer((req, res) => {
    console.log(`Received request for: ${req.url}`);

    console.log("hello");

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");

    if (req.url === "/text") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("this is raw text");
    }else if (req.url === "/json") {
        res.writeHead(200, { "Content-Type": "application/json" }); 
        const data = { message: "success", status: 200 };
        res.end(JSON.stringify(data));
    }else if (req.url === "/html") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>welcome</h1>");
    }else if(req.url === "/config"){
         res.writeHead(200, { "Content-Type": "application/json" });
         let jsondata = JSON.parse(fs.readFileSync("config.json", 'utf-8'));
         res.end(JSON.stringify(jsondata));
    }else{
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Page not found");
    }
});

server.listen(3000, "127.0.0.1", () => {
    console.log("server is working on http://127.0.0.1:3000");
});
