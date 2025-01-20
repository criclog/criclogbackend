const generatePassword=(length)=>{
    let characters="QWERTYUIOPASDFGHJKLZXCVBNM1234567890!&$%@#?/"
    let password=""
    for(let index=0;index<length;index++){
        password += characters.charAt(Math.floor(Math.random()*characters.length))
    };
    return password;
};

const generateOTP=(length)=>{
     let OTP=""
    let Value="123456789"
    for(let index=0;index<length;index++){
        OTP += Value.charAt(Math.floor(Math.random()*Value.length))
        console.log(OTP)
    };
    return OTP;
    
};






module.exports={generatePassword, generateOTP};