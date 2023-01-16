// @flow 
import * as React from 'react';
import BookingForm from './BookingForm';

const BookingPage = ({availableTimes, updateTimes, bookTimes, initializeTimes, submitForm}) => {

    return (
        <React.Fragment>
            <BookingForm 
            availableTimes={availableTimes} 
            updateTimes={updateTimes}
            initializeTimes={initializeTimes}
            bookTimes={bookTimes}
            submitForm={submitForm}></BookingForm>
        </React.Fragment>
    );
};

export default BookingPage;