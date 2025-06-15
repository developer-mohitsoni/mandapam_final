import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import "./styles.css";
import { useForm, ValidationError } from "@formspree/react";
import axios from "axios";
import ChatBot from "./ChatBot";

const WeddingMenu = () => {
  const [hotels, setHotels] = useState([]);
  const [searchLocation, setSearchLocation] = useState("");
  const [inquiryName, setInquiryName] = useState("");
  const [inquiryNumber, setInquiryNumber] = useState("");
  const [inquiryDate, setInquiryDate] = useState("");
  const [isCheckedBudget, setIsCheckedBudget] = useState(false);
  const [isCheckedLuxury, setIsCheckedLuxury] = useState(false);
  const [hotelType, setHotelType] = useState("");
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [locationSuggestions, setLocationSuggestions] = useState([]);
  const [uniqueLocations, setUniqueLocations] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [noResultsMessage, setNoResultsMessage] = useState("");
  const [state, handleSubmit] = useForm("mldbgerv");

  const suggestionRef = useRef(null);
  const navigate = useNavigate();

  // Redirect to login if no token found
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/SignIn", { replace: true });
    }
  }, [navigate]);

  // Close suggestions when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        suggestionRef.current &&
        !suggestionRef.current.contains(event.target)
      ) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Fetch hotels data from API
  useEffect(() => {
    axios
      .get("http://localhost:8080/hotels")
      .then((response) => {
        setHotels(response.data);

        // Extract unique locations for suggestions
        const locations = [
          ...new Set(response.data.map((hotel) => hotel.location)),
        ];
        setUniqueLocations(locations);
      })
      .catch((error) => console.error("Error fetching hotel data:", error));
  }, []);

  // Filter location suggestions based on input
  useEffect(() => {
    if (searchLocation.trim() === "") {
      setLocationSuggestions([]);
      return;
    }

    const filtered = uniqueLocations.filter((location) =>
      location.toLowerCase().includes(searchLocation.toLowerCase())
    );
    setLocationSuggestions(filtered);
  }, [searchLocation, uniqueLocations]);

  const handleInquiryChange = (event) => {
    setInquiryName(event.target.value);
  };

  const handleInquiryNumberChange = (event) => {
    setInquiryNumber(event.target.value);
  };

  const handleDateChange = (event) => {
    setInquiryDate(event.target.value);
  };

  const handleLocationInputChange = (e) => {
    setSearchLocation(e.target.value);
    setShowSuggestions(true);
    setNoResultsMessage("");
  };

  const handleLocationSelect = (location) => {
    setSearchLocation(location);
    setShowSuggestions(false);
    // Automatically search when location is selected
    handleSearch(location);
  };

  const handleSearch = (selectedLocation = null) => {
    const locationToSearch = selectedLocation || searchLocation;

    const filtered = hotels.filter((hotel) => {
      return hotel.location
        .toLowerCase()
        .includes(locationToSearch.toLowerCase());
    });

    if (filtered.length === 0) {
      setNoResultsMessage(
        `No hotels found in "${locationToSearch}". Please try another location.`
      );
    } else {
      setNoResultsMessage("");
    }

    setFilteredHotels(filtered);
  };

  const handleBudgetChange = (e) => {
    setIsCheckedBudget(e.target.checked);
    if (e.target.checked) {
      setHotelType("Budget");
      setIsCheckedLuxury(false);
    } else {
      setHotelType("");
    }
  };

  const handleLuxuryChange = (e) => {
    setIsCheckedLuxury(e.target.checked);
    if (e.target.checked) {
      setHotelType("Luxury");
      setIsCheckedBudget(false);
    } else {
      setHotelType("");
    }
  };

  const handleTypeFilter = (type) => {
    const filtered = hotels.filter((hotel) => hotel.type === type);
    setFilteredHotels(filtered);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/", { replace: true });
  };

  // Loading skeleton for hotels
  const LoadingSkeleton = () => (
    <div className="animate-pulse flex flex-col md:flex-row h-auto gap-10 m-5 border-b-2 w-full max-w-[900px] mx-auto">
      <div className="w-full md:w-1/2 border h-80 rounded-lg bg-gray-300" />
      <div className="w-full md:w-1/2 space-y-4">
        <div className="h-8 bg-gray-300 rounded w-3/4" />
        <div className="h-4 bg-gray-300 rounded w-full" />
        <div className="h-4 bg-gray-300 rounded w-1/2" />
        <div className="h-10 bg-gray-300 rounded w-1/2" />
      </div>
    </div>
  );

  return (
    <div className="relative w-full h-auto">
      <header>
        <div className="fixed z-50 flex items-center justify-between w-full h-20 text-gray-500 shadow-md bg-white px-4">
          <div className="flex items-center justify-between w-1/2 ml-10">
            <h1 className="text-2xl font-bold text-red-500">Mandapam</h1>
            <ul className="hidden md:flex gap-10 text-lg justify-center">
              {["Services", "AboutUs", "Contacts"].map((item) => (
                <li
                  key={item}
                  className="hover:border-b-2 ml-1 hover:border-b-black hover:text-black transition duration-200"
                >
                  <Link
                    to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors">
              <img
                src="https://cdn-icons-png.flaticon.com/128/159/159832.png"
                alt="Phone"
                className="w-6 h-6 object-contain"
              />
              <span className="text-sm md:text-base font-medium">
                +91 8986547526
              </span>
            </div>

            <div className="flex items-center gap-2 cursor-pointer">
              <img
                src="https://cdn-icons-png.flaticon.com/128/11873/11873155.png"
                alt="Logout"
                className="w-6 h-6 hover:scale-110 transition-transform"
                onClick={handleLogout}
              />
              <label className="text-sm font-semibold text-gray-700 hover:text-blue-500 transition-colors">
                Logout
              </label>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="fixed flex w-full h-screen top-20">
        {/* Left sidebar with filters - moved from right side */}
        <div className="hidden md:block w-2/8 h-auto max-h-[90vh] p-4 bg-white shadow-lg border border-gray-300 rounded-md overflow-y-auto hide-scrollbar">
          <div className="p-4 bg-white rounded-md border border-gray-300 shadow-md">
            <h2 className="text-lg font-bold mb-2">Get the List of Hotels</h2>
            <h2 className="text-sm font-light mb-2">
              We will send you contact details in seconds for free
            </h2>
            <p className="text-balance font-normal mb-2">
              What type of Hotel are you looking for?
            </p>
            <div className="flex ml-2 gap-8">
              <div className="flex items-center justify-start">
                <input
                  type="checkbox"
                  checked={isCheckedBudget}
                  onChange={handleBudgetChange}
                  className="w-3 h-3 rounded-full border-gray-300 text-blue-500 focus:ring-blue-500"
                />
                <label className="ml-2 font-bold">Budget ?</label>
              </div>
              <div className="flex items-center justify-end">
                <input
                  type="checkbox"
                  checked={isCheckedLuxury}
                  onChange={handleLuxuryChange}
                  className="w-3 h-3 rounded-full border-gray-300 text-blue-500 focus:ring-blue-500"
                />
                <label className="ml-2 font-bold">Luxury ?</label>
              </div>
            </div>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col space-y-4 mt-3"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="border rounded-md p-2"
                value={inquiryName}
                onChange={handleInquiryChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Mobile Number"
                className="border rounded-md p-2"
                value={inquiryNumber}
                onChange={handleInquiryNumberChange}
                required
              />
              <input
                type="date"
                name="date"
                className="border rounded-md p-2"
                value={inquiryDate}
                onChange={handleDateChange}
                required
              />
              <ValidationError
                prefix="Date"
                field="date"
                errors={state.errors}
              />

              <input
                type="hidden"
                name="hotelType"
                value={hotelType || "Any"}
              />

              <button
                type="submit"
                className="bg-blue-500 text-white font-bold p-2 rounded-md hover:bg-blue-600 transition duration-200"
              >
                Inquiry Now!
              </button>
            </form>
            {/* Success message */}
            {state.succeeded && (
              <p className="text-green-500 font-semibold mt-2">
                Inquiry sent successfully!
              </p>
            )}
          </div>

          {/* Quick Filters section */}
          <div className="mt-6 p-4 bg-white rounded-md border border-gray-300 shadow-md">
            <h2 className="text-lg font-bold mb-4">Quick Filters</h2>

            <div className="space-y-3">
              <button
                onClick={() => handleTypeFilter("Business")}
                className="w-full py-2 text-left px-3 bg-blue-50 hover:bg-blue-100 rounded transition-colors flex items-center"
              >
                <span className="w-3 h-3 rounded-full bg-blue-500 mr-2"></span>
                Business Hotels
              </button>

              <button
                onClick={() => handleTypeFilter("Luxury")}
                className="w-full py-2 text-left px-3 bg-purple-50 hover:bg-purple-100 rounded transition-colors flex items-center"
              >
                <span className="w-3 h-3 rounded-full bg-purple-500 mr-2"></span>
                Luxury Hotels
              </button>

              <button
                onClick={() => handleTypeFilter("Resort")}
                className="w-full py-2 text-left px-3 bg-green-50 hover:bg-green-100 rounded transition-colors flex items-center"
              >
                <span className="w-3 h-3 rounded-full bg-green-500 mr-2"></span>
                Resorts
              </button>

              <button
                onClick={() => handleTypeFilter("Beach Resort")}
                className="w-full py-2 text-left px-3 bg-amber-50 hover:bg-amber-100 rounded transition-colors flex items-center"
              >
                <span className="w-3 h-3 rounded-full bg-amber-500 mr-2"></span>
                Beach Resorts
              </button>

              <button
                onClick={() => setFilteredHotels([])}
                className="w-full py-2 text-left px-3 bg-gray-50 hover:bg-gray-100 rounded transition-colors flex items-center"
              >
                <span className="w-3 h-3 rounded-full bg-gray-500 mr-2"></span>
                Show All
              </button>
            </div>
          </div>
        </div>

        {/* Main content area - adjusted to accommodate left sidebar */}
        <div className="h-auto overflow-y-auto w-full md:w-4/5 p-4 bg-gray-100 hide-scrollbar">
          <div className="flex justify-between items-center mb-6 ml-20 mr-20">
            <h1 className="text-5xl font-bold text-gray-800 tracking-wide">
              Search Your Mandapam
            </h1>

            <Link to="/VenueRecommendation">
              <button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 flex items-center gap-2 mr-20">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/3406/3406792.png"
                  className="w-4 h-4"
                  alt="AI Icon"
                />
                AI VenueRecommendation
              </button>
            </Link>
          </div>

          {/* Search section - with location suggestions */}
          <div className="flex max-w-lg mb-8 ml-20 relative">
            <div className="flex items-center border rounded-md w-full shadow-md bg-white">
              <img
                src="https://cdn-icons-png.flaticon.com/128/484/484167.png"
                className="w-8 h-8 mx-2"
                alt="Search Location Icon"
              />
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Search by Location"
                  className="w-full focus:outline-none h-full p-3 rounded-md"
                  value={searchLocation}
                  onChange={handleLocationInputChange}
                  onClick={() => setShowSuggestions(true)}
                />

                {/* Location suggestions dropdown */}
                {showSuggestions && locationSuggestions.length > 0 && (
                  <div
                    ref={suggestionRef}
                    className="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-lg mt-1 max-h-48 overflow-y-auto"
                  >
                    {locationSuggestions.map((location, index) => (
                      <div
                        key={index}
                        className="p-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleLocationSelect(location)}
                      >
                        {location}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <button
                onClick={() => handleSearch()}
                className="bg-green-500 text-white font-bold px-6 py-3 rounded-r-md hover:bg-green-600 transition duration-200"
              >
                Find
              </button>
            </div> 
          </div>

          {/* No results message */}
          {noResultsMessage && (
            <div className="text-center mb-6 p-4 bg-amber-50 border border-amber-200 rounded-md w-full max-w-[900px] mx-auto">
              <p className="text-amber-800">{noResultsMessage}</p>
            </div>
          )}

          
          {/* Hotels listing with improved spacing */}
          <div className="flex flex-col gap-8">
            {/* Check if hotels are loading */}
            {hotels.length === 0 ? (
              // Show loading skeletons
              <div>
                {[...Array(3)].map((_, idx) => (
                  <LoadingSkeleton key={idx} />
                ))}
              </div>
            ) : (
              // Show hotels or filtered hotels
              (filteredHotels.length > 0 ? filteredHotels : hotels).map(
                (hotel) => (
                  <div
                    key={hotel._id}
                    className="flex flex-col md:flex-row h-auto gap-6 p-6 border-b-2 bg-white rounded-lg shadow-sm w-full max-w-[900px] mx-auto ml-20"
                  >
                    {/* Images Section */}
                    <div className="w-full md:w-1/2 border h-80 rounded-lg overflow-hidden">
                      <div className="w-full h-[60%] overflow-hidden rounded-t-lg">
                        <img
                          src={hotel.images.image1}
                          alt={hotel.hotel}
                          className="object-cover w-full h-full transition-transform duration-500 ease-in-out transform hover:scale-110"
                        />
                      </div>
                      
                      <div className="flex w-full h-[40%]">
                        {[hotel.images.image2, hotel.images.image3].map(
                          (imgSrc, idx) => (
                            <div
                              key={idx}
                              className="w-1/2 h-full overflow-hidden"
                            >
                              <img
                                src={imgSrc}
                                alt={`View ${idx + 2}`}
                                className="object-cover w-full h-full transition-transform duration-700 ease-in-out transform hover:scale-110"
                              />
                            </div>
                          )
                        )}
                      </div>
                    </div>
                    

                    {/* Content Section */}
                    <div className="w-full md:w-1/2">
                      <div className="flex justify-between">
                        <h1 className="text-3xl font-bold mb-3">
                          {hotel.hotel}
                        </h1>
                      </div>
                      <p className="mb-4 text-gray-700">{hotel.description}</p>

                      <div className="flex justify-between mb-4">
                        {/* Rating */}
                        <div className="flex items-center group cursor-pointer">
                          <img
                            src="https://cdn-icons-png.flaticon.com/128/17943/17943872.png"
                            alt="Rating"
                            className="w-6 h-6 mr-1 transition-transform duration-300 group-hover:scale-125"
                          />
                          <p className="transition-colors duration-300 group-hover:text-blue-600">
                            {hotel.rating} Rating
                          </p>
                        </div>

                        {/* Parking */}
                        <div className="flex items-center group cursor-pointer">
                          <img
                            src="https://cdn-icons-png.flaticon.com/128/7146/7146820.png"
                            alt="Car Parking"
                            className="w-6 h-6 mr-1 transition-transform duration-300 group-hover:scale-125"
                          />
                          <p className="transition-colors duration-300 group-hover:text-blue-600">
                            {hotel.parking ? "Car Parking" : "No Parking"}
                          </p>
                        </div>

                        {/* Wifi */}
                        <div className="flex items-center group cursor-pointer">
                          <img
                            src="https://cdn-icons-png.flaticon.com/128/4974/4974542.png"
                            alt="WiFi"
                            className="w-6 h-6 mr-1 transition-transform duration-300 group-hover:scale-125"
                          />
                          <p className="transition-colors duration-300 group-hover:text-blue-600">
                            {hotel.wifi ? "Wifi Available" : "No Wifi"}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col items-start">
                        <p className="text-xl font-bold mb-4">
                          Price: ₹{hotel.min_price} - ₹{hotel.max_price}
                        </p>
                        <Link to={`/BookNow/${hotel.id}`} className="w-full">
                          <button className="w-full py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-200 shadow-md font-medium">
                            Check Out
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              )
            )}
          </div>
        </div>
      </div>
      <ChatBot />
    </div>
  );
};

export default WeddingMenu;
