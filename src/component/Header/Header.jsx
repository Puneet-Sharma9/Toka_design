import React from 'react'
import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export const Header = () => {
  return (
  <header>
  <nav
    className="navbar navbar-expand-lg fixed-top"
    style={{ zIndex: 2, backgroundColor: "black" }}
  >
    <div className="container">
      <h5 className="logo">
        <a className="navbar-brand text-light" href="#">
          Toka
        </a>
      </h5>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon btn btn-light" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item dropdown">
            <a
              className="nav-link text-light"
              href="#"
              id="navbarDropdownNFT"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span className="nav_col">NFT</span>
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownNFT">
              <a className="dropdown-item" href="#">
                NFT Landing Page
              </a>
              <a className="dropdown-item" href="#">
                NFT Collection Landing
              </a>
              <a className="dropdown-item" href="#">
                NFT Platform
              </a>
              <a className="dropdown-item" href="#">
                NFT Marketplace
              </a>
              <a className="dropdown-item" href="#">
                NFT Game{" "}
              </a>
              <a className="dropdown-item" href="#">
                NFT DAO Platform
              </a>
              <a className="dropdown-item" href="#">
                NFT Website{" "}
              </a>
              <a className="dropdown-item" href="#">
                Metaverse Website
              </a>
            </div>
          </li>
          <li className="nav-item dropdown ">
            <a
              className="nav-link text-light text-decoration-none"
              href="#"
              id="navbarDropdownCrypto"
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="nav_col">Crypto</span>
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownCrypto"
            >
              <a className="dropdown-item" href="#">
                Crypto Trading
              </a>
              <a className="dropdown-item" href="#">
                Blockchain Services
              </a>
              <a className="dropdown-item" href="#">
                Crypto Cards
              </a>
              <a className="dropdown-item" href="#">
                ICO Landing
              </a>
              <a className="dropdown-item" href="#">
                Crypto Startup
              </a>
              <a className="dropdown-item" href="#">
                Payments with Crypto
              </a>
              <a className="dropdown-item" href="#">
                Crypto Trading App
              </a>
              <a className="dropdown-item" href="#">
                DeFi Hardware Wallets
              </a>
              <a className="dropdown-item" href="#">
                Crypto Hardware Wallets
              </a>
              <a className="dropdown-item" href="#">
                Crypto Wallet App
              </a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link text-light text-decoration-none"
              href="#"
              id="navbarDropdownAbout"
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="nav_col">About Us</span>{" "}
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownAbout"
            >
              <a className="dropdown-item" href="#">
                About Us
              </a>
              <a className="dropdown-item" href="#">
                About Us Dark
              </a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link text-light text-decoration-none"
              href="#"
              id="navbarDropdownTeam"
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="nav_col">Our Team</span>
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownTeam">
              <a className="dropdown-item" href="#">
                Our Team
              </a>
              <a className="dropdown-item" href="#">
                Our Team Dark
              </a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link text-light text-decoration-none"
              href="#"
              id="navbarDropdownContact"
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="nav_col">Contact Us</span>
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownContact"
            >
              <a className="dropdown-item" href="#">
                Contact Us
              </a>
              <a className="dropdown-item" href="#">
                Contact Us Dark
              </a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link text-light text-decoration-none"
              href="#"
              id="navbarDropdownShop"
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="nav_col">Online Shop</span>
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownShop">
              <a className="dropdown-item" href="#">
                Shop
              </a>
              <a className="dropdown-item" href="#">
                My Account
              </a>
              <a className="dropdown-item" href="#">
                Cart
              </a>
              <a className="dropdown-item" href="#">
                Checkout
              </a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link text-light text-decoration-none"
              href="#"
              id="navbarDropdownBlog"
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="nav_col">Blog</span>
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownBlog">
              <a className="dropdown-item" href="#">
                Blog 1 column
              </a>
              <a className="dropdown-item" href="#">
                Blog 1 column with slidebar
              </a>
              <a className="dropdown-item" href="#">
                Blog 2 column
              </a>
              <a className="dropdown-item" href="#">
                Blog 2 column with slidebar
              </a>
              <a className="dropdown-item" href="#">
                Blog 3 column
              </a>
            </div>
          </li>
          <li>
            <button className="button_menu">Buy now</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>   
  );
}

export default Header