const express = require("express");

const {handleGetAllUsers, handlegetUserById, handleCreateUser, handleUpdateUserById, hanndleDeleteUserById} = require("../controllers/userController")
const router = express.Router();


router.route("/")
.get(handleGetAllUsers)
.post(handleCreateUser)





//Routes for the user
router
   .route("/:id")
   .get(handlegetUserById)
   .patch(handleUpdateUserById)
   .delete(hanndleDeleteUserById)





// })

// router.get("/", (req,res)=>{
//     return res.json (users);
// })

// router.post("/", (req,res)=>{

//     const body = req.body;

//     if(!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title){
//         return res.status(400).json({msg:"All fields are required..."});
//     }
//     users.push({body, id:users.length+1});
//     fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) =>{
//         return res.status(201).json ({status:"OK", id:users.length});

//     })
// })


// router.patch("/", (req,res)=>{
//     const id = req.body.id;
//     const body = req.body;

//     const Reuser = users.find((user) =>{
        
//     user.first_name = body.first_name;
    
    
//     })
    

//     return res.json ({status:"Pending"});
// })

// router.delete("/", (req,res)=>{
//     return res.json ({status:"Pending"});
// })


module.exports = router;