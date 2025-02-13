import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const StudentTour = () => {
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
  const today = new Date().toISOString().split('T')[0];

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
          <form onSubmit={handleSubmit} id="frmSingleSpecial">
            <div className="form-inputs">
              <i className="fa-solid fa-user"></i>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-inputs">
              <i className="fa-solid fa-envelope"></i>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-inputs">
              <i className="fa-solid fa-phone"></i>
              <input
                type="number"
                name="mobile"
                placeholder="Enter Your Mobile Number"
                required
                value={formData.mobile}
                onChange={handleChange}
              />
            </div>
            <div className="form-inputs">
              <select
                name="tour_id"
                required
                value={formData.tour_id}
                onChange={handleChange}
              >
                <option value="">Select a Package</option>
                <option value="">No Packages</option>
              </select>
            </div>
            <div className="form-inputs-select">
              <div className="select-inputs">
                <p>Check In</p>
                <input
                  type="date"
                  name="check_in_date"
                  required
                  min={today}
                  value={formData.check_in_date}
                  onChange={handleChange}
                />
              </div>
              <div className="select-inputs">
                <p>Check Out</p>
                <input
                  type="date"
                  name="check_out_date"
                  required
                  min={today}
                  value={formData.check_out_date}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-inputs-categories">
              <div className="form-input-blocks">
                <p>Category</p>
                <select
                  name="category"
                  required
                  value={formData.category}
                  onChange={handleChange}
                >
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
                <select
                  name="adults"
                  required
                  value={formData.adults}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  {[...Array(10)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {String(i + 1).padStart(2, '0')}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-input-blocks">
                <p>Children</p>
                <select
                  name="children"
                  required
                  value={formData.children}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  {[...Array(11)].map((_, i) => (
                    <option key={i} value={i}>
                      {String(i).padStart(2, '0')}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <input type="hidden" name="type" value="all_special_submit" />
            <button type="submit" className="enquiry-btn" id="btn-submit">
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

export default StudentTour;
