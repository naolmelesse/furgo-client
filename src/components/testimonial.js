import React from 'react';
import '../styles/testimonial.scss';

const Testimonial = (props) => {
  return (
    <div className="testimonial-wrapper">
        <div className="top-host">
          <div className="host-profile">
            <img src="https://bit.ly/3QTEo6n" alt="" />
          </div>
          <div className="host-details">
            <div className="host-name">Blake Shelton</div>
            <div className="joined-date">07-2022</div>
          </div>
        </div>
        <div className="renter-testimonial">
          <div className="rating">⭐⭐⭐⭐</div>
          <div className="review"><p>Awesome host. I'd definitely recommend host.</p></div>
          <div className="review-date"><p>08-17-2022</p></div>
        </div>
    </div>
  )
}

export default Testimonial;