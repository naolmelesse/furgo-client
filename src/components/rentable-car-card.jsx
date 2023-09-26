import React from 'react';
import '../styles/rentable-car-card.scss';

const RentableCarCard = (props) => {

  const rentCar = () => {
    window.location = "/rent-car/" + props.car_id;
  }
  return (
    <div className="car-card-wrapper">
        <div className="car-image"><img alt={props.make} src={props.image}/></div>
        <div className="car-details">
            <h3>{props.make} {props.model} {props.year}</h3>
            <p>${props.price}/day</p>
            <button onClick={rentCar}>Rent vehicle</button>
        </div>
    </div>
  )
}

export default RentableCarCard;