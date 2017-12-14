import React, { Component } from 'react';
import Nav from './layout/Nav';
import Main from './layout/Main';
import Comments from './layout/Comments';
import ContactForm from './layout/ContactForm';
import Footer from './layout/Footer';


class App extends Component {
  state = {
  fields: {}
};
onChange = updatedValue => {
  this.setState({  fields: {
    ...this.state.fields,
    ...updatedValue }});
}
  render() {
    return (
      <div className="App">
        <Nav />
        <Main />
        <Comments />
        <ContactForm onChange={fields => this.onChange(fields)} />
        <Footer />
      </div>
    );
  }
}

export default App;
