const http = require("http");
const fs = require("fs");
const express = require("express");



const app = express();

app.get('/', (req, res) =>{
    return res.send("He llo From Home Page")
});

app.get('/about', (req, res) =>{
    return res.send("HEllo From Home Page")
});



function myHanlder(req, res){
    const log = `${Date.now()}: ${req.method} : ${req.url} New request received\n`;   
    fs.appendFile('log.txt', log, (err,data) =>{
        
        switch(req.url){
            case"/":
            res.end("Hello from server");
            break;
            
            
            case"/contact":
            res.end("Contact Us page");
            break;
            
            case"/about":
            res.end("Hello I am sam");
            break;
            
            default:
            res.end("404 Not found!");
            break;
            }

    });
}

//Creates a web server
// const myServer  = http.createServer((req, res) =>{
    // const log = `${Date.now()}: ${req.method} : ${req.url} New request received\n`;   
    // fs.appendFile('log.txt', log, (err,data) =>{
        
    //     switch(req.url){
    //         case"/":
    //         res.end("Hello from server");
    //         break;
            
            
    //         case"/contact":
    //         res.end("Contact Us page");
    //         break;
            
    //         case"/about":
    //         res.end("Hello I am sam");
    //         break;
            
    //         default:
    //         res.end("404 Not found!");
    //         break;
    //         }

    // });  
// });

// const myServer  = http.createServer(myHanlder);


const myServer  = http.createServer(app );





myServer.listen(8000, () =>{
    console.log("Server Started!")
});
