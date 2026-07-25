const FoundItem = require("../models/FoundItem");

// @desc    Create a new found item
// @route   POST /api/found-items
// @access  Admin

const createFoundItem = async (req, res) => {
  try {
    const foundItem = await FoundItem.create(req.body);

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

module.exports = {
  createFoundItem,
  getFoundItems,
  getFoundItemById,
};