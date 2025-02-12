import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// About from './components/About'
import ContactUs from './pages/ContactUs';
import PayOnline from './pages/PayOnline';
import OurPolicy from './pages/OurPolicy';
import HotelBooking from './pages/HotelBooking';
import CarBooking from './pages/CarBooking';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
    {/*  <Route path="/about" element={<About />} /> */}
      {/* Add more routes as needed */}
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/pay-online" element={<PayOnline />} />
      <Route path="/our-policy" element={<OurPolicy />} />
      <Route path="/hotel-booking" element={<HotelBooking />} />
      <Route path="/car-list" element={<CarBooking />} />
    </Routes>
   </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
