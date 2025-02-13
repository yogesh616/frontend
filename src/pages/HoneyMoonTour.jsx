import Navbar from "../components/Navbar";
import honeymoon from '../media/tour/honeymoon.avif'

const HoneyMoonTour = () => {
    return (
     <>
     <Navbar />
     <section className="himachal-holidays-section">
        <div className="himachal-holidays-contents-columns">
          <div className="himachal-holidays-contents-columns-sections">
            <h1>
              Yatra of Himalayas -
              <span style={{ color: '#64a507' }}> Honeymoon Tour</span>
            </h1>
            
            <div className="small-holiday-packages">
              <h5>
                <i className="fa-solid fa-circle-check"></i> Enquire
              </h5>
              <img 
                src={honeymoon} 
                alt="holiday package" 
                className="small-holiday-packages-img" 
              />
              <small>6 Nights/7 Days</small>
              <h3>SHIMLA KULLU MANALI</h3>
              <h4>Tour Code : Yatra-4</h4>
              <div className="small-icons">
                <i className="fa-solid fa-location-dot"></i>
                <i className="fa-solid fa-car"></i>
                <i className="fa-solid fa-person"></i>
                <i className="fa-solid fa-suitcase-rolling"></i>
                <i className="fa-solid fa-mug-hot"></i>
                <i className="fa-solid fa-utensils"></i>
                <i className="fa-solid fa-camera"></i>
                <i className="fa-sharp fa-solid fa-bed"></i>
              </div>
              <br />
              <hr />
              <div className="btns">
                <a href="https://yatraofhimalayas.com/tour_details.php?tour=shimla-kullu-manali">
                  View Details
                </a>
                <p>18000/-</p>
              </div>
            </div>
  
            <div className="pagination">
              <a href="" className="active">1</a>
            </div>
          </div>
  
          <div className="himachal-holidays-contents-columns-section-two">
            <div className="enquiry-for-packages-form">
              <h2>ENQUIRY FOR PACKAGES :</h2>
              <div className="enquiry-form-data">
                <form method="post" id="frmAllHoneymoon" className="outside-booking-form">
                  <div className="form-inputs">
                    <i className="fa-solid fa-user"></i>
                    <input type="text" name="name" placeholder="Enter Your Name" required />
                  </div>
                  <div className="form-inputs">
                    <i className="fa-solid fa-envelope"></i>
                    <input type="email" name="email" placeholder="Enter Your Email" required />
                  </div>
                  <div className="form-inputs">
                    <i className="fa-solid fa-phone"></i>
                    <input type="number" name="mobile" placeholder="Enter Your Mobile Number" required />
                  </div>
                  <div className="form-inputs">
                    <select name="tour_id" required>
                      <option value="">Select a Package</option>
                      <option value="16">SHIMLA KULLU MANALI</option>
                    </select>
                  </div>
                  <div className="form-inputs-select">
                    <div className="select-inputs">
                      <p>Check In</p>
                      <input type="date" name="check_in_date" required min="2025-02-13" />
                    </div>
                    <div className="select-inputs">
                      <p>Check Out</p>
                      <input type="date" name="check_out_date" required min="2025-02-13" />
                    </div>
                    <div className="form-inputs-categories">
                      <div className="form-input-blocks">
                        <p>Category</p>
                        <select name="category" required>
                          <option value="">Select</option>
                          <option value="5 Star">5 Star</option>
                          <option value="4 Star">4 Star</option>
                          <option value="3 Star">3 Star</option>
                          <option value="2 Star">2 Star</option>
                          <option value="1 Star">1 Star</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <input type="hidden" name="type" value="all_honeymoon_submit" />
                  <button type="submit" name="submit" className="enquiry-btn" id="btn-submit">
                    SEND
                  </button>
                </form>
                <div style={{ textAlign: 'center', fontWeight: 'bold' }} id="msg_field"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </>
    );
  };
  
  export default HoneyMoonTour;