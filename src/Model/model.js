import mongoose, { Schema } from "mongoose"

const userschema1= new Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    status:{
        type:String
    }
});
const usermodel1=mongoose.model("User" , userschema1);
export default usermodel1;

















// //Dynamic work we will doing 
// import mongoose from "mongoose";

// const userschema=new mongoose.Schema({
//     name:{
//         type:String,
//         required:true,
//     } ,
//     status:{
//         type:String,
//         required:true,
//     }
// });

// const mongoosemodel = mongoose.model("Tusers",userschema);
// export default mongoosemodel;






// // STATIC Work we are doing 
// // const student=[
// //     {
// //         name:"student-1"
// //     },
// //     {
// //         name:"student-2"
// //     },
// //     {
// //         name:"student-3"
// //     }
// // ];

// // //console.log(student);

// // const modelstudent={
// //     sendstudent: ()=>{
// //         return student;
// //     }
// // };

// // export default modelstudent;


// // // console.log("hello world");
