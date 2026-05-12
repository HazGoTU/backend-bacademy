const nodemailer = require('nodemailer');
require('dotenv').config();


// console.log(process.env)
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: 'statebacademy@gmail.com',
        pass: 'lwjysvkznpfxdzxp',
    }
});
transporter.verify((error, succes)=>{
    if(error){
        console.error('Configuration is failed:', error)
    }else{
        console.log('Server Ready to send message')
    }
})


exports.sendVerificationEmail = async(targetMail, token)=>{
    console.log(targetMail)
    const verifyUrl = ` http://localhost:3000/auth/verify-email?token=${token}`
    const mailOptions = {
    from: process.env.SMTP_USER,
    to: targetMail,
    subject: 'Verifikasi Akun Anda',
    html:`
        <div>
            <h2>Welcome!</h2>
            <p>Thanks for has been register. Please click the button bellow for verify and activate your account </p>
            <a href="${verifyUrl}" style="background-color: #007BFF;color: #ffffff; padding 10px 20px; border-radius: 5px;text-decoration: none;display:inline-block;">Verify Account</a>
        </div>
    
        `   
};
    return transporter.sendMail(mailOptions)
}