const express = require('express');
const { addBook, upload } = require('../controllers/bookController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post("/book", upload.single('coverImages'), authMiddleware, addBook);

module.exports = router;