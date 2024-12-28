const generatePassword=(length)=>{
    let characters="qwertyyuiiopplkjjhgfddsazxxcvbnnnmm"
    let password=""
    for(let index=0;index<length;index++){
        password += characters.charAt(Math.floor(Math.random()*characters.length))
    };
    return password;
};






module.exports=generatePassword;