const Projects = require("../models/projects");

exports.projects = (req, res, next) => {
    Projects.find({}).then(result => {
        if (!result) {
            return res.status(401).json({
                message: "No Projects Available"
            });
        }
        const projectsList = result;
        res.status(200).json(projectsList);
    });
}