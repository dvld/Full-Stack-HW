const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// 

// db config
const db = require('./config/keys').mongoURI;

// connect to mongo
mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));