import { useState } from 'react';

const BookNow = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    checkIn: '',
    checkOut: '',
    guests: 1,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', checkIn: '', checkOut: '', guests: 1 });
    }, 2000); // Optional auto-reset
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        {submitted ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-green-600">Booking Confirmed!</h2>
            <p className="mt-2 text-gray-600">We’ve received your request. Thank you!</p>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-6">Complete Your Booking</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                required
                placeholder="Your Name"
                className="w-full border px-4 py-2 rounded-md"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <div className="flex gap-2">
                <input
                  type="date"
                  required
                  className="w-1/2 border px-4 py-2 rounded-md"
                  value={formData.checkIn}
                  onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                />
                <input
                  type="date"
                  required
                  className="w-1/2 border px-4 py-2 rounded-md"
                  value={formData.checkOut}
                  onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                />
              </div>
              <input
                type="number"
                min="1"
                max="10"
                required
                placeholder="Number of Guests"
                className="w-full border px-4 py-2 rounded-md"
                value={formData.guests}
                onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors w-full"
              >
                Submit Booking
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default BookNow;
