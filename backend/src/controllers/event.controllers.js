const eventService = require("../services/event.service");

exports.getAll = async (req, res) => {
    try {
        const userId = req.user.id;
        const events = await eventService.getAll(userId);
        res.json(events);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getById = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user.id;
        const event = await eventService.getById(id, userId);
        res.json(event);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

exports.create = async (req, res) => {
    try {
        const userId = req.user.id;
        const event = await eventService.create(userId, req.body);
        res.status(201).json(event);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.update = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user.id;
        const event = await eventService.update(id, userId, req.body);
        res.json(event);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.delete = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user.id;
        await eventService.delete(id, userId);
        res.json({ message: "Event deleted successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
