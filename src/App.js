import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

// components
import Nav from "./components/Nav";
import Header from './components/Header';
import Main from "./components/Main";
import Footer from "./components/Footer";
import HomePage from './components/HomePage';
import BookingPage from './components/BookingPage';
import AboutPage from './components/AboutPage';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (

    <React.Fragment className="App">

      <Header>
      </Header>

      <Nav>
      </Nav>

      <Main>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/booking" element={<BookingPage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
        </Routes>
      </Main>

      <ToastContainer />

      <Footer>
      </Footer>
         
    </React.Fragment>

);
}

export default App;
