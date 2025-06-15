import { useState, useEffect } from 'react';
import 'react-calendar/dist/Calendar.css';

const Body = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='relative w-full h-screen overflow-auto'>
      {/* Video Section */}
      <div className='w-full h-full'>
        <video
          src={`${import.meta.env.BASE_URL}/wedding-1.mp4`}
          autoPlay
          loop
          muted
          preload="auto"
          className='object-cover w-full h-full'
        />
      </div>

      {/* Text Content */}
      <div className='fixed top-80 left-1/2 transform -translate-x-1/2 text-center z-10'>
        <h1 className={`text-6xl font-bold text-white transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          Search Your Wedding Place
        </h1>
        <p className={`mt-5 text-lg font-bold text-white transition-opacity duration-500 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          The Wedding You have Always Imagined....
        </p>
      </div>
    </div>
  );
};

export default Body;
