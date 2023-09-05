import mongoose from "mongoose";
const connectdb = ()=>{
const uri="mongodb://127.0.0.1:27017/mycollection";
 mongoose.connect(uri , {
    autoCreate:true,
    autoIndex:true
 }).then((res)=>{
    console.log("DataBase Connected !");
 }).catch((eror)=>{
    console.log("DataBase Not Connected !");
 });
};
export default connectdb;


