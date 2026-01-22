const Book = require('../models/BookModel');
const multer = require("multer");

const upload = multer({ dest: "uploads/" }); 

const addBook = async (req, res) => {
    try {
      const userId = req.user.id;
      const { title, desc, authors, category, isForExchange } = req.body;
const coverImages = req.files && req.files.length > 0 
        ? req.files.map(file => file.path) 
        : []; 
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
        addedBy: userId,                                  
      });

      await book.populate('addedBy', 'name email');
      await book.save();

      return res.status(200).json({
        message: "Book Added Successfully",
        book: book,
      });
    } catch (err) {
        return res.status(500).json({ message: "Internal Server Error", error: err.message });
    }
};

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();

    if(books == null || books == undefined){
      return res.status(400).json({ message: "There are not any Book in the database right now"});
    }

    return res.status(200).json({ message: "Successfully fetched all the books ", books });
  } catch(err) {
    return res.status(500).json({ message: "Internal Server Error", error: err.message });
  }
};

const getSpecificBook = async (req, res) => {
  try {
    const bookId = req.params.bookId;
    const book =  await Book.findById(bookId).populate('addedBy', 'name email');

    if(!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    return res.status(200).json({ message: "Book fetched successfully", book });

  } catch(err) {
    return res.status(500).json({ message: "Internal Server Error ", error: err.message });
  }
};

module.exports = { addBook, getAllBooks, getSpecificBook, upload };