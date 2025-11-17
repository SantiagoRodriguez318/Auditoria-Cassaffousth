const nodemailer = require("nodemailer");

export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "AresCodeInfo@gmail.com",
        pass: "onda hzry vdfw llms",
    },
});

transporter.verify().then(() => {
    console.log("Preparado para enviar correos");
});t:;

