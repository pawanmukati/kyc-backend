const express = require("express");
const {createPdf,fetchPdf,sendPdf} = require("./pdfController");
const pdfRoute = express.Router();

pdfRoute.post("/createPdf",createPdf); // to generate pdf
pdfRoute.get("/fetchPdf",fetchPdf); // to fetch pdf
pdfRoute.post("/sendPdf",sendPdf); // to send pdf in mail

module.exports = pdfRoute;