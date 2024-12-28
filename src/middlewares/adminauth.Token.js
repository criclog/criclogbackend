const jwt = require ("jsonwebtoken");

const key ="zxcvbnmlkjhgfdsaqwertyuiop"

 const generateToken = (data) =>{
    let token = jwt.sign({data},key,{expiresIn: '1h'})
    return token;

 }
 
const verifytoken =async(req,res,next) =>{
    const token =req.headers.authorization;
    const withoutBearer=token.split(" ")[1]
    console.log(withoutBearer) 

    try{
        let payload=jwt.verify(withoutBearer,key)
        
        console.log(payload)
        const checkdata= await auth.findById(payload.data._id)           
        if(!checkdata) return res.status(404).json({
            message:"user not register"
        })
        req.user=checkdata
        console.log(payload.data)
        next()
    }catch(error) {
        res.json({
            error:error.message
        })

    }

    }


 module.exports ={
     generateToken,
     verifytoken

 }