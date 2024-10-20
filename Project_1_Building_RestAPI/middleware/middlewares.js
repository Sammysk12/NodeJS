const fs = require("fs");

function logReqRes(fileName){
    return (req,res, next) =>{
        
//Creating paths (routes) for different functions

    fs.appendFile(
        fileName, 
        `${Date.now()}: ${req.method}: ${req.path}: ${req.ip}\n`, 
       (err, data) =>{
        next();
    })

    }
};


module.exports = logReqRes;