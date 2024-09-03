import React, { useState } from 'react';
import { Link } from 'react-router-dom';
/* import "./Navbar.css"; */
import styled from 'styled-components';
import logoImg from "../../images/logo.png";
import { HiOutlineMenuAlt3 } from "react-icons/hi";


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);

  return (
    <nav className='navbar' id="navbar">
      <div className='container navbar-content flex'>
        <div className='brand-and-toggler flex flex-sb'>
          <Link to="/" className='navbar-brand flex'>
            <img src={logoImg} alt="site logo" />
            <span className='text-uppercase fw-7 fs-24 ls-1'>BooksClub</span>
          </Link>
          <button type="button" className='navbar-toggler-btn' onClick={handleNavbar}>
            <HiOutlineMenuAlt3 size={35} style={{
              color: `${toggleMenu ? "#fff" : "#010101"}`
            }} />
          </button>
        </div>

        <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
          <ul className="navbar-nav">
            <li className='nav-item'>
              <Link to="book" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Home</Link>
            </li>
            <li className='nav-item'>
              <Link to="all" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>All books</Link>
            </li>
            <li className='nav-item'>
              <Link to="genres" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>
                Genres
              </Link>
              <ul className="dropdown-menu">
                <li className='nav-item'>
                  <Link to="/genres/novel" className='nav-link text-uppercase text-white fs-20 fw-5 ls-1'>Novel</Link>
                </li>
                <li className='nav-item'>
                  <Link to="/genres/comic" className='nav-link text-uppercase text-white fs-20 fw-5 ls-1'>Comic book</Link>
                </li>
                <li className='nav-item'>
                  <Link to="/genres/textbook" className='nav-link text-uppercase text-white fs-20 fw-5 ls-1'>Text book</Link>
                </li>
                <li className='nav-item'>
                  <Link to="/genres/encyclopedia" className='nav-link text-uppercase text-white fs-20 fw-5 ls-1'>Encyclopedia</Link>
                </li>
              </ul>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  )
}

export default styled(Navbar)`

.navbar {
  background-color: #ffffff;
 
  
}

.navbar-content {
  display: flex;
  align-items: center;
}

.brand-and-toggler {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.navbar-brand {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000000;

  img {
    height: 40px;
    margin-right: 10px;
  }

  span {
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-family: 'Poppins', sans-serif;
  }
}

.navbar-toggler-btn {
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
}

.navbar-collapse {
  display: none;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  width: 100%;
  position: absolute;
  top: 100%;
  left: 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.show-navbar-collapse {
  display: flex;
}

.navbar-nav {
  list-style: none;
  display: flex;
  gap: 30px;
  margin: 0;
  padding: 0;
  justify-content: center;
  align-items: center;
}

.nav-item {
  position: relative;
}

.nav-link {
  color: #000000;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #a0522d; /* Light brown hover background */
    color: #ffffff; /* White font on hover */
    padding: 5px 10px;
    border-radius: 4px;
  }
}

.dropdown-menu {
  display: none;
  position: absolute;
  background-color: #ffffff;
  list-style: none;
  margin: 0;
  padding: 10px 0;
  min-width: 200px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  top: 100%;
  left: 0;
  z-index: 1000;
}

.nav-item:hover .dropdown-menu {
  display: block;
}

.dropdown-menu .nav-item {
  padding: 5px 20px;
}

.dropdown-menu .nav-link {
  color: #000000;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #a0522d;
    color: #ffffff;
    border-radius: 4px;
  }
}

`;



/* export default Navbar */