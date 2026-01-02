import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    status : {
        type : String,
        enum : ["Pending","In Progress","Completed"],
        default : "Pending"
    }
},{
    timestamps : true
})

const TaskModel = mongoose.model('taskModel',taskSchema);

export default TaskModel;