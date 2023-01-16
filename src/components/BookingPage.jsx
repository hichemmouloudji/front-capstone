// @flow 
import * as React from 'react';
import BookingForm from './BookingForm';

const BookingPage = ({availableTimes, updateTimes, initializeTimes}) => {

    return (
        <React.Fragment>
            <BookingForm 
            availableTimes={availableTimes} 
            updateTimes={updateTimes}
            initializeTimes={initializeTimes}></BookingForm>
        </React.Fragment>
    );
};

export default BookingPage;