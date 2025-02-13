import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const HotelBooking = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        check_in_date: "",
        check_out_date: "",
        adults: "1",
        children: "0",
        destination: "Leh Ladakh",
        stay_type: "Heritage"
    });

    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        setMessage("Your booking request has been submitted successfully!");
    };

    return (
        <>
        <Navbar />
        <section className="hotel-booking-section">
            <div className="hotel-booking-section-columns">
                <div className="hotel-booking-section-contents">
                    <h2>
                        <span style={{ color: "white", fontFamily: "var(--font-bulbo)" }}>Yatra of</span> Himalayas
                    </h2>
                    <h3>Hotel Booking</h3>
                    <p>
                        Thank you for allowing the Yatra of Himalayas Agency to research a quote for your upcoming travel plans and experience.
                        Please fill out the Travel Quote Request Form, and you will be contacted within 3 business days.
                    </p>
                </div>

                <div className="hotel-booking-section-form">
                    <form onSubmit={handleSubmit}>
                        <h1>Enquire for Hotel</h1>

                        <div className="hotel-booking-fields">
                            <p>Name</p>
                            <input type="text" name="name" placeholder="Enter Your Name" required value={formData.name} onChange={handleChange} />
                        </div>

                        <div className="hotel-booking-fields">
                            <p>Email</p>
                            <input type="email" name="email" placeholder="Enter Your Email Address" required value={formData.email} onChange={handleChange} />
                        </div>

                        <div className="hotel-booking-fields">
                            <p>Mobile</p>
                            <input type="text" name="mobile" placeholder="Enter Your Mobile No." required value={formData.mobile} onChange={handleChange} />
                        </div>

                        <div className="hotel-booking-fields">
                            <p>Check In</p>
                            <input style={{color: 'black'}} type="date"  name="check_in_date" required min="2025-02-12" value={formData.check_in_date} onChange={handleChange} />
                        </div>

                        <div className="hotel-booking-fields">
                            <p>Check Out</p>
                            <input style={{color: 'black'}} type="date" name="check_out_date" required min="2025-02-12" value={formData.check_out_date} onChange={handleChange} />
                        </div>

                        <div className="hotel-booking-fields-options">
                            <div className="selecting-options">
                                <p>Adults</p>
                                <select name="adults" style={{color: 'black'}} required value={formData.adults} onChange={handleChange}>
                                    {Array.from({ length: 10 }, (_, i) => (
                                        <option style={{color: 'black'}} key={i + 1} value={i + 1}>{i + 1}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="selecting-options">
                                <p>Children</p>
                                <select style={{color: 'black'}} name="children" required value={formData.children} onChange={handleChange}>
                                    {Array.from({ length: 11 }, (_, i) => (
                                        <option style={{color: 'black'}} key={i} value={i}>{i}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="selecting-options">
                                <p>Destination</p>
                                <select style={{color: 'black'}} name="destination" required value={formData.destination} onChange={handleChange}>
                                    {["Leh Ladakh", "Dharamshala", "Himachal", "Kullu", "Kinnaur", "Lahaul Spiti"].map((place) => (
                                        <option style={{color: 'black'}} key={place} value={place}>{place}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="selecting-options">
                                <p>Select Stay</p>
                                <select style={{color: 'black'}} name="stay_type" required value={formData.stay_type} onChange={handleChange}>
                                    {["Heritage", "Resort", "Cottage", "Home Stay", "Hotel"].map((stay) => (
                                        <option style={{color: 'black'}} key={stay} value={stay}>{stay}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <input type="submit" value="Submit" className="booking-btn" />
                    </form>

                    {message && <div style={{ textAlign: "center", fontWeight: "bold", marginTop: "10px" }}>{message}</div>}
                </div>
            </div>
        </section>
        <Footer />
        </>
    );
};

export default HotelBooking;
