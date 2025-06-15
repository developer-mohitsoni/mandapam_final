import { useState } from "react";

export default function MarriageGarden() {
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [capacity, setCapacity] = useState("");
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleButtonClick = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:8080/api/get-recommendations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          location,
          price_range: priceRange,
          capacity,
        }),
      });

      if (!response.ok) {
        throw new Error(`Server responded with status: ${response.status}`);
      }

      const data = await response.json();
      const venues = data.results || [];

      if (venues.length === 0) {
        setError(data.message || "No venues found for the selected location.");
        setRecommendations([]);
      } else {
        const updatedData = venues.map((venue) => ({
          ...venue,
          imageIndex: Math.floor(Math.random() * 20) + 1,
        }));
        setRecommendations(updatedData);
      }

    } catch (error) {
      console.error("Error fetching recommendations:", error);
      setError("Failed to fetch venue recommendations. Please try again later.");
      setRecommendations([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="bg-purple-800 text-white">
        <div className="container mx-auto py-12 px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Your Perfect Wedding Venue</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Discover the most beautiful marriage gardens and venues tailored to your needs.
          </p>
        </div>
      </div>

      <div className="container mx-auto py-8 px-4 md:px-8">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Search Venues</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
              <input
                type="text"
                placeholder="City or Area"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Price Range (₹)</label>
              <input
                type="text"
                placeholder="e.g. 50000-100000"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                onChange={(e) => setPriceRange(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Guest Capacity</label>
              <input
                type="number"
                placeholder="Number of Guests"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                onChange={(e) => setCapacity(e.target.value)}
              />
            </div>
          </div>

          <div className="flex justify-center">
            <button
              onClick={handleButtonClick}
              disabled={loading}
              className="px-8 py-3 bg-purple-600 text-white font-medium rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors disabled:opacity-70"
            >
              {loading ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Finding Venues...
                </span>
              ) : (
                "Find Perfect Venues"
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto pb-16 px-4 md:px-8">
        {loading ? (
          <div className="flex justify-center py-12">
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-purple-500 border-t-transparent"></div>
              <p className="mt-4 text-lg text-gray-600">Searching for the best venues...</p>
            </div>
          </div>
        ) : error ? (
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mt-4">
            <h3 className="text-xl font-medium text-red-800 mb-2">Error</h3>
            <p className="text-red-600">{error}</p>
          </div>
        ) : recommendations.length > 0 ? (
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Recommended Venues</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendations.map((venue, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <img src={`/images/venue${venue.imageIndex}.jpg`} alt={venue.name} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{venue.name}</h3>
                    <div className="mb-4">
                      <div className="flex items-start mb-1">
                        <span className="text-purple-600 mr-2">●</span>
                        <span className="text-gray-600"><span className="font-medium">Location:</span> {venue.location}</span>
                      </div>
                      <div className="flex items-start mb-1">
                        <span className="text-purple-600 mr-2">●</span>
                        <span className="text-gray-600"><span className="font-medium">Price:</span> ₹{venue.price_range}</span>
                      </div>
                      <div className="flex items-start mb-1">
                        <span className="text-purple-600 mr-2">●</span>
                        <span className="text-gray-600"><span className="font-medium">Capacity:</span> {venue.capacity} guests</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700 mb-1">Amenities:</h4>
                      <p className="text-gray-600">{venue.amenities}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow p-8 text-center mt-4">
            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <h3 className="text-xl font-medium text-gray-700 mb-2">No Venues Found</h3>
            <p className="text-gray-500 mb-4">Please adjust your search criteria and try again.</p>
            <p className="text-purple-600 text-sm">Try searching with broader location or price range options</p>
          </div>
        )}
      </div>

      <div className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h3 className="text-xl font-semibold mb-2">Marriage Garden</h3>
          <p className="text-gray-400">Making your special day perfect since 2020</p>
          <div className="mt-4 text-gray-400 text-sm">
            © {new Date().getFullYear()} Marriage Garden. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
