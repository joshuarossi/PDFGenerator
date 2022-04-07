// make an express server
const express = require('express');
var html_to_pdf = require('html-pdf-node');
// const generateNPE = require('./templates/npe.js');
const generateStyledNPE = require('./templates/styledNPE.js');
const app = express();
const port = 3000;

app.use('/', async (req, res, next) => {
  const {
    NAME,
    USERNAME,
    NUM,
    TIMEGENERATED,
    DATEGENERATED,
    DATETRANSACTION,
    TIMETRANSACTION,
    NOMBRECLIENTO,
    CodigoPagado,
    ACCOUNTID,
    BAIDTRANSACCION,
    STATUS,
    AMOUNT
  } = req.query;

  const options = {
    format: 'Letter',
    border: {
      top: '1cm',
      right: '1cm',
      bottom: '1cm',
      left: '1cm'
    }
  };
  const c = generateStyledNPE(
    NAME,
    USERNAME,
    NUM,
    TIMEGENERATED,
    DATEGENERATED,
    DATETRANSACTION,
    TIMETRANSACTION,
    NOMBRECLIENTO,
    CodigoPagado,
    ACCOUNTID,
    BAIDTRANSACCION,
    STATUS,
    AMOUNT
  );
  const content = app.render(c);
  const pdfDoc = await html_to_pdf.generatePdf(
    {
      content
    },
    options
  );
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'inline; filename="hello.pdf"');
  res.send(pdfDoc);
});

app.listen(port);
