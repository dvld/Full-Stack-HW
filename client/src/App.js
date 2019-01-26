import React, { Component } from 'react';

// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import MyNavbar from './components/MyNavbar'

class App extends Component {
  render() {
    return (
      <div className="App">
      <MyNavbar />
      </div>
    );
  }
}

export default App;
