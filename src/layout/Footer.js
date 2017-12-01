import React from 'react';

export default class Footer extends React.Component {
  render () {
    return (
      <footer className="py-5 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">Copyright &copy; Ribble Valley Tyre &amp; Auto {(new Date().getFullYear())}</p>
        </div>
        {/* <!-- /.container --> */}
      </footer>
    );
  }
}
