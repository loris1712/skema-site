// pages/index.js
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Signup from '../../components/Signup2';
import "@fontsource/epilogue"; 

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

      <Signup />

      <Footer />
    </div>
  );
}
