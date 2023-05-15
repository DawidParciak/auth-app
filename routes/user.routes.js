const express = require('express');
const router = express.Router();

const isLogged = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect('/user/no-permission');
  }
};

router.get('/logged', isLogged, (req, res) => {
  res.render('logged', {
    user: req.user.displayName,
    avatar: req.user.photos[0].value,
  });
});

router.get('/no-permission', (req, res) => {
  res.render('noPermission');
});

router.get('/profile', isLogged, (req, res) => {
  res.render('profile');
});

router.get('/profile/settings', isLogged, (req, res) => {
  res.render('settings');
});

module.exports = router;
