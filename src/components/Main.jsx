import * as React from 'react';
import { useState, useReducer } from 'react';

import { Route, Routes } from 'react-router-dom';
import AboutPage from './AboutPage';
import BookingPage from './BookingPage';
import HomePage from './HomePage';

import {fetchAPI} from "../api.js"; 
import { toast } from 'react-toastify';

const Main = ({children}) => {

    let initialTimes;

    const reducer = (state, action) => {
    switch (action.type) {

        case "INITIALIZE":
        return action.availableTimes;

        case "UPDATE":
        return action.availableTimes;

        case "SUBMIT":
        return state.filter(c  => c != action.time);

        default:
        return state;
        }
    };

    const [availableTimes, dispatch] = useReducer(reducer, initialTimes);

    const updateTimes = async (time) => {
        try{
            let tmpAvailablesTimes= fetchAPI(time);
            dispatch({ type: "UPDATE", availableTimes: tmpAvailablesTimes });
        }catch{
            toast.error("Retry later !");
        }
        
    };

    const bookTimes = (time) => {
        dispatch({ type: "SUBMIT", time });
    };

    const initializeTimes = (time) => {
        try{
            let tmpAvailablesTimes= fetchAPI(time);
            dispatch({ type: "INITIALIZE", availableTimes: tmpAvailablesTimes });
        }catch{
            toast.error("Retry later !");
        }

    };


    return (
        <main>
            <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/booking" 
            element={<BookingPage availableTimes={availableTimes} 
            initializeTimes={initializeTimes}
            updateTimes={updateTimes}
            bookTimes={bookTimes}
            />} ></Route>
            <Route path="/about" element={<AboutPage />}></Route>
            </Routes>
        </main>
    );
};

export default Main;