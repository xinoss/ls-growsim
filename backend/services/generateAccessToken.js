const jwt = require("jsonwebtoken");
const { ACCESS_SECRET, ACCESS_EXPIRES_IN } = require("../tokenConfig");

class AccessTokenService {
  static generate(username, isAdmin = false) {
    const payload = { username, isAdmin };
    return jwt.sign(payload, ACCESS_SECRET, { expiresIn: ACCESS_EXPIRES_IN });
  }

  static verify(token) {
    return jwt.verify(token, ACCESS_SECRET);
  }
}

module.exports = AccessTokenService;