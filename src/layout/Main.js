import React from 'react';

const firstImage ={
  backgroundImage: "url('img/rvtaBays.png')"
};
const secondImage ={
  backgroundImage: "url('img/rvtaTyres.png')"
};
const thirdImage ={
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
          </ol>
          <div className="carousel-inner" role="listbox">
            {/* <!-- Slide One - Set the background image for this slide in the line below --> */}
            <div className="carousel-item active" style={firstImage}>
              <div className="carousel-caption d-none d-md-block">
                <h3>First Slide</h3>
                <p>This is a description for the first slide.</p>
              </div>
            </div>
            {/* <!-- Slide Two - Set the background image for this slide in the line below --> */}
            <div className="carousel-item" style={secondImage}>
              <div className="carousel-caption d-none d-md-block">
                <h3>Second Slide</h3>
                <p>This is a description for the second slide.</p>
              </div>
            </div>
            {/* <!-- Slide Three - Set the background image for this slide in the line below --> */}
            <div className="carousel-item" style={thirdImage}>
              <div className="carousel-caption d-none d-md-block">
                <h3>Third Slide</h3>
                <p>This is a description for the third slide.</p>
              </div>
            </div>
            <div className="carousel-item" style={thirdImage}>
              <div className="carousel-caption d-none d-md-block">
                <h3>Fourth Slide</h3>
                <p>This is a description for the third slide.</p>
              </div>
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

      {/* <!-- Page Content --> */}
      <section className="py-5">
        <div className="container">
          <h1><b><i>RIBBLE VALLEY Tyre &amp; Auto Services</i></b></h1>
          <p>The background images for the slider are set directly in the HTML using inline CSS. The rest of the styles for this template are contained within the
            <code>half-slider.css</code>file.</p>
        </div>
      </section>
    </div>
    );
  }
}
