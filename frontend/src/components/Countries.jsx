import { useEffect, useState } from 'react';

const Countries = () => {
  const [country, setCountry] = useState([]);
  const [countryName, setCountryName] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        if (!response.ok) throw new Error('Failed to fetch countries');
        const data = await response.json();
        setCountry(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch country data:", error);
        setError("Unable to load countries. Please try again later.");
        setLoading(false);
      }
    };
    fetchCountryData();
  }, []);

  const handleCountrySelect = (event) => {
    setCountryName(event.target.value);
  };

  return (
    <div className='flex flex-col items-center justify-center w-full h-auto'>
      {loading && <p>Loading countries...</p>}
      {error && <p className='text-red-500'>{error}</p>}
      {!loading && !error && (
        <select
          value={countryName}
          onChange={handleCountrySelect}
          className='p-2 border border-black rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
          aria-label="Select your country"
        >
          <option value="" disabled>Select your country</option>
          {country.map((item) => (
            <option key={item.cca3} value={item.name.common}>
              {item.name.common}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default Countries;
