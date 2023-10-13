// SENDGRID_API_KEY = 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

const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const {SENDGRID_API_KEY} = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (data) => {
    const email = {...data, from: "fullsleons@gmail.com"};
    await sgMail.send(email);
    return true;
};

module.exports = sendEmail;