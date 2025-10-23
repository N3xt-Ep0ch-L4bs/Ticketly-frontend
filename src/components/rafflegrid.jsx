import React from "react";
import { Link } from "react-router-dom";
import RaffleCard from "./rafflecard";
import "../App.css";

export default function RaffleGrid({ onSelect }) {
  const raffles = [
    {
      id: 1,
      title: "Luxury Watch",
      img: "src/assets/watch.png",
      price: "0.5 SUI",
      time: "14h 18m",
      participants: 109,
      status: "Enter Raffle",
      endDate: new Date(Date.now() + 14 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: 2,
      title: "Gaming PC",
      img: "src/assets/computer.png",
      price: "1.5 SUI",
      time: "Expired",
      participants: 200,
      status: "Check winner",
      endDate: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: 3,
      title: "Luxury Watch",
      img: "src/assets/watch.png",
      price: "0.5 SUI",
      time: "10h 05m",
      participants: 98,
      status: "Enter Raffle",
      endDate: new Date(Date.now() + 10 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: 4,
      title: "Gaming PC",
      img: "src/assets/computer.png",
      price: "1.5 SUI",
      time: "3h 42m",
      participants: 140,
      status: "Check winner",
      endDate: new Date(Date.now() + 3 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: 5,
      title: "Luxury Watch",
      img: "src/assets/watch.png",
      price: "0.5 SUI",
      time: "7h 30m",
      participants: 89,
      status: "Enter Raffle",
      endDate: new Date(Date.now() + 7.5 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: 6,
      title: "Gaming PC",
      img: "src/assets/computer.png",
      price: "1.5 SUI",
      time: "Expired",
      participants: 200,
      status: "Check winner",
      endDate: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    },
  ];

  return (
    <div className="raffle-grid">
      {raffles.map((raffle) => (
        <div
          key={raffle.id}
          onClick={() => onSelect && onSelect(raffle)}
          className="raffle-card-link"
        >
          <Link
            to={`/raffle/${raffle.id}`}
            state={{ raffle }}
            className="raffle-card-inner-link"
          >
            <RaffleCard raffle={raffle} />
          </Link>
        </div>
      ))}
    </div>
  );
}
