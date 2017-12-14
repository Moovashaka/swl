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
                    Having my car bumped at the supermarket took the shine off my day, but a recommendation to Autoview from a friend who already used them, meant my car was soon restored.
            	</div>
                <div className="testimonial-desc">
                    <img src="https://placeholdit.imgix.net/~text?txtsize=9&txt=100%C3%97100&w=100&h=100" alt="" />
                    <div className="testimonial-writer">
                    	<div className="testimonial-writer-name">James</div>
                    	<div className="testimonial-writer-designation">Ford Focus</div>
                      <a href="#" className="testimonial-writer-company">Preston</a>
                    </div>
                </div>
            </div>
		</div>

        <div className="col-sm-6">
            <div id="tb-testimonial" className="testimonial testimonial-warning">
                <div className="testimonial-section">
                    First class service &amp; a great repair meant that I no longer have to be embarrassed to drive my car around! Thank you, I'll keep your number just in case!
                </div>
                <div className="testimonial-desc">
                    <img src="https://placeholdit.imgix.net/~text?txtsize=9&txt=100%C3%97100&w=100&h=100" alt="" />
                    <div className="testimonial-writer">
                    	<div className="testimonial-writer-name">Caroline</div>
                    	<div className="testimonial-writer-designation">Toyota Auris</div>
                    	<a href="#" className="testimonial-writer-company">Little Hulton</a>
                    </div>
                </div>
            </div>
		</div>

        <div className="col-sm-6">
            <div id="tb-testimonial" className="testimonial testimonial-info">
                <div className="testimonial-section">
                    Last time I returned a car to the lease company they charged me £600, this time I've had it repaired prior to the end of the lease for less than a third of the cost.
                </div>
                <div className="testimonial-desc">
                    <img src="https://placeholdit.imgix.net/~text?txtsize=9&txt=100%C3%97100&w=100&h=100" alt="" />
                    <div className="testimonial-writer">
                    	<div className="testimonial-writer-name">Jason</div>
                    	<div className="testimonial-writer-designation">BMW 520SE</div>
                    	<a href="#" className="testimonial-writer-company">Chorley</a>
                    </div>
                </div>
            </div>
		</div>

        <div className="col-sm-6">
            <div id="tb-testimonial" className="testimonial testimonial-success">
                <div className="testimonial-section">
                    My car had accumulated a few little knocks but Autoview were able to have it shining like a new pin again! I'm was also pleased to be treated with courtesy and not patronised.
                </div>
                <div className="testimonial-desc">
                    <img src="https://placeholdit.imgix.net/~text?txtsize=9&txt=100%C3%97100&w=100&h=100" alt="" />
                    <div className="testimonial-writer">
                    	<div className="testimonial-writer-name">Ruth</div>
                    	<div className="testimonial-writer-designation">Honda Jazz</div>
                    	<a href="#" className="testimonial-writer-company">Formby</a>
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
