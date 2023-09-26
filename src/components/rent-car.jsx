import React, { useState, useEffect } from "react";
import Stripe from 'react-stripe-checkout';
import '../styles/rent-car.scss';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import dayjs from 'dayjs';

const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));

const RentCar = () => {
    const date = new Date();
    const [startDate, setStartDate] = useState({date: dayjs(date.setDate(date.getDate() + 3)).format('YYYY-MM-DD')});
    const [endDate, setEndDate] = useState({date: dayjs(date.setDate(date.getDate() + 7)).format('YYYY-MM-DD')});
    const [carData, setCarData] = useState([]);
    const [carPhoto, setCarPhoto] = useState({carPhoto: ''});
    const [rentPrice, setRentPrice] = useState({total_price: dayjs(endDate.date).diff(dayjs(startDate.date), 'days')});

    useEffect(()=> {
        async function getCar () {
            var carid = window.location.pathname;
            carid = carid.split("rent-car/");
            //console.log(carid[1]);
            await axios.post('/rent-car', {car_id: carid[1]}).then((res) => {
                setCarData(res.data[0]);
                setCarPhoto({carPhoto: "http://localhost:8080/" + res.data[0].carPhoto[0].filename});
                
                //window.alert(`You succesfully rented: ${res.data[0].make} ${res.data[0].year}`);
            }).catch((err) => {
                console.log(err);
            })
        }
        getCar();
    }, []);

    const classes = useStyles();
    const checkout = () => {
        try{
            axios.post("/create-checkout-session");
        }catch(err){
            console.log(err);
        }
    };

    const handleToken = (totalAmount, token) => {
        try{
            const token = localStorage.getItem("token");
            const decodedValue = JSON.parse(atob(token.split('.')[1]));
            const rentData = {
                tripStart: startDate.date,
                tripEnd: endDate.date,
                host: carData.owner,
                car: carData._id,
                renter: decodedValue['_id'],
                total_income: rentPrice.total_price * carData.price
            };
            axios.post("/pay", {
                token: token.id,
                amount: rentPrice.total_price * carData.price,
                rentData: rentData
            });
            window.alert("Car succesfullly rented.");
            
        }catch(err){
            console.log(err);
        }
    };

    const tokenHandler = (token) => {
        handleToken(45, token);
    }

    const calculatePrice = () => {
        const result = dayjs(endDate.date).diff(dayjs(startDate.date), 'days');
        //setRentPrice({total_price: result * carData.price})
        console.log(rentPrice.total_price);
    }
    calculatePrice();

    async function rent(){
            const token = localStorage.getItem("token");
            const decodedValue = JSON.parse(atob(token.split('.')[1]));
            const rentData = {
                tripStart: startDate.date,
                tripEnd: endDate.date,
                host: carData.owner,
                car: carData._id,
                renter: decodedValue['_id'],
                total_income: dayjs(endDate.date).diff(dayjs(startDate.date), 'days') * carData.price
            };
            await axios.post('/pay', {rentData: rentData}).then((res) => {
                console.log(res);
            }).catch(err => console.log(err));
        };

  return (
    <div className="rent-car-wrapper">
        <div className="car-details-wrapper">
            
            <div className="car-image"><img src={carPhoto.carPhoto} alt="" /></div>
            <div className="car-details">
                <div className="car-name">🚗 {carData.year} {carData.make} {carData.model} </div>
                <div className="car-price">💵 ${carData.price} per Day</div>
                <div className="car-location">📍 {carData.location}</div>
                <br />

                <TextField
                    id="date"
                    label="Trip start"
                    type="date"
                    defaultValue={startDate.date}
                    className={classes.textField}
                    InputLabelProps={{
                    shrink: true,
                    }}
                    onChange={(newValue) => {
                        setStartDate(newValue);
                      }}
                />
               <TextField
                    id="date"
                    label="Trip end"
                    type="date"
                    defaultValue={endDate.date}
                    className={classes.textField}
                    InputLabelProps={{
                    shrink: true,
                    }}
                    onChange={(newValue) => {
                        setEndDate(dayjs(newValue).format('YYYY-MM-DD'));
                        console.log(endDate.date);
                      }}
                />
                    {/* <label htmlFor="trip-start">Trip start</label>
                    <input type="datetime-local" name="trip-start" id="" />
                    <label htmlFor="trip-end">Trip start</label>
                    <input type="datetime-local" name="trip-end" id="" /> */}
                    {/* <p>Price: ${carData.price} per day</p> */}
                    <p>Total price: ${rentPrice.total_price * carData.price}</p>
                <Stripe stripeKey="pk_test_51M1NQLSAL0PR8LKLjf5ORPbi8evKF57AQl36uN7LrD39L54fjyWuWlQoLoD4eTn8iUmwH7Hkq1EeUlpVFaN1R3uO00SU2HB9m7"
                    token={tokenHandler}
                />
            </div>
            
        </div>
    </div>
  )
}

export default RentCar;