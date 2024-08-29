import React, { useEffect, useRef } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import search from '../../assets/search_icon.svg';
import bell from '../../assets/bell_icon.svg';
import profile from '../../assets/profile_img.png';
import dropdown from '../../assets/caret_icon.svg';
import { logout } from '../../firebase';

// Component for the navbar
const Navbar = () => {
  // Reference to the navbar element for DOM manipulation
  const navRef = useRef();

  // Add/remove 'nav-dark' class based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add('nav-dark');
      } else {
        navRef.current.classList.remove('nav-dark');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={navRef} className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>Recently added</li>
          <li>My List</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search} alt="" className="icons" />
        <p>Children</p>
        <img src={bell} alt="" className="icons" />
        <div className="navbar-profile">
          <img src={profile} alt="" className="profile" />
          <img src={dropdown} alt="" />
          <div className="dropdown">
            <p onClick={logout}>Sign Out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;