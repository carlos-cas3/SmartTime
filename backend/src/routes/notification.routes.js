const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");
const notificationController = require("../controllers/notification.controllers");

router.get("/", authMiddleware, notificationController.getAll);
router.put("/:id/read", authMiddleware, notificationController.markAsRead);
router.put("/read-all", authMiddleware, notificationController.markAllAsRead);
router.delete("/:id", authMiddleware, notificationController.delete);

module.exports = router;
