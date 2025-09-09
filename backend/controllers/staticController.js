const path = require('path');
const staticDir = path.join(__dirname, '..', 'static');

exports.index = (req, res) => res.sendFile(path.join(staticDir, 'index.html'));
exports.grow = (req, res) => res.sendFile(path.join(staticDir, 'grow.html'));
exports.guide = (req, res) => res.sendFile(path.join(staticDir, 'guide.html'));
exports.community = (req, res) => res.sendFile(path.join(staticDir, 'community.html'));
exports.support = (req, res) => res.sendFile(path.join(staticDir, 'support.html'));
exports.terms = (req, res) => res.sendFile(path.join(staticDir, 'terms.html'));
