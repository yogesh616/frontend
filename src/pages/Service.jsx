import Navbar from "../components/Navbar";
import service from "../images/service.avif" 
import dhramshala from "../images/dharamshala.jpg" 
import shimla from "../images/shimla.avif" 


const Service = () => {
    return (
     <>
     <Navbar />
     <section className="about-us-section">
        <div className="about-us-columns">
          <div className="abous-us-content">
            <div className="about-title-content">
              <div className="about-title">
                <h2>OUR SERVICES.... </h2>
              </div>
            </div>
  
            <img 
              src={service}
              alt="about_image" 
              className="about-us-img" 
            />
            
            <div className="icons">
              <i className="fa-solid fa-calendar-days">&nbsp; Holiday</i>
              <i className="fa-solid fa-bed">&nbsp; Hotel</i>
              <i className="fa-solid fa-car">&nbsp; Car</i>
              <i className="fa-solid fa-mug-hot">&nbsp; Adventure</i>
            </div>
  
            <div className="about-title">
              <h3>Tour Operator...</h3>
              <div className="about-us-info">
                <p>
                  <strong>Yatra of Himalayas </strong>is one of the renowned tour operators 
                  who are actively involved in offering reliable travel solutions to the 
                  clients across Shimla (Himachal Pradesh, India).
                </p>
                <p>&nbsp;</p>
                <p>
                  As experienced tour operators, we have designed some of the exciting and 
                  cost-efficient tour and holiday packages for our clients' convenience. 
                  The holiday packages include honeymoon holidays, adventure tour, 
                  pilgrimage/religious tour, romantic holidays, family holidays, group 
                  holidays and various outdoor activities like river rafting, horse riding, 
                  paragliding, etc. We have active airline ticketing agents who can help 
                  you in getting airline tickets for your tour conveniently.
                </p>
              </div>
            </div>
          </div>
  
          <div className="suggestions">
            <h2>HOLIDAY DESTINATIONS</h2>
            <div className="suggestions-contents">
              <div className="suggestion-boxes">
                <div className="suggestion-image">
                  <img 
                    src={dhramshala}
                    alt="suggetion_image" 
                    className="suggestion-img" 
                  />
                </div>
                <div className="suggestion-text">
                  <a >Dharamshala Holiday Tour</a>
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
                    src={shimla} 
                    alt="suggetion_image" 
                    className="suggestion-img" 
                  />
                </div>
                <div className="suggestion-text">
                  <a >Shimla Holiday Tour</a>
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
    );
  };
  
  export default Service;