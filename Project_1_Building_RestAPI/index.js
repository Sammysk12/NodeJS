const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 8000;
const users = require("./MOCK_DATA.json");


//Middleware means a plugin to read the data comes from frontend
app.use(express.urlencoded({extended:false}));

app.use((req, res, next)=>{
    console.log("Hello I am middleware 1");
next();

})

app.use((req,res,next) =>{
    console.log("Hello I am middleware 2");
    fs.appendFile('log.txt', `${Date.now()}: ${req.method}: ${req.path}: ${req.ip}\n`, (err, data) =>{
        next();
    })

})

app.get("/api/users", (req,res)=>{
    return res.json (users);
})

app.post("/api/users", (req,res)=>{
    const body = req.body;
    users.push({body, id:users.length+1});
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) =>{
        return res.json ({status:"OK", id:users.length});

    })
})


app.patch("/api/users", (req,res)=>{
    const id = req.body.id;
    const body = req.body;

    const Reuser = users.find((user) =>{
        
    user.first_name = body.first_name;
    
    
    })
    

    return res.json ({status:"Pending"});
})

app.delete("/api/users", (req,res)=>{
    return res.json ({status:"Pending"});
})










app.route("/api/users:id")
.get((req, res)=> {
    const id = req.params.id;
    const user = users.find((user) =>{user.id === id})  
    return res.json(user);  //^This user is an object used in anonymous function as argument in which the data from users is fetched
})
.post((req,res)=>{
    res.json({status:"Pending"})
})
.patch((req,res)=>{
    res.json({status:"Pending"})
})
.delete((req,res)=>{
    res.json({status:"Pending"})
})


app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`) 
})