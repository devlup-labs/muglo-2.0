import React from 'react'
import logo from '../assets/images/logo.png'
import logo2 from '../assets/images/logo2.png'

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className="logo">
            <a href="#"><img className="logo-img"src={logo2} alt="logo" /></a>
        </div>
        <div className="search">
            <input className='inp-search' type="text" placeholder='Search'/>
            <button className="search-btn" >Go</button>
        </div>
        <div className="dash-prof">
            <div className="dashboard"><button className="btn-dashboard">Dashboard</button></div>
            <div className="profile"><button className='btn-profile'>Profile</button></div>
        </div>
    </div>
  )
}
