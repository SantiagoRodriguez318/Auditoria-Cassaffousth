const nodemailer = require("nodemailer");

export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "SantiagoMKiller123@gmail.com",
        pass: "drqx fusa ulil pmkc",
    },
});

transporter.verify().then(() => {
    console.log("Preparado para enviar correos");
});

