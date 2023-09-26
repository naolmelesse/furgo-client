import React, { useState } from 'react';
import '../styles/become-a-host.scss';
import axios from 'axios';

const BecomeAHost = () => {
  const token = localStorage.getItem("token");
  const decodedValue = JSON.parse(atob(token.split('.')[1]));
  const [newCar, setNewCar] = useState(
    {
        owner: decodedValue['_id'],
        location: '',
        profilePhoto: '',
        license: '',
        mobile: '',
        carPhoto: '',
        vin: '',
        make: '',
        model: '',
        year: '',
        mileage: '',
        transmission: '',
        condition: '',
        price: ''
    });

    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(newCar.owner);
      const formData = new FormData();
      formData.append('owner', newCar.owner);
      formData.append('location', newCar.location);
      formData.append('profilePhoto', newCar.profilePhoto);
      formData.append('license', newCar.license);
      formData.append('mobile', newCar.mobile);
      formData.append('carPhoto', newCar.carPhoto);
      formData.append('vin', newCar.vin);
      formData.append('make', newCar.make);
      formData.append('model', newCar.model);
      formData.append('year', newCar.year);
      formData.append('mileage', newCar.mileage);
      formData.append('transmission', newCar.transmission);
      formData.append('condition', newCar.condition);
      formData.append('price', newCar.price);
      //setNewCar({ ...formData });

      const isCarAdded = await axios.post('http://localhost:8080/add-car/', formData)
           .then(res => {
              localStorage.setItem("token", JSON.stringify(res.data.user));
              if(res.data.carAdded) return window.alert("Car listed succesfully.");
             else return false;
           })
           .catch(err => {
              console.log(err);
           });
           if(isCarAdded) window.alert("Car listed succesfully.");
           else window.alert("Car couldn't be listed, try again.");
    }

  const handleChange = (e) => {
      setNewCar({...newCar, [e.target.name]: e.target.value});
  }

  const handleSelectChange = (e) => {
    console.log(e.target.name.options[e.selectedIndex].text)
    //setNewCar({...newCar, [e.target.name]: e.target.name.value});
  }

  const handlePhoto = (e) => {
      setNewCar({...newCar, [e.target.name]: e.target.files[0]});
  }

  const setTransmission = (e) => {
      setNewCar({...newCar, transmission: e.target.value});
  }

  return (
    <div className="become-a-host-wrapper">

        <h1>List your car</h1>

        <form className="become-a-host-form" action="" method="POST" encType="multipart/form-data" onSubmit={handleSubmit}>
                <label htmlFor="location">Where is your car located?</label>
                <input className="textbox" value={newCar.location} type="text" name="location" placeholder="Location" id="" onChange={handleChange}/>

                <label htmlFor="profilePhoto">Upload your photo</label>
                <input className="textbox"  type="file" accept=".png, .jpg, .jpeg" name="profilePhoto" placeholder="photo" id="" onChange={handlePhoto}/>

                <label htmlFor="license">Upload your driver's license</label>
                <input className="textbox"  type="file" accept=".png, .jpg, .jpeg" name="license" placeholder="license" id="" onChange={handlePhoto}/>

                <label htmlFor="mobile">Mobile number</label>
                <input className="textbox" value={newCar.mobile} type="number" name="mobile" placeholder="Mobile number" id="" onChange={handleChange}/>

                <label htmlFor="photo">Car photo</label>
                <input className="textbox"  type="file" accept=".png, .jpg, .jpeg" name="carPhoto" placeholder="" id="" onChange={handlePhoto}/>

                <label htmlFor="vin">VIN</label>
                <input className="textbox" value={newCar.vin} type="text" name="vin" placeholder="VIN" id="" onChange={handleChange}/>

                <label htmlFor="make">Car make</label>
                <select name="make" value={newCar.make} id="cars" onChange={handleChange}>
                  <option value="alfa romea">Alfa Romeo</option>
                  <option value="audi">Audi</option>
                  <option value="bmw">BMW</option>
                  <option value="chevrolet">Chevrolet</option>
                  <option value="dodge">Dodge</option>
                  <option value="ford">Ford</option>
                  <option value="hyundai">Hyundai</option>
                  <option value="jaguar">Jaguar</option>
                  <option value="jeep">Jeep</option>
                  <option value="kia">KIA</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="mitsubishi">Mitsubishi</option>
                  <option value="range rover">Range Rover</option>
                  <option value="saab">Saab</option>
                  <option value="subaru">Subaru</option>
                  <option value="toyota">Toyota</option>
                  <option value="suzuki">Suzuki</option>
                  <option value="volvo">Volvo</option>
                  <option value="volkswagen">Volkswagen</option>


                </select>
                {/* <input className="textbox" value={newCar.make} type="text" name="make" placeholder="Car make" id="" onChange={handleChange}/> */}

                <label htmlFor="model">Car model</label>
                <input className="textbox" value={newCar.model} type="text" name="model" placeholder="Car model" id="" onChange={handleChange}/>

                <label htmlFor="year">Car year</label>
                <input className="textbox" value={newCar.year} type="text" name="year" placeholder="Car year" id="" onChange={handleChange}/>

                <label htmlFor="mileage">Mileage</label>
                <input className="textbox" value={newCar.mileage} type="number" name="mileage" placeholder="Mileage in KMs" id="" onChange={handleChange}/>

                <label htmlFor="transmission">Transmission</label>
                <div onChange={setTransmission.bind(this)}>
                    <input className="textbox" type="radio" value="Manual" name="manual" placeholder="Manual" id=""/>
                    <label htmlFor="manual">Manual</label>
                    
                    <input className="textbox" type="radio" value="Automatic" name="automatic" placeholder="Automatic" id=""/>
                    <label htmlFor="automatic">Automatic</label>
                </div>

                <label htmlFor="condition">Vehicle condition</label>
                <select name="condition" value={newCar.condition} onChange={handleChange}>
                  <option value="excellent">Excellent</option>
                  <option value="good">Good</option>
                  <option value="fair">Fair</option>
                  <option value="poor">Poor</option>
                </select>
                <label htmlFor="price">Price</label>
                <input className="textbox" value={newCar.price} type="number" name="price" placeholder="Price in $/day" id="" onChange={handleChange}/>

                <input className="submit" type="submit" value="Complete"/>
        </form>

    </div>
  )
}

export default BecomeAHost;