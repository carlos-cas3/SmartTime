const projectService = require("../services/project.service");

exports.getAll = async (req, res) => {
    try {
        const userId = req.user.id;
        const projects = await projectService.getAll(userId);
        res.json(projects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getById = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user.id;
        const project = await projectService.getById(id, userId);
        res.json(project);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

exports.create = async (req, res) => {
    try {
        const userId = req.user.id;
        const project = await projectService.create(userId, req.body);
        res.status(201).json(project);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.update = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user.id;
        const project = await projectService.update(id, userId, req.body);
        res.json(project);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.delete = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user.id;
        await projectService.delete(id, userId);
        res.json({ message: "Project deleted successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
