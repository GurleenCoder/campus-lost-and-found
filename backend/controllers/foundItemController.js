const FoundItem = require("../models/FoundItem");

// @desc    Create a new found item
// @route   POST /api/found-items
// @access  Admin

const createFoundItem = async (req, res) => {
  try {
   const itemData = {
  ...req.body,
  image: req.file ? `/uploads/${req.file.filename}` : "",
};

const foundItem = await FoundItem.create(itemData);

    res.status(201).json({
      success: true,
      message: "Found item added successfully.",
      data: foundItem,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Get all found items
// @route   GET /api/found-items
// @access  Public

const getFoundItems = async (req, res) => {
  try {
    const foundItems = await FoundItem.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: foundItems,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch found items.",
    });
  }
};

// @desc    Get a single found item
// @route   GET /api/found-items/:id
// @access  Public

const getFoundItemById = async (req, res) => {
  try {
    const foundItem = await FoundItem.findById(req.params.id);

    if (!foundItem) {
      return res.status(404).json({
        success: false,
        message: "Found item not found.",
      });
    }

    res.status(200).json({
      success: true,
      data: foundItem,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Mark found item as claimed
// @route   PATCH /api/found-items/:id/claim
// @access  Admin

const markItemAsClaimed = async (req, res) => {
  try {
    const foundItem = await FoundItem.findById(req.params.id);

    if (!foundItem) {
      return res.status(404).json({
        success: false,
        message: "Found item not found.",
      });
    }

    const { name, rollNo, branch } = req.body;

    if (!name || !rollNo || !branch) {
  return res.status(400).json({
    success: false,
    message: "Please provide claimant details.",
  });
}

foundItem.status = "Claimed";

foundItem.claimedBy = {
  name,
  rollNo,
  branch,
  claimedDate: new Date(),
};

await foundItem.save();

    res.status(200).json({
      success: true,
      message: "Item marked as claimed.",
      data: foundItem,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createFoundItem,
  getFoundItems,
  getFoundItemById,
  markItemAsClaimed,
};