import RaffleCard from "./rafflecard";
import "../App.css";

const raffles = [
  {
    id: 1,
    title: "Luxury Watch",
    img: "/watch.jpg",
    price: "0.5 SUI",
    time: "14h 18m",
    participants: 109,
    status: "Enter Raffle",
  },
  {
    id: 2,
    title: "Gaming PC",
    img: "/pc.jpg",
    price: "1.5 SUI",
    time: "Expired",
    participants: 200,
    status: "Check winner",
  },
  {
    id: 3,
    title: "Luxury Watch",
    img: "/watch.jpg",
    price: "0.5 SUI",
    time: "10h 05m",
    participants: 98,
    status: "Enter Raffle",
  },
  {
    id: 4,
    title: "Gaming PC",
    img: "/pc.jpg",
    price: "1.5 SUI",
    time: "3h 42m",
    participants: 140,
    status: "Check winner",
  },
  {
    id: 5,
    title: "Luxury Watch",
    img: "/watch.jpg",
    price: "0.5 SUI",
    time: "7h 30m",
    participants: 89,
    status: "Enter Raffle",
  },
  {
    id: 6,
    title: "Gaming PC",
    img: "/pc.jpg",
    price: "1.5 SUI",
    time: "Expired",
    participants: 200,
    status: "Check winner",
  },
];

export default function RaffleGrid() {
  return (
    <div className="raffle-grid">
      {raffles.map((raffle) => (
        <RaffleCard key={raffle.id} raffle={raffle} />
      ))}
    </div>
  );
}
