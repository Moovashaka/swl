import React from 'react';

export default class Comments extends React.Component {
  render() {
    return (
      <div className="container" id="comments">
        <br />
    <h1 className="text-center">Customer Comments</h1>
    <br />
	<div className="row">
		<div className="col-sm-6">
            <div id="tb-testimonial" className="testimonial testimonial-primary">
                <div className="testimonial-section">
                    Quick, honest and good value for money
            	</div>
                <div className="testimonial-desc">
                      <div className="testimonial-writer">
                    	<div className="testimonial-writer-name"></div>
                    	<div className="testimonial-writer-designation"></div>
                      </div>
                </div>
            </div>
		</div>

        <div className="col-sm-6">
            <div id="tb-testimonial" className="testimonial testimonial-warning">
                <div className="testimonial-section">
                    Excellent service. Very friendly staff. excellent time keeping.
                </div>
                <div className="testimonial-desc">
                      <div className="testimonial-writer">
                    	<div className="testimonial-writer-name"></div>
                    	<div className="testimonial-writer-designation"></div>
                    	</div>
                </div>
            </div>
		</div>

        <div className="col-sm-6">
            <div id="tb-testimonial" className="testimonial testimonial-danger">
                <div className="testimonial-section">
                    Great service, very efficient and quality job, very happy customer
                </div>
                <div className="testimonial-desc">
                      <div className="testimonial-writer">
                    	<div className="testimonial-writer-name"></div>
                    	<div className="testimonial-writer-designation"></div>
                    	</div>
                </div>
            </div>
		</div>

        <div className="col-sm-6">
            <div id="tb-testimonial" className="testimonial testimonial-info">
                <div className="testimonial-section">
                    Quick and easy would highly recommend
                </div>
                <div className="testimonial-desc">
                    <div className="testimonial-writer">
                    	<div className="testimonial-writer-name"></div>
                    	<div className="testimonial-writer-designation"></div>
                    	</div>
                </div>
            </div>
		</div>

    <div className="col-sm-6">
        <div id="tb-testimonial" className="testimonial testimonial-success">
            <div className="testimonial-section">
                Excellent service. let me know when they would be there, high quality service. Very happy!
            </div>
            <div className="testimonial-desc">
                <div className="testimonial-writer">
                  <div className="testimonial-writer-name"></div>
                  <div className="testimonial-writer-designation"></div>
                  </div>
            </div>
        </div>
</div>

<div className="col-sm-6">
    <div id="tb-testimonial" className="testimonial testimonial-warning">
        <div className="testimonial-section">
            Excellent Prompt and very well organised. I recommend to anyone.
        </div>
        <div className="testimonial-desc">
            <div className="testimonial-writer">
              <div className="testimonial-writer-name"></div>
              <div className="testimonial-writer-designation"></div>
              </div>
        </div>
    </div>
</div>
  </div>
    <br/>
    <br/>

</div>


);
}
}
