import * as React from 'react';
import { useState, useReducer } from 'react';

import { Route, Routes } from 'react-router-dom';
import AboutPage from './AboutPage';
import BookingPage from './BookingPage';
import HomePage from './HomePage';

const Main = ({children}) => {

    const initialTimes = [
            "17:00",
            "18:00",
            "19:00",
            "20:00"
      ];

    const reducer = (state, action) => {
    switch (action.type) {

        case "INITIALIZE":
        return initialTimes;

        case "UPDATE":
        return state.filter(c  => c != action.time);

        default:
        return state;
        }
    };

    const [availableTimes, dispatch] = useReducer(reducer, initialTimes);

    const updateTimes = (time) => {
        dispatch({ type: "UPDATE", time });
    };

    const initializeTimes = () => {
        dispatch({ type: "INITIALIZE" });
    };


    return (
        <main>
            <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/booking" 
            element={<BookingPage availableTimes={availableTimes} 
            updateTimes={updateTimes}
            initializeTimes={initializeTimes}
            />} ></Route>
            <Route path="/about" element={<AboutPage />}></Route>
            </Routes>
        </main>
    );
};

export default Main;