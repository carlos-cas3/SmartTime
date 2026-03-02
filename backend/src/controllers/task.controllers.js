const taskService = require("../services/task.service");

exports.getAll = async (req, res) => {
    try {
        const userId = req.user.id;
        const tasks = await taskService.getAll(userId);
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getById = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user.id;
        const task = await taskService.getById(id, userId);
        res.json(task);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

exports.create = async (req, res) => {
    try {
        const userId = req.user.id;
        const task = await taskService.create(userId, req.body);
        res.status(201).json(task);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.update = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user.id;
        const task = await taskService.update(id, userId, req.body);
        res.json(task);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.delete = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user.id;
        await taskService.delete(id, userId);
        res.json({ message: "Task deleted successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
