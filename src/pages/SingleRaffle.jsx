import { createContext, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import "./pages.css";
import "./UploadRaffle"
import Footer from "../components/footer";

function SingleRaffle() {
  const { id } = useParams();

  return (
    <>
      <div className="single-raffle-page">
        <div className="info-card">
         <div className="raffle-info">
             <p>Raffle by @Ay_bami</p>
             <h3>Win a luxury Watch</h3>
             <CountdownDisplay />
         </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SingleRaffle;
