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

module.exports = {
  createLostItem,
};