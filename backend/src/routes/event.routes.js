const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");
const eventController = require("../controllers/event.controllers");

router.get("/", authMiddleware, eventController.getAll);
router.get("/:id", authMiddleware, eventController.getById);
router.post("/", authMiddleware, eventController.create);
router.put("/:id", authMiddleware, eventController.update);
router.delete("/:id", authMiddleware, eventController.delete);

module.exports = router;
