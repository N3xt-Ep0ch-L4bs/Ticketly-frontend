import '../App.css'

function Navbar() {

    return (
        <>
        <div className="navbar">
      <div className="logo-box">
      <img src="src/assets/logo.png" alt="logo" />
      <p>Ticketly</p>
      </div>
      <nav className="nav-links">
        <a href="">Home</a>
        <a href="">Raffles</a>
        <a href="">FAQ</a>
      </nav>
      <button className="wallet-btn">Connect Wallet</button>
    </div>
        </>
    )
}

export default Navbar