const adminauth = require("../models/adminauth.models");
const generatePassword=require("../utils/password");
const bcrypt=require("bcrypt");
const sendMailToUser=require("../utils/email");
const  {generateToken} =require("../middlewares/adminauth.Token")



const signup= async(req,res)=>{
    try{
        let userData=req.body;
        console.log(userData)
        let checkEmail= await adminauth.findOne({email:userData.email})
        console.log(checkEmail)
        if(checkEmail){
            return res.status(409).json({
                message:"Email Already Exists.."
            })
        }
        const password=generatePassword(8);
        const hash= await bcrypt.hash(password,10)
          let data={
            password:hash,
            ...userData
          }
         
        
        const createUser= await adminauth.create(data)
        // console.log(createUser)
         await sendMailToUser(userData.email,password,userData.userName)
        res.json(createUser)

    }
    catch(error){
        res.json({
            Error:error.message
        })

    }
}
 const signin= async(req,res)=>{
 try{
    let userData=req.body;
    console.log(userData);
    
    let findEmail = await adminauth.findOne({email:userData.email})
    console.log(findEmail);
    
    if(!findEmail) return res.status(404). json({message:"user not registerd...."})
        let findPassword= await bcrypt.compare(userData.password,findEmail.password);
    // console.log(findPassword)
    if(!findPassword) return res.status(404).json({message:"incorrect password"})
        let token = generateToken(findEmail)
        res.json({token})
        // res.json(findEmail)
    // console.log("Login successfull")


 }
 catch(error){
    res.json({
        error:error.message
    })

 }
 }
 const putadmin = async (req,res) =>{
    try{
        let{objectid}=req.query;
        let putadmin= req.body;
        let updatedata=await adminauth.findByIdAndUpdate(objectid,putadmin,{new:true})
        if(!updatedata){
            return res.status(404).json({message:"Data not found"})
        }
         res.json(updatedata)
    }
    catch(err){
       res.json({error:err.Message})
    }
}








module.exports={
   signup,
   signin,
   putadmin
}