const { createTransport } = require('nodemailer');
const fs = require('fs');
const path = require('path');
var inlineCss = require('nodemailer-juice');
const Handlebars = require('handlebars');

const templateUtil = {
    companyName: 'Fit-figo',
    supportMail: 'customerservice@fitfigo.com',
    adminMail: 'admin@fitfigo.com',
};

var transporter = createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: 'rahulnarayanan1994@gmail.com',
        pass: '9946657822'
    }
});

transporter.use('compile', inlineCss());


var generateTemplate = (templateData, file) => {
    let data = { ...templateData, ...templateUtil };
    var source = fs.readFileSync(path.resolve('utils/template/' + file), 'utf8');
    var template = Handlebars.compile(source);
    return template(data);
};

module.exports = { transporter, generateTemplate };