import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { BookingPage } from './pages/BookingPage';
export function App({
  'data-id': dataId
}: {
  'data-id'?: string;
}) {
  return <div data-id={dataId} className="min-h-screen bg-white">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/book" element={<BookingPage />} />
        </Routes>
      </Router>
    </div>;
}