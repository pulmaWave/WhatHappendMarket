import React from 'react'
import './Header.scss'
import navlogo from 'assets/section7/video-object-06.png'

const Header = () => {
  return (
    <header className="header">
      <div className="header-pc">
        <span className="logo">what happened</span>
        <nav className="nav">
          <span className="nav-item">introduction</span>
          <span className="nav-item">solution</span>
          <span className="nav-item">rate plan</span>
          <span className="nav-item devide"></span>
          <span className="nav-item">login</span>
          <span className="nav-item">apply for free use</span>
        </nav>
      </div>
      <div className="header-mobile">
        <span className="logo">what happened</span>
        <img src={navlogo} alt="navbar logo" className="nav-logo" />
        <div className="nav-overlay">
        </div>
        <nav className="nav-mobile">
          <ul className="nav-list">
            <li className="nav-item">introduction</li>
            <li className="nav-item">solution</li>
            <li className="nav-item">rate plan</li>
            <li className="nav-item">log in</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
