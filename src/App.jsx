import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import MissionVision from './pages/MissionVision';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


function App() {
  return (
    <>
      <div className='App'>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/mission-vision" element={<MissionVision />}/>
            <Route path="/gallery" element={<Gallery />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/contact" element={<Contact />}/>
            {/* 404 Route - catches all undefined routes */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </>
  );
}



export default App
