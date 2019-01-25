const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const books = require('./routes/api/books');

const app = express();

const port = process.env.PORT || 5000;

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// db config
const db = require('./config/keys').mongoURI;

// connect to mongo
mongoose
  .connect(
    db,
    { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// use routes
app.use('/api/books', books);

// serve static assets
if (process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// listener
app.listen(port, () => {
  console.log(`Server running on port: ${port}`)
});