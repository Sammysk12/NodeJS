const User = require("../models/user")

async function handleGetAllUsers(req, res){
    const allDbUSers = await User.find({});
    return res.json({allDbUSers});
}
async function handlegetUserById(req, res){
    const user = await User.findById(req.params.id);
    if(!user){
        return res.status(404).json({msg: "Not found!"});
    }
    
    return res.json(user); 
}

async function handleCreateUser(req, res){
    const body = req.body;

    if(!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title){
        return res.status(400).json({msg:"All fields are required..."});
    }
    const result = await User.create({
        firstName /* This data is going to database assigned from the body*/ : body.first_name,  // ->This data is coming from frontend or postman
        lastName: body.last_name,
        email:body.email,
        gender: body.gender,
        jobTitle: body.job_title,
    })

    console.log(result);

    return res.status(201).json({msg:"Success"});
}

async function handleUpdateUserById (req, res){
    const body = req.body;
    await User.findByIdAndUpdate(req.params.id, {jobTitle: body.jobTitle})
    console.log(`Id : ${req.params.id}`);
    console.log(`Job : ${body.jobTitle}`);
    return res.status(200).json({status:"Ok"});
}

async function hanndleDeleteUserById(req, res) {
    console.log(req.params.id);
    await User.findByIdAndDelete(req.params.id);
    console.log("User Deleted")
    res.status(200).json({status:"OK"})
}

module.exports= {
handleGetAllUsers,
handlegetUserById,
handleCreateUser,
handleUpdateUserById,
hanndleDeleteUserById,
}