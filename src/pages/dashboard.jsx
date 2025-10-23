import React, { useState, useEffect } from "react";
import "./pages.css";
import SingleRaffle from "./SingleRaffle";
import RaffleGrid from "../components/rafflegrid";
import Footer from "../components/footer";

function Dashboard() {
  const [raffles, setRaffles] = useState([]);
  const [selectedRaffle, setSelectedRaffle] = useState(null);

  useEffect(() => {
    const savedRaffles = JSON.parse(localStorage.getItem("raffles")) || [];

    if (savedRaffles.length === 0) {
      setRaffles([
        {
          id: "123",
          title: "Win a Luxury Watch",
          description:
            "This isn't just a watch — it's a statement. The Rolex Submariner Date is one of the most iconic luxury watches ever made.",
          image: "https://via.placeholder.com/600x400?text=Luxury+Watch",
          endDate: new Date(Date.now() + 5 * 60 * 60 * 1000).toISOString(),
          ticketPrice: 0.5,
          maxTickets: 500,
          ticketsSold: 125,
          userTickets: 0,
          raffleOwner: "@raffle_creator",
        },
      ]);
    } else {
      setRaffles(savedRaffles);
    }
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      const updated = JSON.parse(localStorage.getItem("raffles")) || [];
      setRaffles(updated);
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <>
      <div className="raffles-page">
        <div className="header">
          <button
            className="create-btn"
            onClick={() => (window.location.href = "UploadRaffle")}
          >
            + Create new raffle
          </button>
          <div>
            <h1>Active Raffles</h1>
            <p>Discover raffles created by the community</p>
          </div>
          <img src="src/assets/notification.png" alt="notifications" />
        </div>

        <div className="controls">
          <input placeholder="Search Raffles" className="search-input" />
          <div className="controls-filter">
            <button className="filter-btn">Filter</button>
            <button className="sort-btn">Sort by: Ending soon</button>
          </div>
        </div>

        {/* Pass raffles and selection handler */}
        <RaffleGrid
          raffles={raffles}
          onSelect={(raffle) =>
            setSelectedRaffle({
              ...raffle,
              endDate:
                raffle.endDate ||
                new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(),
            })
          }
        />

        {selectedRaffle && (
          <div className="expanded-section">
            <SingleRaffle
              raffle={selectedRaffle}
              onClose={() => setSelectedRaffle(null)}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default Dashboard;
