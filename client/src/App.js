import React, { Component } from 'react';

import { Provider } from 'react-redux'
import store from './store'

// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import MyNavbar from './components/MyNavbar'
import BookList from './components/BookList'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <MyNavbar />
          <BookList />
        </div>
      </Provider>
    );
  }
}

export default App;
