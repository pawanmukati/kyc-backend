
// we use html pdf

const pdf = require("html-pdf");
const path = require("path");
const nodemailer = require("nodemailer");
const fs = require("fs");
const pdfTemplate = require("./document/document");
const env = require("dotenv");
env.config();
 


exports.createPdf = (req,res)=>{
    pdf.create(pdfTemplate(req.body),{}).toFile('invoice.pdf',(err)=>{
        if(err){
            console.log(err);
        }
        res.send('pdf generated')
    })
}

exports.fetchPdf = (req,res)=>{
    res.sendFile(path.join(__dirname,'invoice.pdf'))
}

exports.sendPdf = (req,res)=>{
   pathToAttachment = path.join(__dirname,'invoice.pdf')
   attachment = fs.readFileSync(pathToAttachment).toString("base64")

   let smtpTransport = nodemailer.createTransport({
    host:"smtp.gmail.com",
    service:"Gmail",
    port:465,
    secure:true,
    auth:{
        user:process.env.user,
        pass:process.env.password
    },
    tls:{rejectUnauthorized:false}
   })
   smtpTransport.sendMail({
    from:process.env.EMAIL,
    to:req.body.email,
    subject:"Pdf Generated Document",
    html:`
    Testing Pdf Generated Document`,
    attachments:[
        {
            content:attachment,
            filename:"invoice.pdf",
            type:"application/pdf",
            Disposition:"attachment"
        }
    ]
   },function(error,info){
    if(error){
        console.log(error)
    }
    res.send("Mail has been send to your mail check it!")
   }
   )
}