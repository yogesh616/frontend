import React from "react";
import Navbar from "../components/Navbar";

const carData = [
  {
    id: 9,
    name: "Scorpio",
    image: "https://yatraofhimalayas.com/media/cars/yci2h8cqbn_scorpio-classic-exterior-right-front-three-quarter.jpeg",
  },
  {
    id: 8,
    name: "Swift Dzire",
    image: "https://yatraofhimalayas.com/media/cars/2vo641leza_56buusa_1483112.webp",
  },
  {
    id: 7,
    name: "Tempo Traveller",
    image: "https://yatraofhimalayas.com/media/cars/yxe83xq58o_Force-Tempo-Traveller-non-ac-1250x917.jpg",
  },
  {
    id: 6,
    name: "Indigo Taxi",
    image: "https://yatraofhimalayas.com/media/cars/9j3gfrps5j_Tata-Indigo-eCS-Right-Front-Three-Quarter-48867_ol.webp",
  },
  {
    id: 5,
    name: "Xylo Taxi",
    image: "https://yatraofhimalayas.com/media/cars/f8vfxsr245_Mahindra-Xylo-Exterior.jpg",
  },
  {
    id: 4,
    name: "Innova Taxi",
    image: "https://yatraofhimalayas.com/media/cars/2g355vc7ir_innova-crysta-exterior-right-front-three-quarter-3.jpeg",
  },
  {
    id: 3,
    name: "Indica Taxi",
    image: "https://yatraofhimalayas.com/media/cars/g2g86n8wvu_indica-ev2.webp",
  },
];

const CarBooking = () => {
  return (
   <>
   <Navbar />
   <div className="car-booking-section"></div>
    <section className="p-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center font-bulbo">
        Yatra of Himalayas -{" "}
        <span className="text-[#64a507] font-bulbo">Transportation</span>
      </h2>
      <h2 className="text-2xl font-bold text-center font-bulbo">
        Car <span className="text-[#DC143C] font-bulbo">Booking</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {carData.map((car) => (
          <div key={car.id} className="bg-white p-4 rounded-lg shadow-lg">
            <img src={car.image} alt={car.name} className="w-full h-48 object-cover rounded-md" />
            <h3 className="text-xl font-semibold text-center mt-2">{car.name}</h3>

            <div className="flex justify-center space-x-3 mt-2 text-gray-600 text-lg">
              <i className="fa-solid fa-location-dot"></i>
              <i className="fa-solid fa-car"></i>
              <i className="fa-solid fa-person"></i>
              <i className="fa-solid fa-suitcase-rolling"></i>
              <i className="fa-solid fa-mug-hot"></i>
              <i className="fa-solid fa-utensils"></i>
              <i className="fa-solid fa-camera"></i>
              <i className="fa-sharp fa-solid fa-bed"></i>
            </div>

            <hr className="my-4 border-gray-300" />

            <div className="flex justify-between items-center">
              <a
                href={`https://yatraofhimalayas.com/car-booking.php?car_id=${car.id}`}
                className=" text-white py-2 px-4  rounded hover:bg-black"
                style={{textDecoration: "none", backgroundColor: 'rgba(0, 0, 0, 0.7)'}}
              >
                Book Now
              </a>
              <p className="text-gray-500 font-semibold">Rate on Request</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Placeholder (Can be Dynamic Later) */}
      <div className="mt-6 my-2 flex justify-center">
        <a href="#" style={{textDecoration: "none"}} className="bg-black text-white px-2 rounded-full">
          1
        </a>
      </div>
    </section>
    <div/>
   </>
  );
};

export default CarBooking;
