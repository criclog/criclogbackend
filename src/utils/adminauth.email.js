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
        html: `
        <div  style=" margin:10px; ">
        <div style="padding:10px 0px 10px 20px; font-size:14px;  color:white; ">
        <h3 style="color:#4a2be0";><center>WELCOME TO OUR WEBSITE</center></h3>
        <h3 style="color:#4a2be0";><center>CRICLOG</center></h3>
        <h3  style="color:black";><center>Thank You for Registering.</center></h3>
        <p id="subhead" style=" color:black; font-size: 16px;">HELLO, <span style=" color: #4a2be0">${userName}</span></p>
       
        <p  style="color:black";>We’re pleased to welcome you to our platform.</p>
        <p style="color:#4a2be0; font-size: 16px;">Your Login Credentails: <br><br><span  style="color:black; font-size: 16px;">Email ID: <span style=" color: #4a2be0">${email}</span>,<br>Password: <span style=" color: #4a2be0">${password}</span> 
            <br><br><br> <span style="color: black;">Best Regards,</span><br>Criclog Team</p>
    </div>
    </div>`
       }
       await transport.sendMail(mailOption);
       console.log(`Mail successfully sended to ${userName}`);

    }
    catch(error){
        console.log(error.message);

    }
}
module.exports = sendMailToUser;