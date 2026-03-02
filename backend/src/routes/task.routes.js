const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");
const taskController = require("../controllers/task.controllers");

router.get("/", authMiddleware, taskController.getAll);
router.get("/:id", authMiddleware, taskController.getById);
router.post("/", authMiddleware, taskController.create);
router.put("/:id", authMiddleware, taskController.update);
router.delete("/:id", authMiddleware, taskController.delete);

module.exports = router;
