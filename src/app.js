import express from "express";
import connectdb from "./config/db.js";
import userrouter from "./Router/userrouter.js";

connectdb();
const app=express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//app.use(userrouter);
app.use(userrouter);

app.get("/",(req,res)=>{
    return res.json({message:"Hello i am APP.js and i am running !"});
});
app.listen(2100 , ()=>{
    console.log("Listening on Port 2100 !");
});
