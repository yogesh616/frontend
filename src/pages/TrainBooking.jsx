import { useState } from "react";
import Navbar from '../components/Navbar'
import Train from '../images/train-booking.avif'
import Footer from "../components/Footer";

const TrainBookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    // Add form submission logic here
  };

  return (
   <>
    <Navbar />
    <section className="train-booking-section p-6">
      <div className="grid md:grid-cols-2 gap-6 items-center h-full">
        <div className="train-booking-image h-full flex items-center">
          <img
            src={Train}
            alt="Train Booking"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div className="train-booking-form bg-white p-6 shadow-md rounded-lg h-full flex flex-col justify-center">
          <h1 className="text-2xl font-bold mb-4">Train Booking Form</h1>
          <form onSubmit={handleSubmit} id="frmTrainBooking">
            <div className="mb-4">
              <label className="block text-gray-700">Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Your Email Address"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Your Mobile</label>
              <input
                type="number"
                name="mobile"
                placeholder="Your Mobile Number"
                required
                value={formData.mobile}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Your Message (Maximum 500 Characters *)</label>
              <textarea
                name="message"
                placeholder="Enter Your Message Here"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
              />
            </div>

            <input
              type="submit"
              value="Submit"
              className="train-booking-btn bg-blue-500 text-white p-2 rounded-lg w-full cursor-pointer hover:bg-blue-600"
            />
          </form>
          <div id="msg_field" className="text-green-500 mt-2"></div>
        </div>
      </div>
    </section>
    <Footer />
   </>
  );
};

export default TrainBookingForm;
