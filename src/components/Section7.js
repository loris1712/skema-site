import React from 'react';

const Section7 = () => {
  return (
    <section className="relative bg-white p-8 md:px-24 ">
    <div className='w-[95%] mx-auto bg-black rounded-xl overflow-hidden px-12 py-24 relative'>

    <div className="flex items-center space-x-2" style={{ position: 'absolute', bottom: '0%', right: '20%'}}>
        <img src="/star.png" alt="Star" className="w-10 h-10" style={{ transform: 'rotate(45deg)' }} />
      </div>

      <div className="absolute top-0 right-0 w-1/2 h-auto">
            <img 
              src="/top-right-image.jpg" 
              alt="Highlight" 
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Contenuto principale a sinistra */}
          <div className="relative z-10 w-full md:w-1/2 text-white">
            <h2 className="text-4xl font-bold mb-4 capitalize">ready to get started?</h2>
            <p className="text-lg mb-6">
            Start your journey with Blink.
            </p>
            <button className="flex align-center bg-white text-black px-6 py-4 rounded-md font-semibold hover:bg-blue-600 transition">
              Download app &nbsp; <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="w-5 h-5 fill-[#000]"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>           
            </button>
          </div>

          {/* Immagine in basso a sinistra */}
          <div className="absolute bottom-0 left-0 w-1/3 h-auto">
            <img 
              src="/bottom-left-image.jpg" 
              alt="Feature" 
              className="w-full h-auto object-cover"
            />
          </div>
      </div>
    </section>
  );
};

export default Section7;
