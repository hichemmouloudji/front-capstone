import * as React from 'react';
import { useState, useEffect } from 'react';

import { toast } from 'react-toastify';

const BookingForm = ({availableTimes, updateTimes, bookTimes, initializeTimes, submitForm}) => {
    
    const [credentials, setCredentials] = useState({
        date: "",
        time: "",
        guests: 0,
        occasion: ""
    });

    useEffect(() =>{
        let date= new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        if(month>0 && month<10){
            month= "0"+month;
        }
        let year = date.getFullYear();

        let todaysDate= year + "-" + month + "-" + day;

        setCredentials({...credentials, date : todaysDate});
        try {
            initializeTimes(date);
        } catch (error) {
            
        }
        
    }, [])

    const [isSubmited, setIsubmited] = useState(false);

    const handleChange = ({currentTarget}) =>{
        const {value, name}= currentTarget;

        setCredentials({ ...credentials, [name]: value });

        if(name === "date"){
            let tmpDate= new Date(value);
            updateTimes(tmpDate);
        }
    }

    const handleSubmit =  async event =>{

        event.preventDefault();
        bookTimes(credentials.time);
        submitForm(credentials);

        toast.success("Your table has been successfully reserved at: " + credentials.date);

    }

    return (

        <div className="booking">

        <h1>Book Now</h1>
        
            <form className='bookingForm' onSubmit={handleSubmit}>

                <label for="res-date">Choose date</label>
                <input name="date" 
                type="date" 
                id="date" 
                onChange={handleChange} 
                value={credentials.date}/>
                <label for="res-time">Choose time</label>
                <select name="time" 
                id="time"
                onChange={handleChange}
                value={credentials.time}
                required >
                    {availableTimes && <option value="" defaultChecked>Choose value</option>}
                    {availableTimes && availableTimes.map((aTime, i)=>
                        <option key={i} value={aTime}>{aTime}</option>
                    )}
                </select>
                <label for="guests">Number of guests</label>
                <input name="guests" 
                type="number" 
                placeholder="1" 
                min="1" 
                max="10" 
                id="guests"
                onChange={handleChange}
                value={credentials.guests}  />
                <label for="occasion">Occasion</label>
                <select 
                id="occasion"
                name="occasion"
                onChange={handleChange}
                value={credentials.occasion}
                >
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <input type="submit" value="Make Your reservation" />

            </form>

        </div>

    );
};

export default BookingForm;