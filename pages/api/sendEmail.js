// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs

import sgMail from '@sendgrid/mail';
import fs from 'fs';
import path from 'path';

export default async function sendEmail(req, res) {
  const { email, insideText, card } = req.body;
  const pathToAttachment = path.resolve(`./public`, `${card}/attachment.pdf`);

  const attachment = fs.readFileSync(pathToAttachment).toString('base64');
  // console.log('image', attachment);

  // console.log('hello', { email, insideText });
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: { email }, // Change to your recipient
    from: 'postit@vala88.me', // Change to your verified sender
    subject: 'Postit, Spread the Love',
    text: insideText,

    attachments: [
      {
        content: attachment,
        filename: 'attachment.pdf',
        type: 'image/jpeg',
        disposition: 'attachment',
      },
    ],
  };

  await sgMail
    .send(msg)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });
}
