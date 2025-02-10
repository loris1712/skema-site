// pages/index.js
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Section1 from '../components/Section1';
import Section2 from '../components/Section2';
import Section3 from '../components/Section3';
import Section4 from '../components/Section4';
import Section5 from '../components/Section5';
import Section6 from '../components/Section6';
import Section7 from '../components/Section7';
import "@fontsource/epilogue"; // Import Epilogue font

export default function Home() {
  return (
    <div className="font-['Epilogue']">
      <Navbar />

      <div className="flex items-center space-x-2" style={{ position: 'absolute', top: '10%', right: '2%'}}>
        <img src="/star.png" alt="Star" className="w-10 h-10" />
      </div>

      <div className="flex items-center space-x-2" style={{ position: 'absolute', top: '20%', left: '2%'}}>
        <img src="/star.png" alt="Star" className="w-10 h-10" style={{ transform: 'rotate(45deg)' }} />
      </div>

      <Section1 />

      <Section2 />

      <Section3 />

      <Section4 />

      <Section5 />

      <Section6 />

      <Section7 />
      
      <Footer />
    </div>
  );
}
