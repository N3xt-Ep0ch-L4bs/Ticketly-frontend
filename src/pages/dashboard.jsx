import "./pages.css";
import RaffleGrid from '../components/rafflegrid';


function Dashboard() {

    return (
        <>
    <div className="raffles-page">
      
      <div className="header">
        <button className="create-btn"onClick={() => window.location.href = "UploadRaffle"}>+ Create new raffle</button>
        <h1>Active raffles</h1>
        <p>Discover raffles created by the community</p>
        <img src="src/assets/notification.png" />
      </div>

      <div className="controls">
        <input placeholder="Search Raffles" className="search-input" />
        <button className="filter-btn">Filter</button>
        <button className="sort-btn">Sort by: Ending soon</button>
      </div> 
       <RaffleGrid />
    </div>

        </>
    )
}

export default Dashboard