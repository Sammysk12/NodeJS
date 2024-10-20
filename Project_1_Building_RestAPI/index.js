const express = require("express");
const connectMongoDb = require("./connection");
const app = express();
const PORT = 8000;
const userRouter = require('./routes/userRoute');
const logReqRes = require("./middleware/middlewares");
// const users = require("./MOCK_DATA.json");




//Connection
connectMongoDb("mongodb://127.0.0.1:27017/employee-management-system")

//Middleware means a plugin to read the data comes from frontend
app.use(express.urlencoded({extended:false}));

// app.use((req, res, next)=>{
//     console.log("Hello I am middleware 1");
// next();

// })

app.use(logReqRes('log.txt'));
// app.route("/api/users:id")
// .get((req, res)=> {
//     const id = req.params.id;
//     const user = users.find((user) =>{user.id === id})  
//     if(!user){
//         res.status(404).json({msg: "Not found!"});
//     }
//     return res.json(user);  //^This user is an object used in anonymous function as argument in which the data from users is fetched
// })
// .post((req,res)=>{
//     res.json({status:"Pending"})
// })
// .patch((req,res)=>{
//     res.json({status:"Pending"})
// })
// .delete((req,res)=>{
//     res.json({status:"Pending"})
// })


//Routes
app.use("/users", userRouter);

app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`) 
})