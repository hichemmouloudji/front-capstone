// @flow 
import * as React from 'react';
import { useState } from 'react';

import { toast } from 'react-toastify';

const BookingForm = () => {

    
    const [credentials, setCredentials] = useState({
        date: "",
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

        toast.success("Your table has been successfully reserved at: " + credentials.date);

    }

    return (

        <form className='bookingForm' onSubmit={handleSubmit}>

            <label for="res-date">Choose date</label>
            <input name="date" 
            type="date" 
            id="date" 
            onChange={handleChange} 
            value={credentials.date}/>
            <label for="res-time">Choose time</label>
            <select id="res-time ">
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
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

    );
};

export default BookingForm;