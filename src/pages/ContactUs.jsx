import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const ContactUs = () => {
  return (
    <>
    <Navbar />

      <section className="contact-us-section">
        <div className="contact-form-columns">
          <div className="contact-form-contents">
            <h2>Let's get in touch</h2>
            <p>We are open for any suggestion or just to have a chat</p>
            <div className="contact-form-fields">
              <i className="fa-solid fa-location-dot"></i>
              <small>
                Address: Panthaghati, Shimla, Himachal Pradesh 171009
              </small>
            </div>
            <div className="contact-form-fields">
              <i className="fa-solid fa-phone"></i>
              <small>Phone: +91-9418555185</small>
            </div>
            <div className="contact-form-fields">
              <i className="fa-sharp fa-solid fa-paper-plane"></i>
              <small>Email: yatraofhimalayas@gmail.com</small>
            </div>
            <div className="contact-form-fields">
              <i className="fa-solid fa-earth-americas"></i>
              <small>Website: yatraofhimalayas.com</small>
            </div>
          </div>

          <div className="contact-us-form">
            <h1>Contact Us</h1>
            <form method="post" id="FrmContact">
              <div className="contact-us-form-data">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  required
                />
              </div>
              <div className="contact-us-form-data">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  required
                />
              </div>
              <div className="contact-us-form-data">
                <label>Mobile</label>
                <input
                  type="number"
                  name="mobile"
                  placeholder="Enter Your Mobile"
                  required
                />
              </div>
              <div className="contact-us-form-data">
                <label>Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Enter Your Subject"
                  required
                />
              </div>
              <div className="contact-us-form-data">
                <label>Message</label>
                <textarea
                  className="contact-us-form-textarea"
                  name="message"
                  placeholder="Enter Your Message Here"
                  required
                ></textarea>
              </div>
              <input type="submit" id="btn-submit" className="contact-us-btn" />
              <input type="hidden" name="type" value="contact_us_submit" />
              <span
                style={{ display: "block" }}
                id="msg_field"
                className="green"
              ></span>
            </form>
          </div>
        </div>
      </section>
      <div className="contact-us-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3417.3689243300396!2d77.18052141513968!3d31.07166338152028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDA0JzE4LjAiTiA3N8KwMTAnNTcuOCJF!5e0!3m2!1sen!2sin!4v1680425389968!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
