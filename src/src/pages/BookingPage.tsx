import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Calendar, MapPin, Clock, User, Mail, Phone, MessageSquare, CreditCard, CheckCircle } from 'lucide-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
type BookingStep = 'form' | 'payment' | 'confirmation';
interface BookingData {
  fullName: string;
  email: string;
  phone: string;
  pickupLocation: string;
  dropoffLocation: string;
  date: Date | null;
  time: string;
  specialInstructions: string;
}
export function BookingPage() {
  const [step, setStep] = useState<BookingStep>('form');
  const [bookingData, setBookingData] = useState<BookingData>({
    fullName: '',
    email: '',
    phone: '',
    pickupLocation: '',
    dropoffLocation: '',
    date: null,
    time: '',
    specialInstructions: ''
  });
  const [bookingId] = useState(`PCT-${Math.random().toString(36).substr(2, 9).toUpperCase()}`);
  const handleInputChange = (field: keyof BookingData, value: string | Date | null) => {
    setBookingData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
  };
  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('confirmation');
  };
  return <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-4">
              <div className={`flex items-center ${step === 'form' ? 'text-yellow-500' : 'text-gray-400'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step === 'form' ? 'bg-yellow-500 text-black' : 'bg-gray-300'} font-bold`}>
                  1
                </div>
                <span className="ml-2 font-semibold">Booking Details</span>
              </div>
              <div className="w-16 h-1 bg-gray-300"></div>
              <div className={`flex items-center ${step === 'payment' ? 'text-yellow-500' : 'text-gray-400'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step === 'payment' ? 'bg-yellow-500 text-black' : 'bg-gray-300'} font-bold`}>
                  2
                </div>
                <span className="ml-2 font-semibold">Payment</span>
              </div>
              <div className="w-16 h-1 bg-gray-300"></div>
              <div className={`flex items-center ${step === 'confirmation' ? 'text-yellow-500' : 'text-gray-400'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step === 'confirmation' ? 'bg-yellow-500 text-black' : 'bg-gray-300'} font-bold`}>
                  3
                </div>
                <span className="ml-2 font-semibold">Confirmation</span>
              </div>
            </div>
          </div>
          {/* Booking Form */}
          {step === 'form' && <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6">Book Your Ride</h2>
              <form onSubmit={handleSubmitBooking} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input type="text" required value={bookingData.fullName} onChange={e => handleInputChange('fullName', e.target.value)} className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-yellow-500 focus:outline-none" placeholder="John Doe" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Email *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input type="email" required value={bookingData.email} onChange={e => handleInputChange('email', e.target.value)} className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-yellow-500 focus:outline-none" placeholder="john@example.com" />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input type="tel" required value={bookingData.phone} onChange={e => handleInputChange('phone', e.target.value)} className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-yellow-500 focus:outline-none" placeholder="(555) 123-4567" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Pickup Location *
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input type="text" required value={bookingData.pickupLocation} onChange={e => handleInputChange('pickupLocation', e.target.value)} className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-yellow-500 focus:outline-none" placeholder="123 Main St, City, State" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Drop-off Location *
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input type="text" required value={bookingData.dropoffLocation} onChange={e => handleInputChange('dropoffLocation', e.target.value)} className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-yellow-500 focus:outline-none" placeholder="456 Airport Rd, City, State" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Date *
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400 z-10 pointer-events-none" />
                      <DatePicker selected={bookingData.date} onChange={date => handleInputChange('date', date)} minDate={new Date()} dateFormat="MM/dd/yyyy" required className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-yellow-500 focus:outline-none" placeholderText="Select date" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Time *
                    </label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input type="time" required value={bookingData.time} onChange={e => handleInputChange('time', e.target.value)} className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-yellow-500 focus:outline-none" />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Special Instructions (Optional)
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <textarea value={bookingData.specialInstructions} onChange={e => handleInputChange('specialInstructions', e.target.value)} className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-yellow-500 focus:outline-none" rows={4} placeholder="Any special requests or instructions..." />
                  </div>
                </div>
                <button type="submit" className="w-full bg-yellow-500 text-black py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition shadow-lg">
                  Continue to Payment
                </button>
              </form>
            </div>}
          {/* Payment Section */}
          {step === 'payment' && <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6">Payment Details</h2>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="font-bold text-lg mb-4">Booking Summary</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">From:</span>
                    <span className="font-semibold">
                      {bookingData.pickupLocation}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">To:</span>
                    <span className="font-semibold">
                      {bookingData.dropoffLocation}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Date & Time:</span>
                    <span className="font-semibold">
                      {bookingData.date?.toLocaleDateString()} at{' '}
                      {bookingData.time}
                    </span>
                  </div>
                  <div className="border-t pt-2 mt-2 flex justify-between text-lg">
                    <span className="font-bold">Total Amount:</span>
                    <span className="font-bold text-yellow-600">$85.00</span>
                  </div>
                </div>
              </div>
              <form onSubmit={handlePayment} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Card Number *
                  </label>
                  <div className="relative">
                    <CreditCard className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input type="text" required placeholder="1234 5678 9012 3456" className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-yellow-500 focus:outline-none" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Expiry Date *
                    </label>
                    <input type="text" required placeholder="MM/YY" className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-yellow-500 focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      CVV *
                    </label>
                    <input type="text" required placeholder="123" className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-yellow-500 focus:outline-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Cardholder Name *
                  </label>
                  <input type="text" required placeholder="John Doe" className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-yellow-500 focus:outline-none" />
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" required className="w-4 h-4" />
                  <label className="text-sm text-gray-600">
                    I agree to the terms and conditions
                  </label>
                </div>
                <div className="flex space-x-4">
                  <button type="button" onClick={() => setStep('form')} className="flex-1 bg-gray-200 text-black py-4 rounded-lg font-bold text-lg hover:bg-gray-300 transition">
                    Back
                  </button>
                  <button type="submit" className="flex-1 bg-yellow-500 text-black py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition shadow-lg">
                    Confirm Payment
                  </button>
                </div>
              </form>
            </div>}
          {/* Confirmation Section */}
          {step === 'confirmation' && <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-green-600">
                Booking Confirmed!
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Thank you for choosing PrincessCocoa Transport
              </p>
              <div className="bg-yellow-50 border-2 border-yellow-500 rounded-lg p-6 mb-6">
                <p className="text-sm text-gray-600 mb-2">Your Booking ID</p>
                <p className="text-2xl font-bold text-yellow-600">
                  {bookingId}
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg mb-6 text-left">
                <h3 className="font-bold text-lg mb-4">Booking Details</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Name:</span>
                    <span className="font-semibold">
                      {bookingData.fullName}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Email:</span>
                    <span className="font-semibold">{bookingData.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Phone:</span>
                    <span className="font-semibold">{bookingData.phone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Pickup:</span>
                    <span className="font-semibold">
                      {bookingData.pickupLocation}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Drop-off:</span>
                    <span className="font-semibold">
                      {bookingData.dropoffLocation}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Date & Time:</span>
                    <span className="font-semibold">
                      {bookingData.date?.toLocaleDateString()} at{' '}
                      {bookingData.time}
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 text-left">
                <p className="text-sm text-blue-800">
                  <strong>Confirmation sent!</strong> A confirmation email and
                  SMS have been sent to {bookingData.email} and{' '}
                  {bookingData.phone}.
                </p>
              </div>
              <button onClick={() => window.location.href = '/'} className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition shadow-lg">
                Return to Home
              </button>
            </div>}
        </div>
      </div>
      <Footer />
    </div>;
}