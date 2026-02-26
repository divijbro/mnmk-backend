const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post("/send", async (req, res) => {

    const { name, email, phone, message } = req.body;

    try {
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.PASS_USER
            }
        });

        await transporter.sendMail({
            from: email,
            to: "cooldivijdhingra@gmail.com",
            subject: "New Celebration Booking 🎉",
            text: `
                Name: ${name}
                Email: ${email}
                Phone: ${phone}
                Message: ${message}
            `
        });

        res.json({ success: true });

    } catch (error) {
        console.log(error);
        res.json({ success: false });
    }

});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
