import React, { Component } from 'react';
import Nav from './layout/Nav';
import Main from './layout/Main';
import Comments from './layout/Comments';
import Contact from './layout/Contact';
import Footer from './layout/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Main />
        <Comments />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
