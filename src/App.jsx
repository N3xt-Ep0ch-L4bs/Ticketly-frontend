import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import LandingPage from './pages/landingPage';
import Navbar from './components/navbar';
import './App.css'

function App() {

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  )
}

export default App
