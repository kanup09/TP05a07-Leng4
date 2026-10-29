import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header className="header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div className="logo">
        <strong>logo</strong>
      </div>
      <nav>
        <Link to="/" style={{ margin: '0 10px' }}>Inicio</Link>
        <Link to="/proyectoBlob" style={{ margin: '0 10px' }}>proyectoBlob</Link>
        <Link to="/acerca" style={{ margin: '0 10px' }}>Acerca de nosotros</Link>
        <Link to="/contacto" style={{ margin: '0 10px' }}>Contacto</Link>
      </nav>
    </header>
  );
}