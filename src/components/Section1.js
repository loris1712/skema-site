// components/Section1.js
export default function Section1() {
  return (
    <section id="hero" className="flex flex-col md:flex-row justify-between bg-white py-24 px-6 md:px-24 text-black">
      {/* Left Content */}
      <div className="md:w-1/2 flex flex-col space-y-6 md:pt-24">
        <div className="flex items-center space-x-2" style={{ position: 'absolute', top: '20%', left: '15%'}}>
          <img src="/image3.png" alt="Star" className="" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold" style={{zIndex: 2, position:'relative'}}>
          Il tuo nuovo alleato AI per studiare all’università
        </h1>
        <p className="text-lg md:text-xl">
          Traduci documenti Word, PDF e audio in mappe concettuali pronte per studiare all’università. Skema App, il tuo alleato smart per esami e riassunti.        </p>
        <div className="flex space-x-4 mt-4">
          {/* Get Started Button */}
          <button className="flex items-center px-6 py-3 text-white bg-black rounded-md hover:bg-[#387FF7]">
            Download iOS <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4 ml-2 fill-white"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
          </button>

          {/* Learn More Button */}
          <button className="flex items-center px-6 py-3 rounded-md hover:bg-gray-100">
            Download Android <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4 ml-2 fill-black"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 mt-6 md:mt-0">
        <img src="/devices.png" alt="Hero" className="w-full h-auto" />
      </div>

      <div className="flex items-center space-x-2" style={{ position: 'absolute', top: '95%', left: '15%'}}>
        <img src="/star.png" alt="Star" className="w-10 h-10" style={{ transform: 'rotate(45deg)' }} />
      </div>
    </section>

  );
}