import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Car } from 'lucide-react';
export function Header() {
  const location = useLocation();
  return <header className="bg-black text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Car className="w-8 h-8 text-yellow-500" />
            <span className="text-2xl font-bold">
              S<span className="text-yellow-500">M</span> Transport
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`hover:text-yellow-500 transition ${location.pathname === '/' ? 'text-yellow-500' : ''}`}>
              Home
            </Link>
            <a href="#services" className="hover:text-yellow-500 transition">
              Services
            </a>
            <a href="#about" className="hover:text-yellow-500 transition">
              About
            </a>
            <a href="#contact" className="hover:text-yellow-500 transition">
              Contact
            </a>
          </nav>
          <Link to="/book" className="bg-yellow-500 text-black px-6 py-2 rounded-full font-bold hover:bg-yellow-400 transition shadow-lg">
            Book Now
          </Link>
        </div>
      </div>
    </header>;
}