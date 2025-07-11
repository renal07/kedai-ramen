import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Auth from './pages/Auth';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Contact from './pages/Contact';

// Fungsi pengecekan login
const isLoggedIn = () => {
  return localStorage.getItem("user") !== null;
};

// Komponen pembungkus untuk halaman yang perlu login
const ProtectedRoute = ({ element }) => {
  return isLoggedIn() ? element : <Navigate to="/login" replace />;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default redirect ke /login */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        
        {/* Login page */}
        <Route path="/login" element={<Auth />} />

        {/* Rute yang dilindungi */}
        <Route path="/home" element={<ProtectedRoute element={<Home />} />} />
        <Route path="/about" element={<ProtectedRoute element={<About />} />} />
        <Route path="/product" element={<ProtectedRoute element={<Product />} />} />
        <Route path="/contact" element={<ProtectedRoute element={<Contact />} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
