import React from 'react';
import '../styles/user-testimonial.scss';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Testimonial from './testimonial';

const UserTestimonial = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };



  return (
        <div className="">
          <div className="testimonial-text">
            <h2>Testimonials from our customers</h2>
            <p>Hear what our customers have to say...</p>
          </div>
        <Slider {...settings} className="testimonial-slider">
          <Testimonial/>
          <Testimonial/>
          <Testimonial/>
          <Testimonial/>
          <Testimonial/>
          <Testimonial/>

          
        </Slider>
        </div>



  )
}

export default UserTestimonial;