const mongoose = require("mongoose");

const lostItemSchema = new mongoose.Schema(
  {
    itemName: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      required: true,
    },

    dateLost: {
      type: Date,
      required: true,
    },

    locationLost: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    image: {
      type: String,
      default: "",
    },

    status: {
      type: String,
      default: "Searching",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("LostItem", lostItemSchema);