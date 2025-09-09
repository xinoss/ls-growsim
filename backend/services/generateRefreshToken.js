const jwt = require("jsonwebtoken");
const { REFRESH_SECRET, REFRESH_EXPIRES_IN } = require("../tokenConfig");

class RefreshTokenService {
  static generate(username, isAdmin = false) {
    const payload = { username, isAdmin };
    return jwt.sign(payload, REFRESH_SECRET, { expiresIn: REFRESH_EXPIRES_IN });
  }

  static verify(token) {
    return jwt.verify(token, REFRESH_SECRET);
  }
}

module.exports = RefreshTokenService;
