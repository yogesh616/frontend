import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const GroupTour = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    tour_id: "",
    check_in_date: "",
    check_out_date: "",
    category: "",
    adults: "",
    children: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
   <>
   <Navbar />
   <section className="himachal-holidays-section">
      <div className="himachal-holidays-contents-columns">
        <div className="himachal-holidays-contents-columns-sections">
          No Package Available Please Check another packages
        </div>

        <div className="himachal-holidays-contents-columns-section-two">
          <div className="enquiry-for-packages-form">
            <h2>ENQUIRY FOR PACKAGES :</h2>
            <div className="enquiry-form-data">
              <form method="post" id="frmSingleSpecial">
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
                    <option value="">No Packages</option>
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
                  <div className="form-input-blocks">
                    <p>Adults</p>
                    <select name="adults" required>
                      <option value="">Select</option>
                      <option value="1">01</option>
                      <option value="2">02</option>
                      <option value="3">03</option>
                      <option value="4">04</option>
                      <option value="5">05</option>
                      <option value="6">06</option>
                      <option value="7">07</option>
                      <option value="8">08</option>
                      <option value="9">09</option>
                      <option value="10">10</option>
                    </select>
                  </div>
                  <div className="form-input-blocks">
                    <p>Children</p>
                    <select name="children" required>
                      <option value="">Select</option>
                      <option value="0">0</option>
                      <option value="1">01</option>
                      <option value="2">02</option>
                      <option value="3">03</option>
                      <option value="4">04</option>
                      <option value="5">05</option>
                      <option value="6">06</option>
                      <option value="7">07</option>
                      <option value="8">08</option>
                      <option value="9">09</option>
                      <option value="10">10</option>
                    </select>
                  </div>
                </div>
                <input type="hidden" name="type" value="all_special_submit" />
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
    <Footer />
   </>
  );
};

export default GroupTour;
