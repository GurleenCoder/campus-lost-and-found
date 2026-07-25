const LostItem = require("../models/LostItem");

// @desc    Create a new lost item
// @route   POST /api/lost-items
// @access  Public

const createLostItem = async (req, res) => {
  try {
    const lostItem = await LostItem.create(req.body);

    res.status(201).json({
      success: true,
      message: "Lost item reported successfully.",
      data: lostItem,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Get all lost items
// @route   GET /api/lost-items
// @access  Public

const getLostItems = async (req, res) => {
  try {
    const lostItems = await LostItem.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: lostItems,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch lost items.",
    });
  }
};

const getLostItemById = async (req, res) => {
  try {
    const lostItem = await LostItem.findById(req.params.id);

    if (!lostItem) {
      return res.status(404).json({
        success: false,
        message: "Lost item not found.",
      });
    }

    res.status(200).json({
      success: true,
      data: lostItem,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Delete a lost item
// @route   DELETE /api/lost-items/:id
// @access  Admin

const deleteLostItem = async (req, res) => {
  try {
    const lostItem = await LostItem.findByIdAndDelete(req.params.id);

    if (!lostItem) {
      return res.status(404).json({
        success: false,
        message: "Lost item not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Lost item deleted successfully.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createLostItem,
  getLostItems,
  getLostItemById,
  deleteLostItem,
};