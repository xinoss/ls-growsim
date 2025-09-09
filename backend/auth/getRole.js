const User = require('../models/User');

async function getRole(username) {
  const user = await User.findOne({ username });
  return user?.role || null;
}

module.exports = getRole;
