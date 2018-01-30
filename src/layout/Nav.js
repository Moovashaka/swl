import React from 'react';

export default class Nav extends React.Component {
  render () {
    return (

<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <div className="container">
    <a className="navbar-brand" href="#">T: 01772 784000 </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarResponsive">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <a className="nav-link page-scroll" href="#">Home
            <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link page-scroll" href="#about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link page-scroll" href="#services">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link page-scroll" href="#comments">Feedback</a>
        </li>
        <li className="nav-item">
          <a className="nav-link page-scroll" href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
);
}
}
