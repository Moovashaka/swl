import React from 'react';

const firstImage ={
  backgroundImage: "url('img/rvtalogo2.png')"
};
const secondImage ={
  backgroundImage: "url('img/rvtaTyres.png')"
};
const thirdImage ={
  backgroundImage: "url('img/rvtaBays.png')"
};
const fourthImage ={
  backgroundImage: "url('img/lamboMot.png')"
};

export default class Main extends React.Component {
  render () {
    return (
      <div>
      <header>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          </ol>
          <div className="carousel-inner" role="listbox">
            {/* <!-- Slide One - Set the background image for this slide in the line below --> */}
            <div className="carousel-item active" style={firstImage}>
            </div>
            {/* <!-- Slide Two - Set the background image for this slide in the line below --> */}
            <div className="carousel-item" style={secondImage}>
            </div>
            {/* <!-- Slide Three - Set the background image for this slide in the line below --> */}
            <div className="carousel-item" style={thirdImage}>
            </div>
            <div className="carousel-item" style={thirdImage}>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </header>

<br />
{/* <!-- Features Section --> */}

<hr />
<section>
  <div className="container">
      <div className="row">
      <div className="col-lg-6">
        <h2><i>Ribble Valley</i> Tyre &amp; Auto Services Ltd</h2>
        <address>Kestor Lane, Longridge, Lancashire. PR3 3AD</address>
        <ul>
          <li>Car</li>
          <li>Commercial</li>
          <li>Agricultural</li>
          <li>Fleet</li>
          <li>Unstyled page elements for easy customization</li>
        </ul>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, omnis doloremque non cum id reprehenderit, quisquam totam aspernatur tempora minima unde aliquid ea culpa sunt. Reiciendis quia dolorum ducimus unde.</p>
      </div>
      <div className="col-lg-6">
        <img className="img-fluid rounded" src="http://placehold.it/700x450" alt="" />
      </div>
      </div>
{/* <!-- /.row --> */}
    </div>
      </section>
      <hr />
      <br />
      <br />
      <section>

        <div className="card-deck">
        <div className="card text-center">
            <img className="card-img-top" src="http://placehold.it/500x325" alt="Card image cap" />
        <div className="card-body">
          <h4 className="card-title">MOT</h4>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div className="card text-center">
        <img className="card-img-top" src="http://placehold.it/500x325" alt="Card image cap" />
        <div className="card-body">
          <h4 className="card-title">Tyres</h4>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div className="card text-center">
        <img className="card-img-top" src="http://placehold.it/500x325" alt="Card image cap" />
        <div className="card-body">
          <h4 className="card-title">Servicing</h4>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      </div>

      </section>
    </div>
    );
  }
}
