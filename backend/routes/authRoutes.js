const express = require('express');
const { register, login, upload } = require('../controllers/authController.js');

const router = express.Router();

router.post('/register', upload.single('avatar'), register);
router.post('/login', login);

module.exports = router;