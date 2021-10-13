import React from 'react'
import './Header.scss'
import menulogo from 'assets/header/menuic.png'
import cancel from 'assets/header/close.png'

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
        <label htmlFor="nav-mb-input">
          <img src={menulogo} alt="navbar logo" className="nav-logo" />
        </label>
        <input type="checkbox" hidden className="nav-input" id="nav-mb-input" />
        <label htmlFor="nav-mb-input" className="nav-overlay"></label>
        <nav className="nav-mobile">
          <label htmlFor="nav-mb-input" className="cancel-mb">
            <img src={cancel} alt="cancel" />
          </label>
          <ul className="nav-mb-list">
            <li className="nav-item">Introduction</li>
            <li className="nav-item">Solution</li>
            <li className="nav-item">Rate plan</li>
            <li className="nav-item">Log in</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
