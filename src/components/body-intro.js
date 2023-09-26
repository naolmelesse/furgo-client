import React from 'react';
import '../styles/body-intro.scss';

const BodyIntro = () => {
  function isHost(){
    const token = localStorage.getItem("token");
    
    if(token){
      const decodedValue = JSON.parse(atob(token.split('.')[1]));
      if(decodedValue['host']) return <div><h1>Grow your Furgo business</h1>
      <p>See how you can make money using your vehicle</p></div>;
      else return <div><h1>Find your next car</h1>
      <p>Need a car for the weekend or you have a dream car you've always wanted to drive? Try Furgo.</p></div>;
    }else return <div><h1>Find your next car</h1>
    <p>Need a car for the weekend or you have a dream car you've always wanted to drive? Try Furgo.</p></div>;
    
  }
  return (

        <div className="body-intro">
            {isHost()}
        </div>
  )
}

export default BodyIntro