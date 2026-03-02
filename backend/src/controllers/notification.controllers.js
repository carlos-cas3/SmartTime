const notificationService = require("../services/notification.service");

exports.getAll = async (req, res) => {
    try {
        const userId = req.user.id;
        const notifications = await notificationService.getAll(userId);
        res.json(notifications);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.markAsRead = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user.id;
        const notification = await notificationService.markAsRead(id, userId);
        res.json(notification);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.markAllAsRead = async (req, res) => {
    try {
        const userId = req.user.id;
        await notificationService.markAllAsRead(userId);
        res.json({ message: "All notifications marked as read" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.delete = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user.id;
        await notificationService.delete(id, userId);
        res.json({ message: "Notification deleted successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
