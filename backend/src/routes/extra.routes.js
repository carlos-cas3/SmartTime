const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");
const extraController = require("../controllers/extra.controllers");

router.get("/", authMiddleware, extraController.getAll);
router.get("/:id", authMiddleware, extraController.getById);
router.post("/", authMiddleware, extraController.create);
router.put("/:id", authMiddleware, extraController.update);
router.delete("/:id", authMiddleware, extraController.delete);

module.exports = router;
