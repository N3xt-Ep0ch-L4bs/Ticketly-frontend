import React from "react";
import { Link } from "react-router-dom";
import RaffleCard from "./rafflecard";
import "../App.css";

export default function RaffleGrid() {
  const raffles = [
    {
    id: 1,
    title: "Luxury Watch",
    img: "src/assets/watch.png",
    price: "0.5 SUI",
    time: "14h 18m",
    participants: 109,
    status: "Enter Raffle",
  },
  {
    id: 2,
    title: "Gaming PC",
    img: "src/assets/computer.png",
    price: "1.5 SUI",
    time: "Expired",
    participants: 200,
    status: "Check winner",
  },
  {
    id: 3,
    title: "Luxury Watch",
    img: "src/assets/watch.png",
    price: "0.5 SUI",
    time: "10h 05m",
    participants: 98,
    status: "Enter Raffle",
  },
  {
    id: 4,
    title: "Gaming PC",
    img: "src/assets/computer.png",
    price: "1.5 SUI",
    time: "3h 42m",
    participants: 140,
    status: "Check winner",
  },
  {
    id: 5,
    title: "Luxury Watch",
    img: "src/assets/watch.png",
    price: "0.5 SUI",
    time: "7h 30m",
    participants: 89,
    status: "Enter Raffle",
  },
  {
    id: 6,
    title: "Gaming PC",
    img: "src/assets/computer.png",
    price: "1.5 SUI",
    time: "Expired",
    participants: 200,
    status: "Check winner",
  },
  {
    id: 7,
    title: "Luxury Watch",
    img: "src/assets/watch.png",
    price: "2.5 SUI",
    time: "Expired",
    participants: 100,
    status: "Check winner",
  },
  {
    id: 8,
    title: "Gaming PC",
    img: "src/assets/computer.png",
    price: "3.5 SUI",
    time: "4h 25min",
    participants: 150,
    status: "Enter Raffle",
  },
  ];

  return (
    <div className="raffle-grid">
      {raffles.map((raffle) => (
        <Link
          key={raffle.id}
          to={`/raffle/${raffle.id}`}
          state={{ raffle }} // ✅ passes data to the next page
          className="raffle-card-link"
        >
          <RaffleCard raffle={raffle} />
        </Link>
      ))}
    </div>
  );
}






 