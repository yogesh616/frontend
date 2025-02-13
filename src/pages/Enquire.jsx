import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Enquire = () => {
    return (
     <>
     <Navbar />
     <section className="book-now-section">
        <div className="book-now-section-form">
          <form method="post" id="FrmEnquire">
            <h1>Enquire Now</h1>
            <div className="book-now-inputs-form">
              <div className="book-now-inputs">
                <label>Your Name</label>
                <input type="text" name="name" placeholder="Enter Your Name" required />
              </div>
              <div className="book-now-inputs">
                <label>Email Address</label>
                <input type="email" name="email" placeholder="Enter Your Email Address" required />
              </div>
              <div className="book-now-inputs">
                <label>Your Mobile</label>
                <input type="number" name="mobile" placeholder="Enter Your Mobile Number" required />
              </div>
              <div className="book-now-inputs">
                <label>Your Enquiry</label>
                <textarea className="book-form-textarea" name="message" placeholder="Type Your Enquiry Here..."></textarea>
              </div>
              <input type="submit" name="submit" className="book-now-btn" value="Submit" id="btn-submit" />
              <input type="hidden" name="type" value="enquiry_submit" />
              <span style={{ display: "block" }} id="msg_field" className="green"></span>
            </div>
          </form>
        </div>
      </section>
      <Footer />
     </>
    );
  };
  
  export default Enquire;
  