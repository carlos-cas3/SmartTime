const userService = require("../services/user.service");

exports.getProfile = async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await userService.getProfile(userId);
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateProfile = async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await userService.updateProfile(userId, req.body);
        res.json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
