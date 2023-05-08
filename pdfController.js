// we use html pdf

const pdf = require("html-pdf");
const path = require("path");
const nodemailer = require("nodemailer");
const fs = require("fs");
const pdfTemplate = require("./document/document");
const env = require("dotenv");
env.config();

exports.createPdf = (req, res) => {
  pdf.create(pdfTemplate(req.body), {}).toFile("invoice.pdf", (err) => {
    if (err) {
      console.log(err);
    }
    res.send("pdf generated");
  });
};

exports.fetchPdf = (req, res) => {
  res.sendFile(path.join(__dirname, "invoice.pdf"));
};

exports.sendPdf = (req, res) => {
  pathToAttachment = path.join(__dirname, "invoice.pdf");
  attachment = fs.readFileSync(pathToAttachment).toString("base64");

  let smtpTransport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    service: "Gmail",
    port: 465,
    secure: true,
    use_authentication: true, 
    auth: {
    //   user: process.env.USER,
    //   pass: process.env.PASSWORD,
    user:'pawan.mukati@newtechfusion.com',
    pass:'Pawan@5842'
    },
    tls: { rejectUnauthorized: false },
  });

  smtpTransport.sendMail(
    {
    //   from: 'suryakant@newtechfusion.com',
      from: 'pawan.mukati@newtechfusion.com',
      to: 'pawan.mukati@newtechfusion.com',
      subject: "KYC Application Data",
      html: `
      User KYC Application Data, Thanks.`,
      attachments: [
        {
          content: attachment,
          filename: "invoice.pdf",
          contentType: "application/pdf",
          path: pathToAttachment,
        },
      ],
    },
    function (error, info) {
      if (error) {
        console.log(error);
      } else {
        res.send("Mail has been sended to your email. Check your mail");
      }
    }
  );
};

