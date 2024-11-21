import React from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';

function Home() {
  return <h1>Página de inicio</h1>;
}

function Comienzo() {
  return <h1>Página de comienzo</h1>;
}

function About() {
  return <h1>Acerca de nosotros</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/about">Acerca de</Link>
        
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App