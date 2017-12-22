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
                    	<div className="testimonial-writer-name">Carl Roberts</div>
                    	<div className="testimonial-writer-designation">September 2017</div>
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
                    	<div className="testimonial-writer-name">Mary Davies</div>
                    	<div className="testimonial-writer-designation">August 2017</div>
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
                    	<div className="testimonial-writer-name">Peter Rogers</div>
                    	<div className="testimonial-writer-designation">December 2016</div>
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
                    	<div className="testimonial-writer-name">Abbi Briggs</div>
                    	<div className="testimonial-writer-designation">May 2017</div>
                    	</div>
                </div>
            </div>
		</div>

    <div className="col-sm-6">
        <div id="tb-testimonial" className="testimonial testimonial-success">
            <div className="testimonial-section">
                Excellent service. Fitter let me know when he would be there, good product,good price,good service. Very happy!
            </div>
            <div className="testimonial-desc">
                <div className="testimonial-writer">
                  <div className="testimonial-writer-name">Paul Joyce</div>
                  <div className="testimonial-writer-designation">April 2016</div>
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
              <div className="testimonial-writer-name">Josh Hughes</div>
              <div className="testimonial-writer-designation">December 2016</div>
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
