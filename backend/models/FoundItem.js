const mongoose = require("mongoose");

const foundItemSchema = new mongoose.Schema(
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

    locationFound: {
      type: String,
      required: true,
    },

    dateFound: {
      type: Date,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      default: "",
    },

    status: {
      type: String,
      default: "Available",
    },

    claimedBy: {
  name: {
    type: String,
    default: "",
  },
  rollNo: {
    type: String,
    default: "",
  },
  branch: {
    type: String,
    default: "",
  },
  claimedDate: {
    type: Date,
    default: null,
  },
},

  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("FoundItem", foundItemSchema);