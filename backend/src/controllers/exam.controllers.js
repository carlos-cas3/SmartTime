const examService = require("../services/exam.service");

exports.getAll = async (req, res) => {
    try {
        const userId = req.user.id;
        const exams = await examService.getAll(userId);
        res.json(exams);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getById = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user.id;
        const exam = await examService.getById(id, userId);
        res.json(exam);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

exports.create = async (req, res) => {
    try {
        const userId = req.user.id;
        const exam = await examService.create(userId, req.body);
        res.status(201).json(exam);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.update = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user.id;
        const exam = await examService.update(id, userId, req.body);
        res.json(exam);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.delete = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user.id;
        await examService.delete(id, userId);
        res.json({ message: "Exam deleted successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
