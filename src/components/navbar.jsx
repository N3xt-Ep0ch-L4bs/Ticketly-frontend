import { useState } from "react";
import { ConnectButton } from "@mysten/dapp-kit";
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

        {/* Desktop navigation */}
        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="/dashboard">Raffles</a>
          <a href="/faq">FAQ</a>
        </nav>

        {/* ✅ Official Sui dApp Kit Connect Button (desktop) */}
        <ConnectButton className="wallet-btn" />

        {/* Mobile menu toggle */}
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

      {/* Dark overlay when menu is open */}
      <div
        className={`overlay ${menuOpen ? "visible" : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Sidebar for mobile view */}
      <aside
        className={`sidebar-menu ${menuOpen ? "open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <button
          className="close-btn"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        >
          ✕
        </button>

        <nav className="sidebar-links">
          <a href="/" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          <a href="/dashboard" onClick={() => setMenuOpen(false)}>
            Raffles
          </a>
          <a href="/faq" onClick={() => setMenuOpen(false)}>
            FAQ
          </a>

          {/* ✅ Connect button for mobile */}
          <div className="mobile-wallet" onClick={() => setMenuOpen(false)}>
            <ConnectButton />
          </div>
        </nav>
      </aside>
    </>
  );
}

export default Navbar;
