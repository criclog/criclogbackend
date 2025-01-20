const auth1=require("../models/auth1.models");
const { generatePassword, generateOTP } = require('../utils/password');
const bcrypt=require("bcrypt");
const sendMailToUser=require("../utils/email");
const sendMailToUserotp=require("../utils/Mailotp");



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
            userName: userData.userName,
            email: userData.email,
            mobileNo: userData.mobileNo
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

 const putpassword = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if admin exists
        const existingAdmin = await auth1.findOne({ email });
        if (!existingAdmin) {
            return res.status(404).json({ message: "Data not found" });
        }

        // Hash the new password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Update admin data
        const updateData = { password: hashedPassword, email };
        const updatedAdmin = await auth1.updateOne({ email }, updateData);

        return res.json({ updatedAdmin, message: "Password updated successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const putuserdata = async (req, res) => {
    try {
        const { email, updatedData } = req.body;

        // Validate inputs
        if (!updatedData || typeof updatedData !== "object") {
            return res.status(400).json({ message: "Updated data is required" });
        }

        // Check if user exists
        const userData = await auth1.findOne({ email });
        if (!userData) {
            return res.status(404).json({ message: "User not found" });
        }

        // Update user data
        const updateResult = await auth1.updateOne({ email }, { $set: updatedData });
        if (updateResult.modifiedCount === 0) {
            return res.status(304).json({ message: "No changes made to the data" });
        }

        return res.status(200).json({ message: "User data updated successfully" });
    } catch (err) {
        console.error("Error updating user data:", err);
        res.status(500).json({ error: "An internal server error occurred" });
    }
};


const OTPSend= async(req,res)=>{
    try{
        let userData=req.body;
        console.log(userData)
        let checkEmail= await auth1.findOne({email:userData.email})
        console.log(checkEmail)
        if(!checkEmail){
            return res.status(409).json({
                message:"Email Not found.."
            })
        }
        const OTP = parseInt(generateOTP(4), 10); // Convert OTP to number
const hash = await bcrypt.hash(OTP.toString(), 10);
          let data={
            OTP:hash,
          }
         
       
          const updateData = await auth1.updateOne({ email: userData.email }, data);

          await sendMailToUserotp(userData.email, OTP)
              .then(() => {
                  res.status(200).json({updateData, message: "OTP sent "});
              })
              .catch(mailError => {
                  res.status(500).json({ message: "Error sending OTP email.", error: mailError.message });
              });
  
      } catch (error) {
          res.status(500).json({
              message: "Internal server error.",
              error: error.message
          });
      }
  };



  const OTPVerify= async(req,res)=>{
    try{
       let userData=req.body;
       console.log(userData);
       
       let findEmail = await auth1.findOne({email:userData.email})
       console.log(findEmail);
       
       if(!findEmail) return res.status(404). json({message:"Email not found...."})
           let findOTP= await bcrypt.compare(userData.OTP,findEmail.OTP);
       
       
       if(!findOTP) return res.status(404).json({message:"incorrect OTP"})
           res.json({findEmail, message:"OTP verified successfully"})
       
   
   
    }
    catch(error){
       res.json({
           error:error.message
       })
   
    }
    }



module.exports={
   signup,
   signin,
   putpassword,
   putuserdata,
   OTPSend,
   OTPVerify
}