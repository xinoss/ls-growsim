const path = require('path');

exports.serveLoginPage = (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'static', 'dist', 'index.html'));
};

exports.serveAdminPage = (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'static', 'dist', 'index.html'));
};
