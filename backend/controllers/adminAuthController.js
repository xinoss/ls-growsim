const User = require('../models/User');
const bcrypt = require('bcrypt');
const AccessTokenService = require('../services/generateAccessToken');
const RefreshTokenService = require('../services/generateRefreshToken');

exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) return res.status(401).json({ message: 'Not found User' });

    const match = await bcrypt.compare(password, user.password);

    if (!match) return res.status(401).json({ message: 'Incorrect Password' });

    const accessToken = AccessTokenService.generate(user.username);
    const refreshToken = RefreshTokenService.generate(user.username);

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: false,
      sameSite: "Lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.json({ accessToken });
  } catch (err) {
    console.error('Login Error:', err);
    res.status(500).json({ message: 'Server Error' });
  }
};
exports.logout = (req, res) => {
  res.clearCookie('refreshToken', {
    httpOnly: true,
    secure: true,
    sameSite: 'Lax',
  });
  res.json({ message: 'Logout Success' });
};

exports.register = async (req, res) => {
  const { username, password } = req.body;

  if (req.user.role !== 'admin') return res.status(403).json({ message: 'Have not Permssion' });
  
  try {
    const existing = await User.findOne({ username });
    if (existing) return res.status(400).json({ message: 'Admin already exists' });

    const hashed = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashed });
    await user.save();

    console.log('Register Success:', user);
    res.status(201).json({ message: 'Register Admin' });
  } catch (err) {
    console.error('Register Error:', err);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.refreshAccessToken = (req, res) => {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) return res.status(401).json({ message: "Have not Refresh Token" });

  try {
    const payload = RefreshTokenService.verify(refreshToken);
    const newAccessToken = AccessTokenService.generate(payload.username, payload.isUser);

    res.json({ accessToken: newAccessToken });
  } catch (err) {
    return res.status(403).json({ message: "Invalid Refresh Token" });
  }
};

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.user.username }).select('username role permission');
    if (!user) return res.status(404).json({ message: 'Not found User' });

    res.json({
      username: user.username,
      role: user.role,
      permission: user.permission,
    });
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.verifyToken = (req, res) => {
  if (!req.user) return res.status(401).json({ message: 'Invalid Token' });

  res.status(200).json({ message: 'Valid Token', user: req.user });
};
