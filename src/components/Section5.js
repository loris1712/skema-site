"use client"
import React, { useState } from 'react';

const feedbacks = [
  {
    id: 1,
    name: "Luke",
    img: "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    text: "Blink completely changed my approach to online dating. I love how the app focuses on real, face-to-face interactions through short video chats—it feels so much more genuine than just swiping through profiles. The timed chats keep things exciting and spontaneous, and I appreciate the verification features."
  },
  {
    id: 2,
    name: "Julie",
    img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    text: "Mi sono sentita al sicuro e protetta grazie alle funzioni avanzate."
  },
  {
    id: 3,
    name: "Mark",
    img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    text: "Facile da usare e con ottime misure di sicurezza."
  },
  {
    id: 4,
    name: "Sarah",
    img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    text: "Un'app intuitiva che mette la sicurezza al primo posto."
  },
  {
    id: 5,
    name: "David",
    img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    text: "Molto soddisfatto, finalmente un servizio che pensa alla privacy!"
  }
];

const Section5 = () => {
  const [selectedFeedback, setSelectedFeedback] = useState(feedbacks[0]);

  return (
    <section className="md:px-24 gap-8 p-8 bg-white relative">

    <div className="flex items-center space-x-2" style={{ position: 'absolute', top: '0%', right: '20%'}}>
      <img src="/star.png" alt="Star" className="w-12 h-12" style={{ transform: 'rotate(45deg)' }} />
    </div>

    <div className="flex items-center space-x-2" style={{ position: 'absolute', bottom: '10%', left: '10%'}}>
      <img src="/star.png" alt="Star" className="w-10 h-10" style={{ transform: 'rotate(45deg)' }} />
    </div>

    <div className='text-center'>
    <p className="text-sm uppercase tracking-wider text-black font-semibold">
    testimonial
        </p>

        {/* Title */}
        <h2 className="text-3xl capitalize md:w-[20%] mx-auto font-bold text-black mt-4 mb-8">
        what our users say about us?
        </h2>
    </div>
      <div className='flex md:flex-row flex-col items-center '>
      {/* Immagine a sinistra */}
      <div className="w-full md:w-1/2">
              <img 
                src="/testimonial.png" 
                alt="Feedback" 
                className="w-full h-auto"
              />
            </div>

      {/* Contenuto a destra */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-xl font-bold text-black mb-4 capitalize">Authentic Connections, Just a Blink Away!</h2>
        <p className="text-gray-600 text-lg mb-6">"{selectedFeedback.text}"</p>
        
        {/* Immagini utenti cliccabili */}
        <div className="flex justify-center md:justify-start gap-4">
          {feedbacks.map(user => (
            <div key={user.id} className="flex flex-col items-center cursor-pointer" onClick={() => setSelectedFeedback(user)}>
              <img 
                src={user.img} 
                alt={user.name} 
                className={`w-12 h-12 object-cover rounded-full border-2 transition-all duration-300 ${selectedFeedback.id === user.id ? 'border-blue-500' : 'border-transparent'}`}
              />
              <span className={`text-sm text-gray-700 mt-2 ${selectedFeedback.id === user.id ? 'inline' : 'hidden'}`}>{user.name}</span>
            </div>
          ))}
        </div>
      </div>
      </div>
      
    </section>
  );
};

export default Section5;
