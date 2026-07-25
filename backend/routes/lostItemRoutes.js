const express = require("express");

const router = express.Router();

const {
  createLostItem,
  getLostItems,
  getLostItemById,
  deleteLostItem,
} = require("../controllers/lostItemController");

// GET all lost items
router.get("/", getLostItems);

router.get("/:id", getLostItemById);

// POST a new lost item
router.post("/", createLostItem);

router.delete("/:id", deleteLostItem);

module.exports = router;