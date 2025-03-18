import React from 'react';

const faq = [
  { question: "How do I create an account on Blink?", answer: "To create an account on Blink, you can sign up using your email or phone number. After entering your information, you’ll need to complete an identity verification process." },
  { question: "Is Blink safe?", answer: "Yes, Blink is designed with security as a top priority. We use a three-tier verification system, which includes phone number authentication, facial recognition, and age verification through an ID check." },
  { question: "How does the timed matching system work?", answer: "Each interaction begins with a 30-45 second video chat. At the end of the chat, you have three options: “Wink” (shows strong interest), “Link” (standard match), or “Blink” (reject the match). " },
  { question: "Can I use Blink just to make new friends, not to find romantic partners?", answer: "Yes! Blink also offers a mode called Blink For Friends, which allows you to connect with people without the pressure of dating." },
  { question: "What does “Wink” mean, and how can I use it?", answer: "Wink is a premium gesture that shows strong interest in another user. Every user gets one free Wink every five days, but you can purchase additional Winks or subscribe to a premium version to get more." },
  { question: "What are the premium subscription options, and what do they offer?", answer: "Blink offers several premium subscription options: Blink Premium and Blink Max. With a Premium subscription, you can enjoy benefits like more Winks, extended video chats, and access to exclusive features." }
];

const Section6 = () => {
  return (
    <section className="bg-white p-8 md:px-24 relative" id="faq">
      <p className="text-sm uppercase tracking-wider text-blue-500 font-semibold text-left">FAQ</p>
      <h2 className="text-3xl font-bold text-black mb-8 text-left capitalize">Frequently asked questions</h2>

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
