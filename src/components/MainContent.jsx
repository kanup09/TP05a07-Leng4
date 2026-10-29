import React, { useState } from 'react';
import './MainContent.css';

export default function MainContent() {
  const [contenido, setContenido] = useState("Hola, este es el texto inicial del archivo.");

  // 1. Crear Blob
  const handleCrearBlob = () => {
    const blob = new Blob([contenido], { type: "text/plain;charset=utf-8" });
    console.log("Blob creado:", blob);
    alert("¡Blob creado con exito!");
  };

  // 2. Descargar Fichero
  const handleDescargar = () => {
    const blob = new Blob([contenido], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement("a");
    a.href = url;
    a.download = "archivo.txt";
    a.click();
    
    URL.revokeObjectURL(url);
  };

  // 3. Usar Slice
  const handleSlice = () => {
    const textoRecortado = contenido.slice(0, 15);
    setContenido(textoRecortado);
    alert(`Se aplicó slice. Nuevo contenido: "${textoRecortado}"`);
  };

  return (
    <main className="main-content">
      <h1>Ejemplo de uso de Blobs</h1>

      <div className="button-group">
        <button onClick={handleCrearBlob} className="btn">
          Crear Blob
        </button>
        <button onClick={handleDescargar} className="btn">
          Descargar Fichero
        </button>
        <button onClick={handleSlice} className="btn">
          Usar Slice
        </button>
      </div>

      <p className="texto-actual">
        <strong>Texto actual:</strong> {contenido}
      </p>
    </main>
  );
}