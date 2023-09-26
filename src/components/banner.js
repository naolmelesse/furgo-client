import React, { useEffect } from 'react';
import '../styles/banner.scss';

const Banner = () => {

  const isHost = () => {    
      const token = localStorage.getItem("token");
      if(token){
        const decodedValue = JSON.parse(atob(token.split('.')[1]));
        if(decodedValue['host']) return <div className="banner-host"></div>;
        else return <div className="banner"></div>;
      }
      else return <div className="banner"></div>;
      
      //console.log(decodedValue);
      
    
  }

  return (
    <div>
      {isHost()}
    </div>
    
  )
}

export default Banner