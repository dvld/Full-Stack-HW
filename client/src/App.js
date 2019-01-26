import React, { Component } from 'react';

// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import MyNavbar from './components/MyNavbar'
import BookList from './components/BookList'

class App extends Component {
  render() {
    return (
      <div className="App">
      <MyNavbar />
      <BookList />
      </div>
    );
  }
}

export default App;
