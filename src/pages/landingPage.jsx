import { Link } from "react-router-dom";
import './pages.css'
import '../app.css'
import Footer from '../components/footer'

function LandingPage() {
    return (
        <>
        <section className="hero">
      <h2>
        <span>Your</span>
        <span> Chance</span>
        <span> to Win,</span>
        <br/><span className="highlight">On Chain.</span></h2>
      <p>Enter raffles, buy tickets, and win exciting prizes<br/>securely powered by Sui blockchain.</p>
      <Link to="/dashboard">
        <button className="cta-btn">View Raffles</button>
      </Link>
    </section>
    <section className="why">
      <h2>Why Ticketly?</h2>
      <p>Discover the advantages of our next generation raffle platform</p>
      <div className="why-cards">
        <div className="card">
          <img src="src/assets/Frame6.png"/>
          <h4>Secure & Transparent</h4>
          <p>Built on Sui, all entries and drawings are on-chain, providing ultimate fairness, and audibilty</p>
        </div>
        <div className="card">
          <img src="src/assets/Frame7.png"/>
          <h4>Easy Participation</h4>
          <p>Connect your wallet, browse raffles, and enter with a few simple clicks, it's that easy.</p>
        </div>
        <div className="card">
          <img src="src/assets/Frame8.png"/>
          <h4>Community Owned</h4>
          <p>A portion of less contributes to a community treasury, governed by stakeholders.</p>
        </div>
      </div>
    </section>
    <section className="steps">
      <h2>Simple steps to win</h2>
      <p>Your next next big win is just three steps away</p>
      <div className="steps-grid">
        <div className="1">
          <h4>Browse Raffles</h4>
          <p>Explore a diverse range of active raffles for exclusive digital assets and prizes</p>
        </div>
        <div className="2">
          <h4>Buy Tickets</h4>
          <p>Securely purchase your tickets. The more you buy, the higher your chances to win.</p>
        </div>
        <div className="3">
          <h4>Win Prizes</h4>
          <p>Winnners are chosen by a decentralized, on-chain random number generator. Prizes are sent automatically.</p>
        </div>
      </div>
    </section>
    <section className="cta">
      <h2>Ready to try your luck?</h2>
      <p>The next winner could be you. Dive into the world of decentralzed raffles and explore our active listings.</p>
      <Link to="/dashboard">
        <button className="cta-btn">Explore Raffles Now</button></Link>
    </section>
        </>
    )
}

export default LandingPage;