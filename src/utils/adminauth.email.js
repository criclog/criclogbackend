const nodemailer= require("nodemailer")

const sendMailToUser = async (email,password,userName) =>
{
    try{
       const transport =nodemailer.createTransport({
         service:"gmail",
         auth:{
         user:"rubypandu4@gmail.com",
         pass:"caob divm pbax opwc"
         }
       })
       const mailOption ={
        from:"rubypandu4@gmail.com",
        to:email,
        subject:"welcome to website",
        text:`Hello ${userName},This your password ${password}`
       }
       await transport.sendMail(mailOption);
       console.log(`Mail successfully sended to ${userName}`);

    }
    catch(error){
        console.log(error.message);

    }
}
module.exports = sendMailToUser;