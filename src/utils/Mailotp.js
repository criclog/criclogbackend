const nodemailer = require("nodemailer");

const sendMailToUserotp = async (email, OTP) => {
  try {
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user:"rubypandu4@gmail.com",
        pass:"caob divm pbax opwc"
      }
    });

    const mailOption = {
      from: "rubypandu4@gmail.com",
      to: email,
      subject: "Welcome to our website",
      html: `
        <div  style=" margin:10px; ">
        <div style="padding:10px 0px 10px 20px; font-size:14px;  color:white; ">
        <h3 style="color:#4a2be0";><center>WELCOME TO OUR WEBSITE</center></h3>
        <h3 style="color:#4a2be0";><center>CRICLOG</center></h3>
     
        <p style="color:#4a2be0; font-size: 16px;">This is Your reset Credentails: <br><br><span  style="color:black; font-size: 16px;">Email ID: <span style=" color: #4a2be0">${email}</span>,<br>OTP: <span style=" color: #4a2be0">${OTP}</span> 
            <br><br><br> <span style="color: black;">Best Regards,</span><br>Criclog Team</p>
    </div>
    </div>`
    };

    await transport.sendMail(mailOption);
    console.log(`Mail successfully sent to ${email}`);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = sendMailToUserotp;
