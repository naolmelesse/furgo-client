import React from 'react';
import '../styles/body-cars.scss';
import CarCard from './car-card';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const BodyCars = () => {
    const settings = {
        dots: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000, 
        slidesToShow: 5,
        slidesToScroll: 1
      };

  return (
    <div className="body-cars-wrapper">
        
        <div className="choose-by-make">
            <h2>Browse by make</h2>

                <Slider {...settings} className="cars">
                    <CarCard image="https://bit.ly/3RLtdg9" make="Alfa Romeo"/>
                    <CarCard image="https://bit.ly/3Es4jz4" make="Audi"/>
                    <CarCard image="https://bit.ly/3rLA2Uj" make="BMW"/>
                    <CarCard image="https://bit.ly/3TeOEaf" make="Chevrolet"/>
                    <CarCard image="https://bit.ly/3SU1nzF" make="Dodge"/>
                    <CarCard image="https://bit.ly/3RQUuO4" make="Ford"/>
                    <CarCard image="https://bit.ly/3fXdjlF" make="Hyundai"/>
                    <CarCard image="https://bit.ly/3yvmqAo" make="Jaguar"/>
                    <CarCard image="https://bit.ly/3ywXqJ0" make="Jeep"/>
                    <CarCard image="https://bit.ly/3fX2IqS" make="Kia"/>
                </Slider>
                

            
        </div>
        <div className="choose-by-category">
            <h2>Browse by category</h2>
            <Slider {...settings} className="cars">
                <CarCard image="https://bit.ly/3MqcX3a" make="SUV"/>
                <CarCard image="https://bit.ly/3rO0Ine" make="Luxury"/>
                <CarCard image="https://bit.ly/3CpdMEL" make="Mini van"/>
                <CarCard image="https://bit.ly/3Taxjzh" make="Truck"/>
                <CarCard image="https://bit.ly/3MlVA3c" make="Sports"/>
                <CarCard image="https://bit.ly/3Cpe8v5" make="Muscle"/>
                <CarCard image="https://bit.ly/3RTM4p4" make="Convertible"/>
            </Slider>
            
        </div>

    </div>
  )
}

export default BodyCars