// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs

import sgMail from '@sendgrid/mail';

const fs = require('fs');

export default async function sendEmail(req, res) {
  const pathToAttachment = `https://hamedjenabi.me/me.png`;
  const attachment = fs.readFileSync(pathToAttachment).toString('base64');

  const { email, insideText } = req.body;
  console.log('hello', { email, insideText });
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: email, // Change to your recipient
    from: 'vala.arefi@gmail.com', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: insideText,
    html: insideText,
    attachments: [
      {
        content: attachment,
        filename: 'me.png',
        type: 'application/pdf',
        disposition: 'attachment',
      },
    ],
  };

  await sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent');
    })
    .catch((error) => {
      console.error(error);
    });
}
