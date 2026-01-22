const express = require('express');
const { addBook, upload, getAllBooks, getSpecificBook } = require('../controllers/bookController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post("/book", upload.array('coverImages', 3), authMiddleware, addBook);
router.get("/books", getAllBooks);
router.get('/book/:bookId', getSpecificBook);

module.exports = router;