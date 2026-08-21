const { verifyAdmin } = require("../middleware/adminAuth");

const express = require("express");

const router = express.Router();

const upload = require("../middleware/upload");

const {
  createFoundItem,
  getFoundItems,
   getFoundItemById,
   markItemAsClaimed,
} = require("../controllers/foundItemController");

router.get("/", getFoundItems);

router.get("/:id", getFoundItemById);

router.post("/", verifyAdmin, upload.single("image"), createFoundItem);

router.patch("/:id/claim", verifyAdmin, markItemAsClaimed);

module.exports = router;