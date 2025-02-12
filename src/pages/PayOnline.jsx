import React from 'react'
import Navbar from '../components/Navbar'
import pay_online from '../images/pay-online.avif'
import mount from '../media/tour/mount.jpg'
import building from '../media/tour/building.avif'

function PayOnline() {
  return (
    <>
      <Navbar />
      <section className="about-us-section">
      <div className="about-us-columns">
        <div className="abous-us-content">
          <div className="about-title-content">
            <div className="about-title">
              <h2>WELCOME TO YATRA OF HIMALAYAS</h2>
            </div>
          </div>

          <img
            src={pay_online}
            alt="pay online image"
            className="about-us-img"
          />
          <div className="icons">
            <i className="fa-solid fa-calendar-days">&nbsp; Holiday</i>
            <i className="fa-solid fa-bed">&nbsp; Hotel</i>
            <i className="fa-solid fa-car">&nbsp; Car</i>
            <i className="fa-solid fa-mug-hot">&nbsp; Adventure</i>
          </div>

          <div className="about-title">
            <h2>Pay Online Method.....!</h2>
            <h4>You can pay through the following methods:</h4>

            <h5
              style={{
                fontSize: "18px",
                marginBottom: "15px",
                background: "crimson",
                color: "white",
                padding: "8px",
                width: "300px",
                borderRadius: "5px",
              }}
            >
              Deposit Directly In our Accounts
            </h5>

            <div className="bank-details">
              <h4>Name:</h4>
              <p>Yatra of Himalayas</p>
            </div>
            <div className="bank-details">
              <h4>Account No:</h4>
              <p>111122223333</p>
            </div>
            <div className="bank-details">
              <h4>Account Type:</h4>
              <p>Current Account</p>
            </div>
            <div className="bank-details">
              <h4>Bank:</h4>
              <p>State Bank of India</p>
            </div>
            <div className="bank-details">
              <h4>Branch:</h4>
              <p>The Mall Shimla</p>
            </div>
          </div>
        </div>

        {/* Suggestions Section */}
        <div className="suggestions">
          <h2>HOLIDAY DESTINATIONS</h2>

          <div className="suggestions-contents">
            <div className="suggestion-boxes">
              <div className="suggestion-image">
                <img
                  src={mount}
                  alt="Dharamshala Tour"
                  className="suggestion-img"
                />
              </div>
              <div className="suggestion-text">
                <a href="#">Dharamshala Holiday Tour</a>
                <br />
                <a href="https://yatraofhimalayas.com/tour-packages.php?dest=dharamshala-holiday-tour">
                  <i className="fa-sharp fa-solid fa-comments"></i> View All
                </a>
                <br />
              </div>
            </div>
          </div>

          <div className="suggestions-contents">
            <div className="suggestion-boxes">
              <div className="suggestion-image">
                <img
                  src={building}
                  alt="Shimla Tour"
                  className="suggestion-img"
                />
              </div>
              <div className="suggestion-text">
                <a href="#">Shimla Holiday Tour</a>
                <br />
                <a href="https://yatraofhimalayas.com/tour-packages.php?dest=shimla-holiday-tour">
                  <i className="fa-sharp fa-solid fa-comments"></i> View All
                </a>
                <br />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    </>
  )
}

export default PayOnline
