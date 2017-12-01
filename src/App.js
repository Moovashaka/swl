import React, { Component } from 'react';
import Nav from './layout/Nav';
import Main from './layout/Main';
import Footer from './layout/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
