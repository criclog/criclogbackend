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
            userName: userData.userName,
            email: userData.email,
            mobileNo: userData.mobileNo,
            userId: userData.userId
          }
         
        
        const createUser= await adminauth.create(data)
        // console.log(createUser)
         await sendMailToUser(userData.email,password,userData.userName)
        res.json({createUser, message:"signup successfully"})

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
    let finduserId = await adminauth.findOne({userId:userData.userId})
    console.log(finduserId);
    if(!findEmail) return res.status(404). json({message:"user not registerd...."})

    if(!finduserId) return res.status(404). json({message:"incorrect userId...."})
        let findPassword= await bcrypt.compare(userData.password,findEmail.password);
    // console.log(findPassword)
    if(!findPassword) return res.status(404).json({message:"incorrect password"})
        let token = generateToken(findEmail)
        res.json({token, message:'login successfully'})
        // res.json(findEmail)
    // console.log("Login successfull")


 }
 catch(error){
    res.json({
        error:error.message
    })

 }
 }
 const putadmin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if admin exists
        const existingAdmin = await adminauth.findOne({ email });
        if (!existingAdmin) {
            return res.status(404).json({ message: "Data not found" });
        }

        // Hash the new password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Update admin data
        const updateData = { password: hashedPassword, email };
        const updatedAdmin = await adminauth.updateOne({ email }, updateData);

        return res.json({ updatedAdmin, message: "Password updated successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};







module.exports={
   signup,
   signin,
   putadmin
}