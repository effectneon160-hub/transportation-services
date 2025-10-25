import React from 'react';
import { Facebook, Instagram, Music, Mail, Phone, MapPin } from 'lucide-react';
export function Footer() {
  return <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-500">
              Contact Us
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-yellow-500" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-yellow-500" />
                <span>info@princesscocoatransport.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-yellow-500" />
                <span>123 Transport Ave, City, State 12345</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-500">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="hover:text-yellow-500 transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-yellow-500 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="/book" className="hover:text-yellow-500 transition">
                  Book a Ride
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-yellow-500 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-500">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center hover:bg-yellow-400 transition">
                <Facebook className="w-5 h-5 text-black" />
              </a>
              <a href="#" className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center hover:bg-yellow-400 transition">
                <Instagram className="w-5 h-5 text-black" />
              </a>
              <a href="#" className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center hover:bg-yellow-400 transition">
                <Music className="w-5 h-5 text-black" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2024 PrincessCocoa Transport. All rights reserved.</p>
        </div>
      </div>
    </footer>;
}