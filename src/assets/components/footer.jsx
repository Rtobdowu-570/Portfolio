import React from 'react'
import {FaWhatsapp, FaTwitter, FaGithub} from 'react-icons/fa'
import '../styles/main.css'

const Footer = () => {
  return (
    <>
    <div className="footer-section">
        <div className="footer-container">
            <div className="footer-content">
                <div className="footer-text">
                    <h2>&copy; 2026 Fasasi Pamilerin.</h2>
                    <h2> All rights reserved</h2>
                </div>
                <div className="footer-icons">
                    <div >
                        <a href="https://github.com/Rtobdowu-570" target="_blank" rel="noopener noreferrer" className="theme-btn" ><FaGithub className='icon' /></a>
                    </div>
                    <div >
                        <a href="https://twitter.com/AndrewPete38959" target="_blank" rel="noopener noreferrer" className="theme-btn" ><FaTwitter className='icon' /></a>
                    </div>
                    <div >
                        <a href="https://wa.me/2348160126669" target="_blank" rel="noopener noreferrer" className="theme-btn" ><FaWhatsapp  className='icon'/></a>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    </>
  )
}

export default Footer