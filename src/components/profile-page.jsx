import React, { useState, useEffect } from 'react';
import '../styles/profile-page.scss';
import axios from 'axios';


const ProfilePage = () => {
    const [userInfo, setUserInfo] = useState([]);
    const [profilePhoto, setProfilePhoto] = useState({
        img: ''
    });
    const token = localStorage.getItem("token");
    const decodedValue = JSON.parse(atob(token.split('.')[1]));
    useEffect( () => {
      async function fetchData(){
          await axios.get(`http://localhost:8080/get-user/${decodedValue['_id']}`, )
          .then((res) => setUserInfo(res.data[0]))
          .catch(err => {
              console.log(err);
          });
          await axios.get('http://localhost:8080/getCars/')
            .then((res) => setProfilePhoto({img: "http://localhost:8080/" + res.data[0].profilePhoto[0].filename}))
            .catch(err => {
                console.log(err);
            });
      }
      fetchData();
      
    }, []);
    //console.log(profilePhoto);
    function isHost(){        
        if(decodedValue['host']) return <div className="account-review">
        <h2>Host</h2>
        <p>Your vehicles</p>
        </div>;
        else return <div className="account-review">
        <h2>Renter</h2>
        <p>Ratings from hosts</p>
        ⭐⭐⭐⭐</div>;
    }

  return (
    <div className="profile-page-wrapper">
        <div className="user-details">
            <div className="profile-image"><img src={profilePhoto.img} alt="" /></div>
            <div className="profile-name">{userInfo.fullName}</div>
            <div className="profile-email">{userInfo.email}</div>
            <div className="profile-license-verified">Verified</div>
        </div>
        <div className="account-details">
            
            {isHost()}
            <div className="account-rent-history">
            </div>
        </div>
    </div>
  )
}

export default ProfilePage;