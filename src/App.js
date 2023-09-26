import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Banner from './components/banner';
import BodyIntro from './components/body-intro';
import Nav from './components/nav';
import './App.css';
import BodyCars from './components/body-cars';
import Footer from './components/footer';
import UserTestimonial from './components/user-testimonial';
import BodyMotive from './components/body-motive';
import ContactUs from './components/contact-us';
import NavLoggedIn from './components/nav-logged-in';
import React from 'react';
import BecomeAHost from "./components/become-a-host";
import BrowseCars from "./components/browse-cars";
import ProfilePage from "./components/profile-page";
import RentCar from "./components/rent-car";
import Checkout from "./components/checkout";
import RentSuccess from "./components/rent-success";


function App() {


  function currentUser(){
    const token = localStorage.getItem("token");
    //console.log(token);
    if(token) return <NavLoggedIn/>;
    else return <Nav/>;
  }
  


  return (
    <div>
      
<Router>
      
    <Routes>  

      
      <Route path="/" element={<>
        {(currentUser())}
        <Banner/>
        <BodyIntro/>
        <BodyCars/>
        <BodyMotive/>
        <BrowseCars/>
        <UserTestimonial/>
        </>}/>
        
      {/* <Route path="/user" element={<>
        <Banner/>
        <BodyIntro/>
        <BodyCars/>
        <BodyMotive/>
        <UserTestimonial/>
        </>}/> */}

          <Route path="/contact" element={<>
            {(currentUser())}
          <ContactUs/>
          </>}/>
          <Route path="/list-your-car" element={<>
            {(currentUser())}
          <BecomeAHost/>
          </>}/>
          <Route path="/profile" element={<>
            {(currentUser())}
          <ProfilePage/>
          </>}/>
          <Route path="/rent-car/:id" element={<>
            {(currentUser())}
            <RentCar/>
          </>}/>
          <Route path="/checkout" element={<>
            {(currentUser())}
            <Checkout/>
          </>}/>
          <Route path="/success" element={<>
            {(currentUser())}
            <RentSuccess/>
          </>}/>
      
    </Routes>
    <Footer/>
    </Router>


    </div>
  
    

  );
}

export default App;
