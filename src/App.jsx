import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './pages/landingPage';
import Dashboard from "./pages/dashboard"
import SingleRaffle from "./pages/SingleRaffle";
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
        <Route path="/uploadraffle" element={<UploadRaffle />} />
        <Route path="/raffle/:id" element={<SingleRaffle />} />
      </Routes>
    </div>
  )
}

export default App
