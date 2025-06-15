import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ImageSlider = ({ images, hotelName }) => {
  const arrowStyle =
    "bg-gray-800/50 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-800 transition";

  const prevArrow = (
    <div className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer ${arrowStyle}`}>
      ❮
    </div>
  );

  const nextArrow = (
    <div className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer ${arrowStyle}`}>
      ❯
    </div>
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    checkIn: "",
    guests: 1,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://formspree.io/f/mldbgerv", {
        name: formData.name,
        checkIn: formData.checkIn,
        guests: formData.guests,
        hotel: hotelName,
        formType: "Book Now"
      });
      setSubmitted(true);
      setTimeout(() => {
        setIsModalOpen(false);
        setSubmitted(false);
        setFormData({ name: "", checkIn: "", guests: 1 });
      }, 2000);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting the form.");
    }
  };

  return (
    <>
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="bg-white rounded-xl p-6 w-full max-w-md relative"
            >
              {submitted ? (
                <div className="text-center">
                  <h2 className="text-xl font-semibold text-green-600">Booking Confirmed!</h2>
                  <p className="mt-2 text-gray-600">Thank you for your request.</p>
                </div>
              ) : (
                <>
                  <h2 className="text-lg font-semibold text-gray-800 mb-4">Book Your Stay at {hotelName}</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input
                        type="text"
                        required
                        className="w-full border rounded-lg px-3 py-2"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Check-in Date</label>
                      <input
                        type="date"
                        required
                        className="w-full border rounded-lg px-3 py-2"
                        value={formData.checkIn}
                        onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Guests</label>
                      <input
                        type="number"
                        min="1"
                        max="500"
                        required
                        className="w-full border rounded-lg px-3 py-2"
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                      Submit
                    </button>
                  </form>
                </>
              )}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <header className="my-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-900">{hotelName}</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Book Now
          </button>
        </div>
      </header>

      <div className="w-full max-w-5xl mx-auto my-6">
        <Fade
          duration={3000}
          arrows
          pauseOnHover
          indicators={false}
          easing="ease"
          prevArrow={prevArrow}
          nextArrow={nextArrow}
        >
          {images.map((image, index) => (
            <div key={index} className="aspect-[16/9] rounded-lg overflow-hidden">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => (e.target.src = "/imgError.jpg")}
              />
            </div>
          ))}
        </Fade>
      </div>
    </>
  );
};

ImageSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  hotelName: PropTypes.string.isRequired,
};

const Ratings = ({ rating }) => {
  return (
    <div className="p-5 bg-white rounded-lg">
      <h2 className="text-lg font-semibold text-gray-800 mb-3">Guest Ratings</h2>
      <div className="flex items-center mb-4">
        <span className="text-blue-600 font-medium">{rating.toFixed(1)}</span>
        <span className="ml-2 text-gray-600">/ 5</span>
      </div>
      {[5, 4, 3, 2, 1].map((star) => (
        <div key={star} className="flex items-center mb-2">
          <span className="text-sm text-gray-600 w-6">{star}</span>
          <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500"
              style={{ width: `${(star / 5) * 100}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

Ratings.propTypes = {
  rating: PropTypes.number.isRequired,
};

const Reviews = ({ name, rating, date, reviewText }) => {
  return (
    <article className="p-4 bg-white rounded-lg">
      <div className="flex items-center mb-2">
        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
          <span className="text-blue-600 font-medium">{name[0]}</span>
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-800">{name}</h3>
          <p className="text-xs text-gray-500">{date}</p>
        </div>
      </div>
      <div className="flex items-center mb-2">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-sm text-gray-600">{reviewText}</p>
    </article>
  );
};

Reviews.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  reviewText: PropTypes.string.isRequired,
};

const BookNow = () => {
  const { id } = useParams();
  console.log("Hotel ID from useParams:", id);
  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [checkAvailabilityData, setCheckAvailabilityData] = useState({
    checkIn: "",
    guests: 1
  });
  const [checkAvailabilitySubmitted, setCheckAvailabilitySubmitted] = useState(false);

  useEffect(() => {
    const fetchHotel = async () => {
      try {
        setLoading(true);
        console.log(`Fetching hotel with ID: ${id}`);
        const response = await axios.get(`http://localhost:8080/hotels/${id}`);
        console.log("API Response:", response.data);
        setHotel(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Fetch Error:", err.message);
        setError(`Hotel not found: ${err.message}`);
        setLoading(false);
      }
    };
    fetchHotel();
  }, [id]);

  const handleCheckAvailabilitySubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://formspree.io/f/mldbgerv", {
        checkIn: checkAvailabilityData.checkIn,
        guests: checkAvailabilityData.guests,
        hotel: hotel?.hotel || "Unknown Hotel",
        formType: "Check Availability"
      });
      setCheckAvailabilitySubmitted(true);
      setTimeout(() => {
        setCheckAvailabilitySubmitted(false);
      }, 3000);
    } catch (error) {
      console.error("Error submitting availability check:", error);
      alert("There was an error checking availability.");
    }
  };

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (error) return <div className="text-center py-10 text-red-600">{error}</div>;

  const images = [
    hotel.images?.image1 || "/imgError.jpg",
    hotel.images?.image2 || "/imgError.jpg",
    hotel.images?.image3 || "/imgError.jpg",
  ];

  const services = [
    { icon: "👥", text: `${hotel.capacity || "N/A"} Guests` },
    { icon: "🍽️", text: `₹${hotel.food_price || "N/A"}/plate` },
    { icon: "📶", text: hotel.wifi ? "Wi-Fi Available" : "No Wi-Fi" },
    { icon: "🅿️", text: hotel.parking ? "Parking Available" : "No Parking" },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <ImageSlider images={images} hotelName={hotel.hotel || "Unknown Hotel"} />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
          {services.map((service, index) => (
            <div key={index} className="p-3 bg-white rounded-lg text-center">
              <span className="text-xl">{service.icon}</span>
              <p className="text-sm text-gray-600 mt-1">{service.text}</p>
            </div>
          ))}
        </div>

        <section className="my-6 p-5 bg-white rounded-lg">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">About {hotel.hotel || "Unknown Hotel"}</h2>
          <p className="text-sm text-gray-600">{hotel.description || "No description available."}</p>
          <p className="text-sm text-gray-600 mt-2">
            <strong>Location:</strong> {hotel.location || "N/A"} |{" "}
            <strong>Rooms:</strong> {hotel.no_of_rooms || "N/A"}
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <Ratings rating={hotel.rating || 0} />
          <div className="p-5 bg-white rounded-lg">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">Check Availability</h2>
            {checkAvailabilitySubmitted ? (
              <div className="text-center py-4">
                <p className="text-green-600 font-medium">Availability check submitted!</p>
                <p className="text-sm text-gray-600 mt-2">We will contact you shortly with available options.</p>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleCheckAvailabilitySubmit}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Check-in Date</label>
                  <input
                    type="date"
                    required
                    className="w-full border rounded-lg px-3 py-2"
                    value={checkAvailabilityData.checkIn}
                    onChange={(e) => setCheckAvailabilityData({ ...checkAvailabilityData, checkIn: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Guests</label>
                  <input
                    type="number"
                    min="1"
                    max={hotel.capacity || 500}
                    required
                    className="w-full border rounded-lg px-3 py-2"
                    placeholder="Number of guests"
                    value={checkAvailabilityData.guests}
                    onChange={(e) => setCheckAvailabilityData({ ...checkAvailabilityData, guests: e.target.value })}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Check
                </button>
              </form>
            )}
          </div>
        </div>

        <section className="my-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Amenities</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "Catering", desc: "Gourmet dining options" },
              { title: "Spa", desc: "Relaxation and wellness" },
              { title: "Event Space", desc: "Customizable venues" },
              { title: "Concierge", desc: "24/7 assistance" },
            ].map((item, index) => (
              <div key={index} className="p-3 bg-white rounded-lg">
                <h3 className="text-sm font-medium text-gray-800">{item.title}</h3>
                <p className="text-xs text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="my-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Guest Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Reviews
              name="Rishab Raj"
              rating={4.7}
              date="9 Sep 2021"
              reviewText="Excellent services, very professional staff."
            />
            <Reviews
              name="Priya Sharma"
              rating={5.0}
              date="15 Oct 2021"
              reviewText="Beautiful venue with great facilities. Highly recommend!"
            />
          </div>
        </section>

        <footer className="mt-8 text-center text-sm text-gray-600">
          © 2025 {hotel.hotel || "Unknown Hotel"}. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default BookNow;