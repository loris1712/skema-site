"use client"
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import "@fontsource/epilogue"; // Import Epilogue font

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`flex items-center justify-between md:px-24 px-6 py-6 bg-white shadow-md font-['Epilogue'] transition-all duration-300 ${
        isScrolled ? 'sticky top-0 left-0 w-full z-50' : ''
      }`}
    >
      {/* Logo */}
      <div className="flex items-center space-x-6">
        <a href="/">
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="Blink Logo" className="w-8 h-8" />
            <span className="text-2xl font-black text-black">Blink</span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="/" className="text-black font-medium hover:text-[#387FF7]">Home</a>
          <a href="#faq" className="text-black font-medium hover:text-[#387FF7]">FAQ</a>
          <a href="#features" className="text-black font-medium hover:text-[#387FF7]">Features</a>
        </div>
      </div>

      {/* Call to Action */}
      <div className="hidden md:block">
        <button className="px-8 py-4 text-white bg-black rounded-md hover:bg-[#387FF7]">Download</button>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button onClick={toggleMobileMenu} className="text-black">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden" style={{zIndex: 2}}>
          <div className="flex flex-col items-center space-y-4 py-4">
            <a href="#" className="text-black font-medium hover:text-blue-600">Home</a>
            <a href="#" className="text-black font-medium hover:text-blue-600">About Us</a>
            <a href="#" className="text-black font-medium hover:text-blue-600">Pricing</a>
            <a href="#" className="text-black font-medium hover:text-blue-600">Features</a>
            <button className="px-6 py-3 text-white bg-black rounded-lg hover:bg-gray-800">Download</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;