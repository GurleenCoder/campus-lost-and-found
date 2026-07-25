const { v4: uuidv4 } = require("uuid");

let adminToken = null;

const generateAdminToken = () => {
  adminToken = uuidv4();
  return adminToken;
};

const verifyAdmin = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token || token !== adminToken) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized access.",
    });
  }

  next();
};

module.exports = {
  generateAdminToken,
  verifyAdmin,
};