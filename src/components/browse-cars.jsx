import React, { useState, useEffect } from 'react';
import RentableCarcard from '../components/rentable-car-card';
import "../styles/browse-cars.scss";
import axios from 'axios';

const BrowseCars = () => {
    const [cars, setCars] = useState([]);
    useEffect( () => {
        async function fetchData(){
            await axios.get('http://localhost:8080/getCars/')
            .then((res) => setCars(res.data))
            .catch(err => {
                console.log(err);
            });
        }
        fetchData();
    }, [])
    //console.log(cars)
    // const fetchCars = () => {
        
    // }
  return (
    <div className="available-cars-wrapper">
    <h2 className="cars-title">Cars for rent</h2>
    <div className="available-cars-list">
        
        {cars.map((car) => {
            //console.log(car);
            const carData = {
                image: "http://localhost:8080/" + car.carPhoto[0].filename,
                make: car.make,
                model: car.model,
                year: car.year,
                price: car.price
            }
            //console.log(carData);
            return <RentableCarcard car_id={car._id} image={carData.image} make={carData.make.toUpperCase()} model={carData.model} year={carData.year} price={carData.price}/>
        })}
    </div>
    </div>
   
  )
}

export default BrowseCars;