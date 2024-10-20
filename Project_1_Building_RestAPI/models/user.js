const mongoose = require('mongoose');



//Schema means structure of database. In that which data should be stored, which data is requires or not that plaaning is called as schema
const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required: true,
    },
    lastName:{
        type:String,
        required: false,
    },
    email:{
        type:String,
        required: true,
        unique: true,
    },
    jobTitle:{
        type:String,
        required: true,
    },
    gender:{
        type:String,
    },

} , {timestamps:true}) //THis creates a timestamp as soon as it creates a document

//Using the User class we can create object in database
const User = mongoose.model("user", userSchema);


module.exports = User;