var nodemailer = require('nodemailer'); // email sender function 
module.exports = async (req, res) => {
    try {
        var transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS
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
                res.status(500).jsonp(error);
            } else {
                console.log("Email sent");
                res.status(200).jsonp(req.body);
            }
        });
    } catch (error) {
        res.send(500, error);
    }
    
         
}