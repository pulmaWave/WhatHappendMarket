import React from 'react'
import './Header.scss'

const Header = () => {
  return (
    <header className="header">
        <span className="logo">what happened</span>
        <nav className="nav">
          <span className="nav-item">introduction</span>
          <span className="nav-item">solution</span>
          <span className="nav-item">rate plan</span>
          <span className="nav-item devide"></span>
          <span className="nav-item">login</span>
          <span className="nav-item">apply for free use</span>
        </nav>
    </header>
  )
}

export default Header
