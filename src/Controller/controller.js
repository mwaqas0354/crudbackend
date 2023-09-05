import usermodel1 from "../Model/model.js";

const usercontrol={
    GetAllUsers:async(req,res)=>{
        const usercontrol= await usermodel1.find();    // find() is used to find the all users
        return res.json(usercontrol);     
    },
    GetSingle: async (req , res)=>{
      try{
            const { id }=req.params;
            console.log("id-> " ,id);
            const userid= await usermodel1.findById(id);
            if(!userid)
                return res.status(404).json({message : " User Not Found !"});
            else 
                return res.json({message :"User is " ,userid});
        }
        catch(err){
            return res.json({message:"invalid id !"});
        }
        //const{ nama }=req.params;          // with destructuring
	//const username=await usermodel1.findOne(name);

        //const name=req.params.name;         //  without destructuring
        //const username=await usermodel1.findOne({name});   // if we want to find by using name then this is used  
    },
    create:async(req,res)=>{
        //let temp=req.body;     complete body's data save in temp variable

        // const name=req.body.name;
        // const age=req.body.age;
        // const status=req.body.status;
        // console.log("name ",name);
        // console.log("age ",age);
        // console.log("status ",status);
        
        const temp=req.body;
        const user=await usermodel1.create(
           temp
            //{name , age , status}
        );
        return res.json({message:"user create !", user});
    },

    update :async (req , res)=>{
        const id=req.params.id;          // id is just to check the userid
        const temp=await usermodel1.findById(id);
        if(!temp)
            return res.status(404).json({message :"user not found !"});
        else
        {
            temp.name=req.body.name;
            temp.age=req.body.age;
            temp.status= req.body.status;
            await temp.save();
            return res.json({message:"user updates " , temp });
        }
    },
    deleteuser : async(req , res)=>{
        const id=req.params.id;
        const temp=await usermodel1.findById(id);
        if(!id)
            return res.status(404).json({message:"user not found !"});
        else
        {
            // deleteOne is used to delete the user
            await usermodel1.deleteOne();
            return res.json({message:"User Deleted !" , id});
        }
    }
};

export default usercontrol;





















// // import modelstudent from "../Model/model.js";
// import mongoosemodel from "../Model/model.js";


// const controllerstudent={

//     getall:  async(req, res)=>{
        
//         const controler=await mongoosemodel.find();
//         return res.json(controler);
//     },

//     create: async(req , res)=>{
//         // console.log("run")
//         const data = req.body
//         const usercreate= await mongoosemodel.create({name, status});
//         return res.json({usercreate});

//     },


//     status: async (req , res)=>{
//         const id=req.body.id;
//         let status1=false;
//         if(id)
//         {
//             status1=true;
//             await mongoosemodel.findById(id);
//             return res.json({message :" Status Updated !"});
//         }
//     }
// };

// export default controllerstudent;




