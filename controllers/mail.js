const Mail = require("../models/mail");

exports.mail = (req, res, next) => {

    if (req.body.name === "" || req.body.email === "" || req.body.subject === "" || req.body.Message === "") {
        return res.status(401).json("Enter the values correctly");
    }
    else{
        const mail = new Mail({
            name: req.body.name,
            phoneNumber: req.body.phoneNumber,
            email: req.body.email,
            subject: req.body.subject,
            Message: req.body.Message
        });

        mail.save().then( result => {
            res.status(201).json("Thank you for getting in touch, I always try my best to respond as soon as possible, you can expect a response in at most 48 hours.");
        });
    }

}