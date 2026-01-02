import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    department : {
        type : String,
        required : true
    },
    salary : {
        type : Number,
        required : true
    },
    role : {
        type : String,
        enum : ["admin","manager","employee"],
        default : "employee"
    }
},{
    timestamps : true
})

const UserModel = mongoose.model('userModel',userSchema);

export default UserModel;