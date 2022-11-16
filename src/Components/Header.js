import React from "react"
import Logo from "../images/logo.png"
import '../css/Header.css'
import Nav from "./Nav"
import Grouped from '../images/Grouped-img.png'
import closeSide from '../images/x.png'
import openSide from '../images/align-right.png'
import Modal from "./Modal"
import { useState } from "react"
import { Link } from "react-router-dom"

export default function Header() {

    const [openSidebar, setOpenSidebar] = useState(false)
    const [openModal, setOpenModal] = useState(false)


    const handleOpenSidebar = () => {
        setOpenSidebar(!openSidebar)
    }


    return (
        <header id="header">
            <div className="nav-container">
                <a href=""><img src={Logo} alt="" id="logo" /></a>
                <Nav />
                <button onClick={() => setOpenModal(true)} id="modal-btn">Connect wallet</button>
            </div>

            {(openSidebar === false) ?
                <img src={openSide} className='openSide' onClick={ handleOpenSidebar} />:
                <img src={closeSide} className='openSide' onClick={ handleOpenSidebar} />
            }
            
            <div className={`sidebar ${
                (openSidebar === true) ? 'block': 'hidden'
            }`}>

                <ul>
                    <li><a href="" className="onesidepad2" >Home</a></li>
                    <Link to='/placetostay' id="onesidepadlink">Place to stay</Link>
                    <li id="martop"><a href="">NFTs</a></li>
                    <li><a href="" className="onesidepad2" >Community</a></li>
                </ul>

                <button id="wallet" onClick={() => setOpenModal(true)}>Connect wallet</button>

            </div>
            <Modal open={openModal} onClose={() => setOpenModal(false)} />

            <section id="header-content">
                <div className="header-text">
                    <h1>Rent a <span>Place</span> away from <span>Home</span> in the <span>Metaverse</span></h1>
                    <p>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
                    <div className="header-search">
                        <input type="search" name="" id="" placeholder="Search for location"/>
                        <button>Search</button>
                    </div>
                </div>
                <div className="header-img">
                    <img src= {Grouped} alt="" />
                </div>
            </section>
        </header>
    )
}



