import React from 'react';
import '../styles/body-motive.scss';

const BodyMotive = () => {
  return (
    <div className="body-motive-wrapper">
      <div className="motive-text">
        <h2>Get an experience</h2>
        <p>There is an experience behind every wheel.</p>
      </div>
      <div className="motive-image">
        <div className="motive-story">
          <p>Our customers get to experience different drives from our hosts.
             From a vintage to a sports ride. You name it.
          </p>
        </div>
        <div>
          <img src="https://bit.ly/3ApD3NU" alt="" />
        </div>
        
      </div>

    </div>
  )
}

export default BodyMotive