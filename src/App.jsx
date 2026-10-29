import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header.jsx'; 
import MainContent from './components/MainContent.jsx'; // Esta es la línea que faltaba agregar
import Footer from './components/Footer.jsx';

import Inicio from './components/Inicio.jsx';
import Acerca from './components/Acerca.jsx';
import Contacto from './components/Contacto.jsx';

export default function App() {
  return (
    <Router>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", margin: 0, fontFamily: "Inter, sans-serif" }}>
        <Header />
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/proyectoBlob" element={<MainContent />} />
            <Route path="/acerca" element={<Acerca />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}