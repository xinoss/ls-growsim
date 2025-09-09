const AccessTokenService = require("../services/generateAccessToken");
const User = require("../models/User");

async function authenticateToken(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) return res.status(401).json({ message: 'Have not Token' });

  try {
    const payload = AccessTokenService.verify(token);

    const user = await User.findOne({ username: payload.username }).select('username role permission');
    if (!user) return res.status(403).json({ message: "Invalid Token" });

    req.user = {
      username: user.username,
      role: user.role,
      permission: user.permission,
    };

    next();
  } catch (err) {
    return res.status(403).json({ message: "Invalid Token" });
  }
}

module.exports = authenticateToken;
