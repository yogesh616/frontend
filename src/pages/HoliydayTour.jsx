import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const destinations = [
  {
    title: "Shimla Holiday Tour",
    description:
      "The town is famous for pleasant walking experiences on hillsides surrounded by pine and oak forests.",
    image: "https://yatraofhimalayas.com/images/extras/temple.jpg",
    link: "https://yatraofhimalayas.com/tour-packages.php?dest=shimla-holiday-tour",
    available: true,
  },
  {
    title: "Dharamshala Holiday Tour",
    description:
      "It is a well-known centre for studying Buddhism, its sutras, tantras, and major texts related to this.",
    image: "https://yatraofhimalayas.com/images/extras/temple.jpg",
    link: "https://yatraofhimalayas.com/tour-packages.php?dest=dharamshala-holiday-tour",
    available: true,
  },
  {
    title: "Khajiyar Holiday Tour",
    description:
      "Chamba, the land of Kailash Mountain and Lord Shiva, is famous for its untouched natural beauty.",
    image: "https://yatraofhimalayas.com/images/extras/temple.jpg",
    link: "",
    available: false,
  },
];

const HolidayTour = () => {
  return (
   <>
   <Navbar />
   <section className="all-destinations p-6">
      <h1 className="text-3xl font-bold text-center">
        All<span className="text-red-500 font-cursive"> Destinations</span>
      </h1>
      <hr className="border-t-2 border-gray-300 w-16 mx-auto my-2" />
      <p className="text-center text-gray-600 max-w-2xl mx-auto">
        We live in a wonderful world full of beauty, charm, and adventure. There
        is no end to the adventures we can have if only we seek them with our
        eyes open.
      </p>
      <div className="flex flex-col gap-6 mt-6">
        {destinations.map((dest, index) => (
          <div key={index} className="flex  bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={dest.image}
              alt={dest.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-4 flex flex-col justify-between">
              <h2 className="text-xl font-bold text-black">{dest.title}</h2>
              <p className="text-gray-600 text-sm mb-4">{dest.description}</p>
              <div className="flex space-x-2 text-gray-500 text-lg">
                <i className="fa-solid fa-location-dot"></i>
                <i className="fa-solid fa-car"></i>
                <i className="fa-solid fa-person"></i>
                <i className="fa-solid fa-suitcase-rolling"></i>
                <i className="fa-solid fa-mug-hot"></i>
                <i className="fa-solid fa-utensils"></i>
                <i className="fa-solid fa-camera"></i>
                <i className="fa-solid fa-bed"></i>
              </div>
              <hr className="my-2" />
              <div>
                {dest.available ? (
                  <a
                    href={dest.link}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg inline-flex items-center"
                  >
                    <i className="fa-solid fa-box mr-2"></i> Visit Now
                  </a>
                ) : (
                  <span className="bg-red-500 text-white px-4 py-2 rounded-lg inline-flex items-center">
                    <i className="fa-solid fa-box mr-2"></i> Tours Not Available
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="destination-pagination text-center mt-6">
        <a href="#" className="bg-gray-200 px-4 py-2 rounded-md">1</a>
      </div>
    </section>
    <Footer />
   </>
  );
};

export default HolidayTour;
