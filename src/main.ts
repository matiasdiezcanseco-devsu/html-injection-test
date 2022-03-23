import 'dotenv/config'
import nodemailer from 'nodemailer'
import { template } from './template'

const table = `
<table>
<thead>
  <tr>
    <th>Header 1</th>
    <th>Header 2</th>
    <th>Header 3</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Content 1</td>
    <td>Content 2</td>
    <td>Content 3</td>
  </tr>
  <tr>
    <td>Content 1</td>
    <td>Content 2</td>
    <td>Content 3</td>
  </tr>
</tbody>
</table>
`

let email = template.replace('{table}', table)

const sendEmail = async () => {
  try {
    let transporter = nodemailer.createTransport({
      host: 'smtp-relay.sendinblue.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.SENDINBLUE_USERNAME,
        pass: process.env.SENDINBLUE_PASSWORD,
      },
    })

    await transporter.sendMail({
      from: 'bot@gmail.com',
      to: process.env.SENDINBLUE_SEND_TO,
      subject: 'Test Email - HTML Injection',
      text: '',
      html: email,
    })

    console.log('Email sent!')
  } catch (err) {
    console.log(err)
    console.log('There was an error sending the email.')
  }
}

sendEmail()
