import mongoose, { Schema } from "mongoose";
const user=new Schema({
    user:{
        type:String, 
        required:true
    }
});
const likeuser=mongoose.model("likeusers" , user);
export default likeuser;