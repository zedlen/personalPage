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
        var mailOptions = {
            from: 'Zedlen Page',
            to: 'luis.melencez@zedlen.com',
            subject: 'Zedlen Contact',
            text: 'Contenido del email'
        };    
        transporter.sendMail(mailOptions, function(error, info){
            if (error){
                console.log(error);
                res.send(500, err.message);
            } else {
                console.log("Email sent");
                res.status(200).jsonp(req.body);
            }
        });
    } catch (error) {
        res.send(500, error);
    }
    
         
}