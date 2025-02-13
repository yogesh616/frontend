import Navbar from "../components/Navbar";
import about from "../images/about.avif"
const About = () => {
    return (
      <>
      <Navbar />
      <section className="about-us-section">
        <div className="about-us-columns">
          <div className="abous-us-content">
            <div className="about-title-content">
              <div className="about-title">
                <h2>WELCOME TO YATRA OF HIMALAYAS </h2>
              </div>
            </div>
  
            <img 
              src={about} 
              alt="abou_us_image" 
              className="about-us-img" 
            />
            
            <div className="icons">
              <i className="fa-solid fa-calendar-days">&nbsp; Holiday</i>
              <i className="fa-solid fa-bed">&nbsp; Hotel</i>
              <i className="fa-solid fa-car">&nbsp; Car</i>
              <i className="fa-solid fa-mug-hot">&nbsp; Adventure</i>
            </div>
  
            <div className="about-title">
              <h3>About Us...</h3>
              <div className="about-us-info">
                <p>
                  <strong>YATRA OF HIMALAYAS</strong> comes in the middle of Top Travel Agencies of 
                  Himachal Pradesh. With its high class repair it has gain the trust of clientele 
                  from all approximately the world. The Indian subcontinent is a melt pan of 
                  languages, races, people, customs and civilization. The variety of its people, 
                  their thoughtful attitude, and the warmness of their smile will create your stay 
                  an amazing experience. If you wish to explore a medley of experiences, after that 
                  come, India looks out for you.
                </p>
                <p>&nbsp;</p>
                <p>
                  <strong>YATRA OF HIMALAYAS </strong>have a team of dedicated staffs who excel in 
                  their individual services. Now a day Traveling has become most integrated part of 
                  every person. Keeping in mind this ever growing demand Himalayan Hill Tours was 
                  established. We provide simple form of travel guide of India and try to offer all 
                  the travel related services in one basket.
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
                    src="https://yatraofhimalayas.com/media/tour/qrmjyx95xt_dest2.jpg" 
                    alt="suggested_image" 
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
                    src="https://yatraofhimalayas.com/media/tour/7aly56rjti_dest4.avif" 
                    alt="suggested_image" 
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
  
  export default About;