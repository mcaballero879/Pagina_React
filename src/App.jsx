import React from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import LoginAPP from './assets/components/Login';
import Header from './assets/Header';
import Footer from './assets/Footer';
import Principal from './Principal';
import PokeAPI from './assets/components/PokeAPI';

function Home() {
  return <h1>Página de inicio</h1>;
}

function About() {
  return <h1>Acerca de nosotros</h1>;
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<LoginAPP/>} ></Route>
          <Route path='/PokeAPI' element={<PokeAPI/>} ></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    
    </>
   
  )
}



export default App