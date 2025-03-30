const nodemailer = require('nodemailer');

require('dotenv').config(); // Load environment variables from .env file


// Function to send email
exports.sendEmail = async (req, res) => {
    const { name, email, phone, subject, message } = req.body;
    
    // Basic validation
    if (!name || !email || !message) {
        return res.status(400).json({ success: false, message: 'Name, email, and message are required fields' });
    }

    // Create a transporter object using SMTP
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER, // Company email
            pass: process.env.EMAIL_PASS || 'Ashoka$$2025' // Better to use environment variable
        }
    });

    // Email options
    const mailOptions = {
        from: `"Contact Form" <raibagipavan14@gmail.com>`, // Send as the company email with a reply-to set to user's email
        replyTo: email, // So replies go back to the person who filled out the form
        to: 'raibagipavan14@gmail.com', // Recipient email (sending to yourself)
        subject: `Mail From Contact US form Ashokafae : ${subject || 'No Subject'}`,
        html: `
            <h2>Mail From Contact US Ashokafae </h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Subject:</strong> ${subject || 'Not provided'}</p>
            <h3>Message:</h3>
            <p>${message}</p>
        `,
        // Including a text version as fallback
        text: `New message from ${name}\n\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\nSubject: ${subject || 'Not provided'}\n\nMessage: ${message}`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: 'Email sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, message: 'Failed to send email. Please try again later.' });
    }
};