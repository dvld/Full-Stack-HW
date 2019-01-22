const express = require('express')
const router = express.Router();

// Book model
const Book = require('../../models/Book');

// @route GET to api/books
// @desc Get all books
router.get('/', (req, res) => {
  Book.find()
    .sort({ date: -1 })
    .then(books => res.json(books));
});

// @route POST to api/books
// @desc Post - Save a book
router.post('/', (req, res) => {
  const savedBook = new Book({
    title: req.body.title,
    authors: req.body.authors,
    description: req.body.description,
    image: req.body.image,
    link: req.body.link
  });
  savedBook.save().then(book => res.json(book));
});

// @route DELETE to api/books/:id
// @desc Delete a saved book
router.delete('/:id', (req, res) => {
  Book.findById(req.params.id)
    .then(book => book.remove()
      .then(() => res.json({ success: true }))
    )
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;