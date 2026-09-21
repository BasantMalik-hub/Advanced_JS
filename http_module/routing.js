import http from 'http'
import fs from 'fs'

const template = fs.readFileSync('./index.html', 'utf-8');

const server = http.createServer((req, res) => {
    console.log(`Request path: ${req.url}`);
    
    let pageContent = "";
    let statusCode = 200;
  
    if (req.url === "/") {
        pageContent = "Hello from the homepage!";
    } else if (req.url === "/about") {
        pageContent = "Welcome to the About Page.";
    } else if (req.url === "/contact") {
        pageContent = "This is the Contact Page.";
    } 
    
    else if (req.url === "/skills") {
        pageContent = "Skills Page: Node.js, File System Operations, and HTTP Architecture.";
    } 
    
    else if (req.url === "/projects") {
        pageContent = "Projects Page: Custom Single-Template Content Injection Server.";
    } 
    else {
        statusCode = 404;
        pageContent = "Page not found!";
    }

    const finalHtml = template.replace('{{%CONTENT%}}', pageContent);
    res.writeHead(statusCode, { "content-type": "text/html" });
    res.end(finalHtml);
});

server.listen(3000, "127.0.0.1", () => {
    console.log("server is running on http://127.0.0.1:3000/..");
});

// const data = fs.readFileSync('./index.html','utf-8');
// console.log(`${data}`);

// server.listen(3000,"127.0.0.1", () => {
//     console.log("server is running on http://127.0.0.1:3000/..");
// });