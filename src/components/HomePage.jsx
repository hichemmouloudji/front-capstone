// @flow 
import * as React from 'react';
import CallActions from './CallActions';
import Chicago from './Chicago';
import CustomersSay from './CustomersSay';
import Specials from './Specials';

const HomePage = () => {
    return (
        <>

            <CallActions></CallActions>
            <Specials></Specials>
            <CustomersSay></CustomersSay>
            <Chicago></Chicago>

        </>
    );
};

export default HomePage;