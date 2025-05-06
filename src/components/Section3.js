import React from 'react';
import { CheckCircle } from 'lucide-react'; // Example icon, replace with your preferred icons

const Section2 = () => {
  return (
    <section className="flex md:flex-row flex-col-reverse md:flex-row items-center md:px-24 gap-8 p-8 bg-white relative">
      {/* Right Content */}
      <div className="w-full md:w-1/2">

        {/* Feature List */}
        <div className="space-y-6">
          {/* Feature 1 */}
          <div className="flex space-x-4">
            <div>
              <div className="flex items-center space-x-4">
                <div className='bg-[#387FF7] p-2 rounded-full'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-[#fff]" viewBox="0 0 448 512"><path d="M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416l384 0c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8l0-18.8c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"/></svg>
                </div>
                <h3 className="font-semibold text-[24px] text-black">Trascrizione Audio Intelligente</h3>

              </div>
              <p className="text-gray-600 mt-4">
              Rivoluzionaria per la sua semplicità d’uso, Skema parte da una registrazione audio e ti offre due opzioni:
              una trascrizione sintetica, chiara e immediata, oppure una versione tecnica, arricchita con fonti accademiche e contenuti di approfondimento.              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2">
        <img 
          src="/image5.png" 
          alt="Example" 
          className="w-full h-auto"
        />
      </div>

      
    </section>
  );
};

export default Section2;
