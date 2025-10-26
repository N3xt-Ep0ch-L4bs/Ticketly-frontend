import { useState } from "react";
import "../App.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="navbar">
        <div className="logo-box">
          <img src="src/assets/logo.png" alt="logo" />
          <p>Ticketly</p>
        </div>

        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="/dashboard">Raffles</a>
          <a href="/faq">FAQ</a>
        </nav>
        <button className="wallet-btn">Connect Wallet</button>

{!menuOpen && (
  <button
    className="menu-toggle"
    aria-label="Open menu"
    onClick={() => setMenuOpen(true)}
  >
    ☰
  </button>
)}

      </header>

      <div
        className={`overlay ${menuOpen ? "visible" : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      <aside className={`sidebar-menu ${menuOpen ? "open" : ""}`} aria-hidden={!menuOpen}>
        <button
          className="close-btn"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        >
          ✕
        </button>

        <nav className="sidebar-links">
          <a href="/" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="/dashboard" onClick={() => setMenuOpen(false)}>Raffles</a>
          <a href="/faq" onClick={() => setMenuOpen(false)}>FAQ</a>

          <button
            className="mobile-wallet"
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            Connect Wallet
          </button>
        </nav>
      </aside>
    </>
  );
}

export default Navbar;
