const express = require('express');
const authMiddleware = require('../utils/authMiddleware');
const router = express.Router();

router.get('/logged', authMiddleware, (req, res) => {
  res.render('logged', {
    user: req.user.displayName,
    avatar: req.user.photos[0].value,
  });
});

router.get('/no-permission', (req, res) => {
  res.render('noPermission');
});

router.get('/profile', authMiddleware, (req, res) => {
  res.render('profile');
});

router.get('/profile/settings', authMiddleware, (req, res) => {
  res.render('settings');
});

module.exports = router;
