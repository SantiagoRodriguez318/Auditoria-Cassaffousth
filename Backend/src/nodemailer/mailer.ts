const nodemailer = require("nodemailer");

export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "AresCodeInfo@gmail.com",
        pass: "ottn bcgq edaj mmyc",
    },
});

transporter.verify().then(() => {
    console.log("Preparado para enviar correos");
});t:;

