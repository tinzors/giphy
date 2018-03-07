const nodemailer = require('nodemailer');
import config from '../../../../config.json'

module.exports = (app) => {
    app.post('/api/email', (req, res) => {
        let { email, giphyUrlToSend, message } = req.body
        let { user, pass, from } = config.email.auth
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user,
                pass
            }
        });

        let mailOptions = {
            from,
            to: email,
            subject: 'Check out this Giphy!!!',
            text: `Hey, checkout this Giphy! \n` +
                  `Url: ${giphyUrlToSend} \n` +
                  `${message}`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
                res.status(500).send('oops..')
            } else {
                console.log('Email sent: ' + info.response);
                res.sendStatus(200)
            }
        });
    })
}
