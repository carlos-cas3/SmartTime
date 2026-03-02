const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");
const projectController = require("../controllers/project.controllers");

router.get("/", authMiddleware, projectController.getAll);
router.get("/:id", authMiddleware, projectController.getById);
router.post("/", authMiddleware, projectController.create);
router.put("/:id", authMiddleware, projectController.update);
router.delete("/:id", authMiddleware, projectController.delete);

module.exports = router;
