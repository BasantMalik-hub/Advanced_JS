import http from 'http';
import fs from 'fs';

const server = http.createServer((req, res) => {
    console.log("hello");
    const order = {
        orderId: 10987,
        des:"Delhi",
        source:"Ghaziabad",
        username:"ABC"
    }
    const data = fs.readFileSync('./index.html','utf-8');
    console.log(`${data}`);
    res.writeHead(200,{
        // "content-type": "application/json",
        "content-type": "text/html",
        "custom-header": "Hello ECE"
    })
    res.end(data);

    // res.end(JSON.stringify(order))
    // res.statusCode = 200;
    // res.setHeader("content-type","application/json")
    // res.end("Hello Everyone");
    
});
server.listen(3000,"127.0.0.1", () => {
    console.log("server is running on http://127.0.0.1:3000/");
});



//status code 200 means everything is ok
//status code 201 means something is created
//status code 401 means unauthorized
//status code 403 means forbidden
//status code 404 means not found
//status code 500 means internal server error
//status code 503 means service unavailable

// we can send plain(text),json,html
