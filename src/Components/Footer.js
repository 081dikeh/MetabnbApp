import React from "react"

import '../css/Footer.css'
import Footerlogo from '../images/footer-logo.png'
import Twitter from '../images/twitter.png'
import Facebook from '../images/facebook.png'
import Instagram from '../images/instagram.png'


export default function Footer() {
    return (
        <footer id='footer'>
            <div className="footer-content">
                <div className="footer-img">
                    <img src={Footerlogo} alt="" id='mainlogo'/>
                    <div className="footer-icons">
                        <a href=""><img src={Facebook} alt="" id='margin1-icon'/></a>
                        <a href=""><img src={Instagram} alt=""/></a>
                        <a href=""><img src={Twitter} alt="margin2-icon" /></a>
                    </div>
                </div>
                <div className="footer-navs">
                    <nav>
                        <ul>
                            <li className='title'>Community</li>
                            <li><a href="">NFT</a></li>
                            <li><a href="">Tokens</a></li>
                            <li><a href="">Landlords</a></li>
                            <li><a href="">Discord</a></li>
                        </ul>
                        <ul>
                            <li className='title'>Places</li>
                            <li><a href="">Castle</a></li>
                            <li><a href="">Farms </a></li>
                            <li><a href="">Beach</a></li>
                            <li><a href="">Learn more</a></li>
                        </ul>
                        <ul>
                            <li className='title'>About us</li>
                            <li><a href="">Road map</a></li>
                            <li><a href="">Creators </a></li>
                            <li><a href="">Career</a></li>
                            <li><a href="">Contact us</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="copyright">
                <p>&copy; 2022 Metabnb</p>
            </div>
        </footer>
    )
}