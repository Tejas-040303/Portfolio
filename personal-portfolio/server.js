const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
require("dotenv").config();

const app = express();
app.use(express.json());

// CORS Configuration
const allowedOrigins = [
  "http://localhost:3000", // Add your frontend's URL here
  "https://your-frontend-domain.com",
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
}));

const PORT = process.env.PORT || 5000;

// OAuth2 Setup
const oAuth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  "https://developers.google.com/oauthplayground"
);

oAuth2Client.setCredentials({
  refresh_token: process.env.REFRESH_TOKEN,
});

// Function to refresh the access token if expired
async function refreshAccessToken() {
  try {
    const { tokens } = await oAuth2Client.refreshAccessToken(); // Refresh the access token
    oAuth2Client.setCredentials(tokens);  // Update credentials with new tokens
    console.log("Access Token Refreshed");
    return tokens.access_token;  // Return the new access token
  } catch (error) {
    console.error("Error refreshing access token:", error);
    throw new Error("Could not refresh access token");
  }
}

// Create the email transport using OAuth2 credentials
const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.EMAIL_USER,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN,// Ensure access token is always up to date
  },
});

// SMTP verification
contactEmail.verify((error) => {
  if (error) {
    console.error("SMTP Verification Failed:", error.message);
  } else {
    console.log("SMTP Server Ready to Send Emails");
  }
});

// POST route to handle contact form submission
app.post("/contact", async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;
  const name = `${firstName} ${lastName}`;
  
  // Email content
  const mail = {
    from: name,
    to: process.env.EMAIL_USER, // The email where the contact form is sent
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };

  // Send email
  try {
    await contactEmail.sendMail(mail);
    res.status(200).json({ code: 200, status: "Message sent successfully." });
  } catch (error) {
    console.error("Error sending email:", error.message);
    res.status(500).json({ code: 500, status: "Message not sent, please try again." });
  }
});

// Start the server
app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));
