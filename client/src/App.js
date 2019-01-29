import React, { Component } from 'react';
import { Container } from 'reactstrap'

import { Provider } from 'react-redux'
import store from './store'

// import 'bootstrap/dist/cs3s/bootstrap.min.css';
import './App.css';

// components
import MyNavbar from './components/MyNavbar'
import BookList from './components/BookList'
import BookModal from './components/bookModal'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <MyNavbar />
          <Container>
            <BookModal />
            <BookList />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
