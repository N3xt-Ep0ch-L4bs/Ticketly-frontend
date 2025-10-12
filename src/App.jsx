import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import LandingPage from './pages/landingPage';
import Dashboard from "./pages/dashboard"
import Navbar from './components/navbar';
import Footer from './components/footer';
import UploadRaffle from "./pages/UploadRaffle";
import './App.css'

function App() {

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/UploadRaffle" element={<UploadRaffle />} /> 
      </Routes>
      <Footer />
    </div>
  )
}

export default App
