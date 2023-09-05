import users from "../Controller/usercontroller.js";
import { Router } from "express";
const userrouter=new Router();
userrouter.get("/allusers" , users.allusers);
userrouter.post("/create" , users.CreateUser);
userrouter.get("/like/:name" , users.findLikeUsers);
export default userrouter;