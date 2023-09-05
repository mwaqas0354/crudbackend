import likeuser from "../Model/user.js";

const users={
    allusers:async (req , res)=>{
        const userfound=await likeuser.find();
        return res.json({message:"ALL Users Found !" , userfound});
    },
    CreateUser:async (req,res)=>{
        const like=req.body;
        console.log("User ->" , like);
        const create=await likeuser.create(like);
        return res.json({message:"User Created !" , create});
    },
    findLikeUsers:async(req , res)=>{
        const user=req.params.name;
        console.log("User Data->" , user)
        
        const find=await likeuser.find({user:new RegExp(user ,'i')});
        // const find=await likeuser.find({user:{new :RegExp(user ,'i')}});

        // if(find)    
        //     return res.json({message:"User Find " , find});
        return res.json({message:"User Not Find "});
    }
}
export default users;