var nodemailer = require('nodemailer'); // email sender function 
module.exports = async (req, res) => {
    try {
        var transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                type: "OAuth2",
                user: process.env.MAIL_USER,                
                privateKey: process.env.MAIL_PRIVATE,
                serviceClient: process.env.MAIL_CLIENT,
            }
        })
        console.log(process.env.MAIL_USER)
        console.log(process.env.MAIL_PASS)
        console.log(process.env)
        var mailOptions = {
            from: 'Zedlen Page',
            to: 'luis.melencez@zedlen.com',
            subject: 'Zedlen Contact',
            text: 'Contenido del email'
        };    
        transporter.sendMail(mailOptions, function(error, info){
            if (error){
                console.log(error);
                res.send(error);
            } else {
                console.log("Email sent");
                res.send(req.body);
            }
        });
    } catch (error) {
        res.send( error);
    }
    
         
}