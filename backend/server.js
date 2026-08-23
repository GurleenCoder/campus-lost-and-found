const dns = require("dns");

const path = require("path");

dns.setServers(["1.1.1.1", "8.8.8.8"]);

const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const lostItemRoutes = require("./routes/lostItemRoutes");

const foundItemRoutes = require("./routes/foundItemRoutes");

const app = express();

const adminRoutes = require("./routes/adminRoutes");

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

app.use(
  "/uploads",
  express.static(path.join(__dirname, "uploads"))
);

app.use("/api/found-items", foundItemRoutes);

//Routes
app.use("/api/lost-items", lostItemRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("Campus Lost & Found Backend Running 🚀");
});

app.use("/api/admin", adminRoutes);

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on port ${PORT}`);
});