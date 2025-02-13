import React from "react";
import logo from "../images/logo/yatra_of_himalayas_logo.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Scroll to Top Button */}
      <div onClick={scrollToTop} className="jump-to-top">
        <i className="fa-sharp fa-solid fa-arrow-up"></i>
      </div>

      {/* Top Header */}
      <section className="top-header">
        <div className="top-left-elements">
          <div className="email">
            <i className="fa-solid fa-envelope"></i>
            <small>yatraofhimalayas@gmail.com</small>
          </div>
          <div className="contact-no">
            <i className="fa-solid fa-phone"></i>
            <small>+91-9418555185</small>
          </div>
        </div>
        <div className="top-right-elements">
          <div className="socials">
            <a href="#"><i className="fa-brands fa-facebook"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
            <a href="#"><i className="fa-brands fa-youtube"></i></a>
            <a href="#"><i className="fa-brands fa-twitter"></i></a>
          </div>
        </div>
      </section>

      {/* Title Header */}
      <section className="title-header">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="yatra of himalayas logo" />
          </a>
        </div>
        <div className="title-header-right-contents">
          <div className="openings">
            <div className="opening-img">
              <i className="fa-solid fa-clock"></i>
            </div>
            <div className="opening-timings">
              <p>Opening</p>
              <small>9:30 A.M - 6:00 P.M</small>
            </div>
          </div>
          <div className="approval">
            <div className="approval-img">
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <div className="approval-details">
              <p>Approved By Himachal Govt Dept of Tourism</p>
              <small>Reg No: 11-1969/22-DTO-SML</small>
            </div>
            <div className="menu">
              <i className="fa-solid fa-bars"></i>
            </div>
          </div>
        </div>
      </section>

      {/* Navbar */}
      <section className="navbar">
      <div className="navbar-contents">
        <ul>
          <li>
            <Link to="/" className="lists">Home</Link>
          </li>
          <li className="about-us">
            <a href="#" className="lists">
              About Us&nbsp;<i className="fa-solid fa-angle-down"></i>
            </a>
            <ul className="nested-about-us">
              <li className="nested-li">
                <p><Link className="remove-decoration" to="/about">About Yatra of Himalayas</Link></p>
              </li>
              <li className="nested-li">
                <p><Link className="remove-decoration" to="/service">Service</Link></p>
              </li>
            </ul>
          </li>
          <li className="holiday">
            <a href="#" className="lists">
              Holiday&nbsp;<i className="fa-solid fa-angle-down"></i>
            </a>
            <ul className="nested-holiday">
              <li className="nested-li-holiday">
                <Link className="remove-decoration" to="/all_destinations">Holiday Tour</Link>
                <ul className="holiday-tour-lists"></ul>
              </li>
              <li className="nested-li-special">
                <a className="remove-decoration">Special Tour &nbsp;<i className="fa-solid fa-chevron-right"></i></a>
                <ul className="special-tour-lists remove-decoration">
                  <li className="nested-li">
                    <p><Link className="remove-decoration" to="/student-tour">Student Tour</Link></p>
                  </li>
                  <li className="nested-li">
                    <p><Link className="remove-decoration" to="/group-tour">Group Tour</Link></p>
                  </li>
                  <li className="nested-li">
                    <p><Link className="remove-decoration" to="/honeymoon-tour">Honeymoon Tour</Link></p>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <Link className="remove-decoration lists" to="/hotel-booking">Hotel</Link>
          </li>
          <li className="transportation">
            <a href="#" className="lists">
              Transportation&nbsp;<i className="fa-solid fa-angle-down"></i>
            </a>
            <ul className="nested-transportation">
              <li className="nested-li">
                <Link className="remove-decoration" to="/car-list">Car Booking</Link>
              </li>
              <li className="nested-li">
                <Link className="remove-decoration" to="/train-booking">Train Booking</Link>
              </li>
              <li className="nested-li">
                <Link className="remove-decoration" to="/flight-booking">Flight Booking</Link>
              </li>
              <li className="nested-li">
                <Link className="remove-decoration" to="/volvo-bus-booking">Volvo Bus Booking</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/our-policy" className="lists">Our Policy</Link>
          </li>
          <li>
            <Link to="/pay-online" className="lists">Pay Online</Link>
          </li>
          <li>
            <Link to="/contact" className="lists">Contact Us</Link>
          </li>
          <Link to="/enquire">
            <button className="enquire">
              <i className="fa-solid fa-pencil"></i>&nbsp;Enquire Now
            </button>
          </Link>
        </ul>
      </div>
    </section>
    </>
  );
};

export default Navbar;
