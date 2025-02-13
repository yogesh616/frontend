import { Link } from 'react-router-dom'
const Footer = () => {
    const footerImages = [
      "https://yatraofhimalayas.com/images/footer_images/1.jpg",
      "https://yatraofhimalayas.com/images/footer_images/2.jpg",
      "https://yatraofhimalayas.com/images/footer_images/3.jpg",
      "https://yatraofhimalayas.com/images/footer_images/4.jpg",
      "https://yatraofhimalayas.com/images/footer_images/5.jpg",
      "https://yatraofhimalayas.com/images/footer_images/6.jpg",
      "https://yatraofhimalayas.com/images/footer_images/7.jpg",
      "https://yatraofhimalayas.com/images/footer_images/8.jpg"
    ];
  
    return (
     <>

      <section className="footer-section">
        <div className="footer-section-columns">
          <div className="footer-contents">
            <h1>
              Yatra of <span style={{ color: "#64a507", fontFamily: "var(--bibo-swash-font)" }}> Himalayas</span>
            </h1>
            <p>
              Yatra of Himalayas comes in the middle of Top Travel Agencies of Himachal Pradesh. With its high-class service, it has gained the trust of clientele from all around the world. The Indian subcontinent is a melting pot of languages, races, people, customs, and civilizations.
            </p>
            <Link to="/about">
              <i className="fa-regular fa-circle-right"></i> View More
            </Link>
          </div>
          
          <div className="footer-contents-2">
            <h3>Holiday Tours</h3>
            <div className="nested-footer">
              <div className="nested-contents">
                <img src="https://yatraofhimalayas.com/media/tour/qrmjyx95xt_dest2.jpg" alt="" className="nested-footer-img" />
                <Link to="/dharamshala-holiday-tour">Dharamshala Holiday Tour</Link>
              </div>
            </div>
            <div className="nested-footer">
              <div className="nested-contents">
                <img src="https://yatraofhimalayas.com/media/tour/7aly56rjti_dest4.avif" alt="" className="nested-footer-img" />
                <Link to="/shimla-holiday-tour">Shimla Holiday Tour</Link>
              </div>
            </div>
          </div>
  
          <div className="footer-contents-3">
            <div className="footer-contents-3-contents">
              <h3>Other Links</h3>
              <br />
              <Link to="/hotel-booking">Hotel</Link>
              <br />
              <Link to="/car-list">Transportation</Link>
              <br />
              <Link to="/our-policy">Our Policy</Link>
              <br />
              <Link to="/student-tour">Student Tour</Link>
              <br />
              <Link to="/group-tour">Group Tour</Link>
              <br />
              <Link to="/honeymoon-tour">Honeymoon Tour</Link>
            </div>
          </div>
  
          <div className="footer-contents-4">
            <h3>Info</h3>
            <h4>Yatra of Himalayas</h4>
            <h5>Address: Panthaghati, Shimla, Himachal Pradesh 171009</h5>
            <h5>yatraofhimalayas@gmail.com</h5>
            <h5>+91-9418555185</h5>
            <div className="footer-gallary">
              {footerImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`destination ${index + 1}`}
                  className="footer-gallary-img"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

     
    <section className="copyright">
      <div className="copyright-contents">
        <div className="social-icons">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-youtube"></i>
          <i className="fa-brands fa-twitter"></i>
        </div>
        <h4>
          &copy; Copyright All Rights Reserved for
          <span
            style={{
              fontWeight: "bold",
              letterSpacing: "0.8px",
              color: "#64a507",
              marginBottom: "8px",
            }}
          >
            "Yatra of Himalayas"
          </span>
        </h4>
        <h4 style={{ marginTop: "8px" }}>
          Designed and Developed By
          <Link to="">
            <span
              style={{
                fontWeight: "bold",
                letterSpacing: "0.8px",
                color: "#64a507",
              }}
            >
              Ashwani
            </span>
          </Link>
          &amp;
          <Link to="">
            <span
              style={{
                fontWeight: "bold",
                letterSpacing: "0.8px",
                color: "#64a507",
              }}
            >
              Krishna
            </span>
          </Link>
        </h4>
      </div>
    </section>
     </>
    );
  };
  
  export default Footer;
  