const express = require('express');
const { register, login, upload, profile, updateProfile } = require('../controllers/authController.js');
const authMiddleware = require('../middlewares/authMiddleware.js');

const router = express.Router();

router.post('/register', upload.single('avatar'), register);
router.post('/login', login);
router.get("/profile", authMiddleware, profile);
router.put("/profile", authMiddleware, updateProfile);

module.exports = router;