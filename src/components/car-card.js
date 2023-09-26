import React from 'react';
import '../styles/car-card.scss';
const CarCard = (props) => {
  return (

    <div className="car-card">
      <img src={props.image} alt="Car Category" />
      <div className="car-card-text">{props.make}</div>
    </div>

  )
}

export default CarCard