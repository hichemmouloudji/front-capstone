// @flow 
import * as React from 'react';
import { useState } from 'react';

import { toast } from 'react-toastify';

const BookingForm = ({availableTimes, updateTimes, initializeTimes}) => {
    
    const [credentials, setCredentials] = useState({
        date: "",
        time: "",
        guests: 0,
        occasion: ""
    });

    const [isSubmited, setIsubmited] = useState(false);

    const handleChange = ({currentTarget}) =>{
        const {value, name}= currentTarget;
        setCredentials({ ...credentials, [name]: value });
    }

    const handleSubmit =  async event =>{

        event.preventDefault();
        updateTimes(credentials.time);

        toast.success("Your table has been successfully reserved at: " + credentials.date);

    }

    return (

        <>

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

        </>

    );
};

export default BookingForm;