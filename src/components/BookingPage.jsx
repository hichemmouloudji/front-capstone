// @flow 
import * as React from 'react';
import BookingForm from './BookingForm';

const BookingPage = ({availableTimes, updateTimes, bookTimes, initializeTimes}) => {

    return (
        <React.Fragment>
            <BookingForm 
            availableTimes={availableTimes} 
            updateTimes={updateTimes}
            initializeTimes={initializeTimes}
            bookTimes={bookTimes}></BookingForm>
        </React.Fragment>
    );
};

export default BookingPage;