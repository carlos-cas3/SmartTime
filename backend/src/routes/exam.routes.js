const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");
const examController = require("../controllers/exam.controllers");

router.get("/", authMiddleware, examController.getAll);
router.get("/:id", authMiddleware, examController.getById);
router.post("/", authMiddleware, examController.create);
router.put("/:id", authMiddleware, examController.update);
router.delete("/:id", authMiddleware, examController.delete);

module.exports = router;
