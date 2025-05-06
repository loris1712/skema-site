import React from 'react';

const faq = [
  {
    question: "Come funziona la trascrizione audio su Skema?",
    answer: "Carichi la registrazione (in formato audio o video), e in pochi secondi ottieni il testo trascritto, diviso in paragrafi chiari e pronti per essere studiati."
  },
  {
    question: "Posso caricare qualsiasi tipo di documento?",
    answer: "Sì! Skema supporta PDF, file Word (.doc e .docx) e anche immagini con testo. Basta un click per trasformarli in riassunti ordinati."
  },
  {
    question: "I testi sono modificabili?",
    answer: "Certo. Una volta generato il contenuto, puoi copiarlo, modificarlo o salvarlo dove preferisci. È tutto tuo."
  },
  {
    question: "Skema è adatto anche per chi ha poco tempo per studiare?",
    answer: "Assolutamente sì. L'obiettivo di Skema è farti risparmiare tempo: riassume, organizza e rende più facile il ripasso."
  },
  {
    question: "Serve installare qualcosa per usarlo?",
    answer: "App mobile su iOS e Android."
  },
  {
    question: "Quanto costa usare Skema?",
    answer: "Skema offre sia un piano gratuito con funzionalità base che piani premium per chi vuole di più. Scegli quello che fa per te, senza vincoli."
  }
];


const Section6 = () => {
  return (
    <section className="bg-white p-8 md:px-24 relative" id="faq">
      <p className="text-sm uppercase tracking-wider text-blue-500 font-semibold text-left">FAQ</p>
      <h2 className="text-3xl font-bold text-black mb-8 text-left capitalize">Domande Frequenti</h2>

      <div className="flex items-center space-x-2" style={{ position: 'absolute', top: '0%', right: '20%'}}>
        <img src="/star.png" alt="Star" className="w-10 h-10" style={{ transform: 'rotate(45deg)' }} />
      </div>

      <div className="flex items-center space-x-2" style={{ position: 'absolute', bottom: '0%', right: '20%'}}>
        <img src="/star.png" alt="Star" className="w-10 h-10" style={{ transform: 'rotate(45deg)' }} />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {faq.map((item, index) => (
          <div key={index} className={`p-6 rounded-lg ${[0, 3, 4].includes(index) ? 'bg-[#387FF7] text-white' : 'bg-transparent text-black'}`}>
            <h3 className="font-semibold text-lg mb-2">{item.question}</h3>
            <p className="text-md">{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section6;
