const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const app = express();

const corsOptions = {
  origin: "https://romanenkostud.github.io",
  methods: "POST",
};

// Enable CORS (Cross-Origin Resource Sharing)
app.use(cors(corsOptions));

// Define a route to validate emails
app.post("/", (req, res) => {
  const {email} = req.body;

  if (email && email.endsWith("@abler.com")) {
    res.status(200).json({
      valid: true,
      message: "Email is valid for the abler.com domain.",
    });
  } else {
    res.status(400).json({
      valid: false,
      message: "Email is not valid for the abler.com domain.",
    });
  }
});

// Deploy the Express app as a Firebase Function
exports.validateEmail = functions.https.onRequest(app);
