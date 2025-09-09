const User = require('../models/User');

async function getPermission(username) {
  const user = await User.findOne({ username });
  return user?.permission || false;
}

module.exports = getPermission;
