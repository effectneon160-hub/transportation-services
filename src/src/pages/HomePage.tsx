import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ServiceCard } from '../components/ServiceCard';
import { Plane, Car, Briefcase, Clock, Shield, Star } from 'lucide-react';
export function HomePage() {
  return <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-black to-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1600&h=900&fit=crop" alt="Luxury Black Minivan" className="w-full h-full object-cover" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Reliable, Comfortable, and{' '}
              <span className="text-yellow-500">On-Time</span> Transportation
              Services
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Experience premium transportation with our fleet of luxury
              vehicles and professional drivers.
            </p>
            <Link to="/book" className="inline-block bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transition shadow-lg">
              Book Your Ride Now
            </Link>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">
              Premium transportation solutions for every need
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard icon={Plane} title="Airport Transfers" description="Reliable and punctual airport pickup and drop-off services. Never miss a flight with our on-time guarantee." />
            <ServiceCard icon={Car} title="Private Rides" description="Comfortable private transportation for personal trips, events, or special occasions with luxury vehicles." />
            <ServiceCard icon={Briefcase} title="Corporate Travel" description="Professional transportation solutions for business meetings, conferences, and corporate events." />
          </div>
        </div>
      </section>
      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600">Excellence in every journey</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-2">Always On Time</h3>
              <p className="text-gray-600">
                Punctuality guaranteed for every ride
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-2">Safe & Secure</h3>
              <p className="text-gray-600">
                Professional drivers and insured vehicles
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-2">Premium Quality</h3>
              <p className="text-gray-600">
                Luxury vehicles and exceptional service
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              About{' '}
              <span className="text-yellow-500">SM Transport</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We are a premium transportation service dedicated to providing
              reliable, comfortable, and professional rides. With our fleet of
              luxury vehicles and experienced drivers, we ensure every journey
              is smooth and stress-free.
            </p>
            <p className="text-lg text-gray-400">
              Whether you need an airport transfer, private ride, or corporate
              transportation, we're here to serve you 24/7 with excellence and
              punctuality.
            </p>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-500 to-yellow-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-black mb-6">
            Ready to Book Your Next Ride?
          </h2>
          <p className="text-xl text-black mb-8">
            Experience premium transportation today
          </p>
          <Link to="/book" className="inline-block bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-900 transition shadow-lg">
            Book Now
          </Link>
        </div>
      </section>
      <Footer />
    </div>;
}