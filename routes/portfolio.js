const express = require("express");

const projectsController = require("../controllers/projects");

const mailController = require("../controllers/mail");

const router = express.Router();

router.get("/projects", projectsController.projects);

router.post("/mail", mailController.mail);

module.exports = router;