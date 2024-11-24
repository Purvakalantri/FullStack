const mongoose=require("mongoose");

const StudentsSchema=new mongoose.Schema({
    name :String,
    roll_no:String,
    Branch:String,
    Address:String,
    email:String,
})
const Student = mongoose.model("Student",StudentsSchema);
module.exports=Student;