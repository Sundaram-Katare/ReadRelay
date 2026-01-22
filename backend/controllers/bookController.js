const Book = require('../models/BookModel');
const multer = require("multer");

const upload = multer({ dest: "uploads/" }); 

const addBook = async (req, res) => {
    try {
      const { title, desc, authors, category, isForExchange, condition } = req.body;
      const coverImages = req.file ? req.file.path : null;

      if(!title || !desc || !authors ) {
        return res.status(400).json({ message: "All Fields are required "});
      }

      const book = await Book.create({ 
        title,
        desc,
        authors,
        category,
        coverImages,
        isForExchange,
        condition,                                  
      });
      book.save();

      return res.status(200).json({
        message: "Book Added Successfully",
        book: book,
      });
    } catch (err) {
        return res.status(500).json({ message: "Internal Server Error", error: err.message });
    }
};

module.exports = { addBook, upload };