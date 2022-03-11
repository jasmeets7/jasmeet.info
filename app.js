const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const portfolioRoutes = require("./routes/portfolio");

const app = express();

mongoose.connect(
    "mongodb+srv://portjas:" +
    process.env.MONGO_ATLAS_PW +
    "@portfolio.edqsd.mongodb.net/PORTFOLIO"
)
.then(() => {
    console.log("Connected to database!");
})
.catch((err) => {
    console.log(err);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST"
    );
    next();
});

app.use("/", express.static(path.join(__dirname, "jasmeet-info")));

app.use("/api/portfolio", portfolioRoutes);

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "jasmeet-info", "index.html"));
});

module.exports = app;