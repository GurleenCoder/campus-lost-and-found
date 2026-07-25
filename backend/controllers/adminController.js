const { generateAdminToken } = require("../middleware/adminAuth");
const adminLogin = async (req, res) => {
  const { username, password } = req.body;

  if (
    username === process.env.ADMIN_USERNAME &&
    password === process.env.ADMIN_PASSWORD
  ) {
    const token = generateAdminToken();

return res.status(200).json({
  success: true,
  message: "Login successful",
  token,
});
  }

  res.status(401).json({
    success: false,
    message: "Invalid username or password",
  });
};

module.exports = {
  adminLogin,
};