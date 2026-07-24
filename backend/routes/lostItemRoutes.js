const express = require("express");

const router = express.Router();

const {
  createLostItem,
} = require("../controllers/lostItemController");

// POST /api/lost-items
router.post("/", createLostItem);

module.exports = router;