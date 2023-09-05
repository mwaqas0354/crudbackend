import Router from "express";
import usercontrol from "../Controller/controller.js";
const userrouter = new Router();

userrouter.get("/AllUsers" , usercontrol.GetAllUsers);

userrouter.get("/userid/:id" , usercontrol.GetSingle);

userrouter.post("/create" , usercontrol.create);

userrouter.get("/update/:id" , usercontrol.update);

userrouter.get("/delete/:id" , usercontrol.deleteuser);

export default userrouter;


















// import controllerstudent from "../Controller/controller.js";

// import Router from "express";
// const studentrouter=new Router();

// studentrouter.get("/getstudents",controllerstudent.getall);

// studentrouter.post("/create",controllerstudent.create);

// studentrouter.post("/updatestudent/", controllerstudent.status);

// // studentrouter.post("/todostatus/:id" , controllerstudent.status);



// export default studentrouter;
