import mongoose from "mongoose";
const emailSchema=new mongoose.Schema({
    email:{
        type:String,
        require:true,
    },
    date:{
        type:Date,
        default:Date.now(),
    },
})
const EmailModel = mongoose.models.email || mongoose.model("email",emailSchema);
export default EmailModel; 