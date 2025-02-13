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
import TrainBooking from './pages/TrainBooking';
import FlightBooking from './pages/FlightBooking';
import VolvoBusBooking from './pages/VolvoBusBooking';
import HolidayTour from './pages/HoliydayTour';
import StudentTour from './pages/StudentTour';
import GroupTour from './pages/GroupTour';
import HoneyMoonTour from './pages/HoneyMoonTour';
import About from './pages/About';
import Service from './pages/Service';
import Enquire from './pages/Enquire';
import DharamshalaHolidayTour from './pages/DharamshalaHolidayTour';
import ShimlaHolidayTour from './pages/ShimlaHolidayTour';


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
      <Route path="/train-booking" element={<TrainBooking />} />
      <Route path="/flight-booking" element={<FlightBooking />} />
      <Route path="/volvo-bus-booking" element={<VolvoBusBooking />} />
      <Route path="/all_destinations" element={<HolidayTour />} />
      <Route path="/student-tour" element={<StudentTour />} />
      <Route path="/group-tour" element={<GroupTour />} />
      <Route path="/honeymoon-tour" element={<HoneyMoonTour />} />
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Service />} />
      <Route path="/enquire" element={<Enquire />} />
      <Route path="/dharamshala-holiday-tour" element={<DharamshalaHolidayTour />} />
      <Route path="/shimla-holiday-tour" element={<ShimlaHolidayTour />} />
    </Routes>
   </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
