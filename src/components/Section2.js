import React from 'react';
import { CheckCircle } from 'lucide-react'; // Example icon, replace with your preferred icons

const Section2 = () => {
  return (
    <section className="flex md:flex-row flex-col-reverse md:flex-row items-center gap-8 p-8 bg-white relative">
      {/* Left Image */}

      <div className="flex items-center space-x-2" style={{ position: 'absolute', top: '0%', left: '5%'}}>
        <img src="/star.png" alt="Star" className="w-10 h-10" style={{ transform: 'rotate(45deg)' }} />
      </div>

      <div className="w-full md:w-1/2">
        <img 
          src="/image4.png" 
          alt="Example" 
          className="w-full h-auto"
        />
      </div>

      {/* Right Content */}
      <div className="w-full md:w-1/2">
        {/* Subtitle */}
        <p className="text-sm uppercase tracking-wider text-blue-500 font-semibold">
          Features
        </p>

        {/* Title */}
        <h2 className="text-3xl font-bold text-black mb-8">
          Blink Functionalities
        </h2>

        {/* Feature List */}
        <div className="space-y-6">
          {/* Feature 1 */}
          <div className="flex space-x-4">
            <CheckCircle className="text-blue-500 w-12 h-12" />
            <div>
              <h3 className="font-semibold text-lg text-black">Spontaneous Video Chats, Anytime</h3>
              <p className="text-gray-600">
                Connect face-to-face through short, timed video chats that encourage authentic conversations without the pressure. Each session keeps things lively, engaging, and real.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start space-x-4">
            <CheckCircle className="text-blue-500 w-12 h-12" />
            <div>
              <h3 className="font-semibold text-lg text-black">Decide in a Blink: Wink, Link, or Blink</h3>
              <p className="text-gray-600">
                End each interaction with a quick choice: ‘Wink’ for strong interest, ‘Link’ for a standard match, or ‘Blink’ to pass. Keep it simple, keep it spontaneous.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-start space-x-4">
            <CheckCircle className="text-blue-500 w-12 h-12" />
            <div>
              <h3 className="font-semibold text-lg text-black">Security You Can Trust</h3>
              <p className="text-gray-600">
                With ID checks, face verification, and age confirmation, Blink provides a safe environment where you can connect confidently with real people.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
