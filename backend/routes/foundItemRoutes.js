const express = require("express");

const router = express.Router();

const {
  createFoundItem,
  getFoundItems,
   getFoundItemById
} = require("../controllers/foundItemController");

router.get("/", getFoundItems);

router.get("/:id", getFoundItemById);

router.post("/", createFoundItem);

module.exports = router;