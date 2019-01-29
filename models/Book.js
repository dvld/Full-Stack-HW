
// dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema
const BookSchema = new Schema({

  name: {
    type: String
  },

  // title: {
  //   type: String,
  //   required: true
  // },

  // authors: {
  //   type: [String],
  //   required:true
  // },

  // description: {
  //   type: String,
  //   required: true
  // },

  // image: {
  //   type: String,
  //   required: true
  // },

  // link: {
  //   type: String,
  //   required: true
  // }

});

module.exports = Book = mongoose.model('book', BookSchema);