const auth1=require("../models/auth1.models");
const generatePassword=require("../utils/password");
const bcrypt=require("bcrypt");
const sendMailToUser=require("../utils/email");



const signup= async(req,res)=>{
    try{
        let userData=req.body;
        console.log(userData)
        let checkEmail= await auth1.findOne({email:userData.email})
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
         
       
        const createUser= await auth1.create(data)
        
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
    
    let findEmail = await auth1.findOne({email:userData.email})
    console.log(findEmail);
    
    if(!findEmail) return res.status(404). json({message:"user not registered...."})
        let findPassword= await bcrypt.compare(userData.password,findEmail.password);
    
    
    if(!findPassword) return res.status(404).json({message:"incorrect password"})
        res.json({findEmail, message:"Login successfull"})
    


 }
 catch(error){
    res.json({
        error:error.message
    })

 }
 }

module.exports={
   signup,
   signin
}