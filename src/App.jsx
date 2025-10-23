import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast"; // ✅ add this
import LandingPage from './pages/landingPage';
import Dashboard from "./pages/dashboard";
import SingleRaffle from "./pages/SingleRaffle";
import Navbar from './components/navbar';
import Footer from './components/footer';
import UploadRaffle from "./pages/UploadRaffle";
import WinnerPage from "./components/winnerPage"; // ✅ add winner page route
import LoserPage from "./components/loserPage";   // ✅ add loser page route
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/uploadraffle" element={<UploadRaffle />} />
        <Route path="/raffle/:id" element={<SingleRaffle />} />
        <Route path="/winner" element={<WinnerPage />} /> {/* ✅ winner route */}
        <Route path="/loser" element={<LoserPage />} />   {/* ✅ loser route */}
      </Routes>

      <Footer />
      <Toaster position="top-right" reverseOrder={false} /> {/* ✅ add toaster */}
    </div>
  );
}

export default App;
