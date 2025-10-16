import "./pages.css";
import SingleRaffle from "./SingleRaffle";
import RaffleGrid from '../components/rafflegrid';
import Footer from '../components/footer'


function Dashboard() {

    return (
        <>
    <div className="raffles-page">
      <div className="header">
        <button className="create-btn"onClick={() => window.location.href = "UploadRaffle"}>+ Create new raffle</button>
          <div>
          <h1>Active raffles</h1>
          <p>Discover raffles created by the community</p>
          </div>
        <img src="src/assets/notification.png" />
      </div>

      <div className="controls">
        <input placeholder="Search Raffles" className="search-input" />
        <button className="filter-btn">Filter</button>
        <button className="sort-btn">Sort by: Ending soon</button>
      </div> 
       <RaffleGrid onSelect={(raffle) => setSelectedRaffle(raffle)} />

    </div>
    <Footer />
        </>
    )
}

export default Dashboard