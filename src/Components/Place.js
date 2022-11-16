import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import Footer from "./Footer"
import Nav from "./Nav"
import Modal from './Modal'
import PlaceNav from "./Place-nav"
import '../css/Header.css'
import '../css/Place.css'
import '../css/Modal.css'
import Logo from "../images/logo.png"

import Frame1 from '../images/frame1.png'
import Frame2 from '../images/frame2.png'
import Frame3 from '../images/frame3.png'
import Frame4 from '../images/frame4.png'
import Frame5 from '../images/frame5.png'
import Frame6 from '../images/frame6.png'
import Frame7 from '../images/frame7.png'
import Frame8 from '../images/frame8.png'

import placeFrame from '../images/placeframe1.png'
import placeFrame2 from '../images/placeframe2.png'
import placeFrame3 from '../images/placeframe3.png'
import placeFrame4 from '../images/placeframe4.png'
import placeFrame5 from '../images/placeframe5.png'
import placeFrame6 from '../images/placeframe6.png'
import placeFrame7 from '../images/placeframe7.png'
import placeFrame8 from '../images/placeframe8.png'
import Stars from '../images/stars.png'
import closeSide from '../images/x.png'
import openSide from '../images/align-right.png'


function Place() {
  const [openSidebar, setOpenSidebar] = useState(false)
  const [openModal, setOpenModal] = useState(false)

  const handleOpenSidebar = () => {
    setOpenSidebar(!openSidebar)
}

  return (
    <div id="places">
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
                    <Link to='/' id="onesidepadlink2">Home</Link>
                    <li><a href="">Place to stay</a></li>
                    <li><a href="">NFTs</a></li>
                    <li><a href="" className="onesidepad2" >Community</a></li>
                </ul>

                <button id="wallet" onClick={() => setOpenModal(true)}>Connect wallet</button>

            </div>
            <Modal open={openModal} onClose={() => setOpenModal(false)} />
        </header>
        <PlaceNav />


















        <section className="cards-container">

            <div className="cards">

                <div className="card">
                    <img src={Frame1} alt="" className='card-cove-img' />
                    <div className="card-text">
                        <span>Desert king</span>
                        <span id='bold-card-text' className='right'>1MBT per night</span>
                    </div>
                    <div className="card-text">
                        <span>2345km away</span>
                        <span className='right'>available for 2weeks stay</span>
                    </div>
                    <img src={Stars} alt="" id='stars'/>
                </div>
                
                <div className="card">
                    <img src={Frame2} alt="" className='card-cove-img' />
                    <div className="card-text">
                        <span>Desert king</span>
                        <span id='bold-card-text' className='right'>1MBT per night</span>
                    </div>
                    <div className="card-text">
                        <span>2345km away</span>
                        <span className='right'>available for 2weeks stay</span>
                    </div>
                    <img src={Stars} alt="" id='stars'/>
                </div>

                <div className="card">
                    <img src={Frame3} alt="" className='card-cove-img' />
                    <div className="card-text">
                        <span>Desert king</span>
                        <span id='bold-card-text' className='right'>1MBT per night</span>
                    </div>
                    <div className="card-text">
                        <span>2345km away</span>
                        <span className='right'>available for 2weeks stay</span>
                    </div>
                    <img src={Stars} alt="" id='stars'/>
                </div>

                <div className="card">
                    <img src={Frame4} alt="" className='card-cove-img' />
                    <div className="card-text">
                        <span>Desert king</span>
                        <span id='bold-card-text' className='right'>1MBT per night</span>
                    </div>
                    <div className="card-text">
                        <span>2345km away</span>
                        <span className='right'>available for 2weeks stay</span>
                    </div>
                    <img src={Stars} alt="" id='stars'/>
                </div>

                <div className="card">
                    <img src={Frame5} alt="" className='card-cove-img' />
                    <div className="card-text">
                        <span>Desert king</span>
                        <span id='bold-card-text' className='right'>1MBT per night</span>
                    </div>
                    <div className="card-text">
                        <span>2345km away</span>
                        <span className='right'>available for 2weeks stay</span>
                    </div>
                    <img src={Stars} alt="" id='stars'/>
                </div>

                <div className="card">
                    <img src={Frame6} alt="" className='card-cove-img' />
                    <div className="card-text">
                        <span>Desert king</span>
                        <span id='bold-card-text' className='right'>1MBT per night</span>
                    </div>
                    <div className="card-text">
                        <span>2345km away</span>
                        <span className='right'>available for 2weeks stay</span>
                    </div>
                    <img src={Stars} alt="" id='stars'/>
                </div>

                <div className="card">
                    <img src={Frame7} alt="" className='card-cove-img' />
                    <div className="card-text">
                        <span>Desert king</span>
                        <span id='bold-card-text' className='right'>1MBT per night</span>
                    </div>
                    <div className="card-text">
                        <span>2345km away</span>
                        <span className='right'>available for 2weeks stay</span>
                    </div>
                    <img src={Stars} alt="" id='stars'/>
                </div>

                <div className="card">
                    <img src={Frame8} alt="" className='card-cove-img' />
                    <div className="card-text">
                        <span>Desert king</span>
                        <span id='bold-card-text' className='right'>1MBT per night</span>
                    </div>
                    <div className="card-text">
                        <span>2345km away</span>
                        <span className='right'>available for 2weeks stay</span>
                    </div>
                    <img src={Stars} alt="" id='stars'/>
                </div>





                <div className="card">
                    <img src={placeFrame} alt="" className='card-cove-img' />
                    <div className="card-text">
                        <span>Desert king</span>
                        <span id='bold-card-text' className='right'>1MBT per night</span>
                    </div>
                    <div className="card-text">
                        <span>2345km away</span>
                        <span className='right'>available for 2weeks stay</span>
                    </div>
                    <img src={Stars} alt="" id='stars'/>
                </div>
                
                <div className="card">
                    <img src={placeFrame2} alt="" className='card-cove-img' />
                    <div className="card-text">
                        <span>Desert king</span>
                        <span id='bold-card-text' className='right'>1MBT per night</span>
                    </div>
                    <div className="card-text">
                        <span>2345km away</span>
                        <span className='right'>available for 2weeks stay</span>
                    </div>
                    <img src={Stars} alt="" id='stars'/>
                </div>

                <div className="card">
                    <img src={placeFrame3} alt="" className='card-cove-img' />
                    <div className="card-text">
                        <span>Desert king</span>
                        <span id='bold-card-text' className='right'>1MBT per night</span>
                    </div>
                    <div className="card-text">
                        <span>2345km away</span>
                        <span className='right'>available for 2weeks stay</span>
                    </div>
                    <img src={Stars} alt="" id='stars'/>
                </div>

                <div className="card">
                    <img src={placeFrame4} alt="" className='card-cove-img' />
                    <div className="card-text">
                        <span>Desert king</span>
                        <span id='bold-card-text' className='right'>1MBT per night</span>
                    </div>
                    <div className="card-text">
                        <span>2345km away</span>
                        <span className='right'>available for 2weeks stay</span>
                    </div>
                    <img src={Stars} alt="" id='stars'/>
                </div>

                <div className="card">
                    <img src={placeFrame5} alt="" className='card-cove-img' />
                    <div className="card-text">
                        <span>Desert king</span>
                        <span id='bold-card-text' className='right'>1MBT per night</span>
                    </div>
                    <div className="card-text">
                        <span>2345km away</span>
                        <span className='right'>available for 2weeks stay</span>
                    </div>
                    <img src={Stars} alt="" id='stars'/>
                </div>

                <div className="card">
                    <img src={placeFrame6} alt="" className='card-cove-img' />
                    <div className="card-text">
                        <span>Desert king</span>
                        <span id='bold-card-text' className='right'>1MBT per night</span>
                    </div>
                    <div className="card-text">
                        <span>2345km away</span>
                        <span className='right'>available for 2weeks stay</span>
                    </div>
                    <img src={Stars} alt="" id='stars'/>
                </div>

                <div className="card">
                    <img src={placeFrame7} alt="" className='card-cove-img' />
                    <div className="card-text">
                        <span>Desert king</span>
                        <span id='bold-card-text' className='right'>1MBT per night</span>
                    </div>
                    <div className="card-text">
                        <span>2345km away</span>
                        <span className='right'>available for 2weeks stay</span>
                    </div>
                    <img src={Stars} alt="" id='stars'/>
                </div>

                <div className="card">
                    <img src={placeFrame8} alt="" className='card-cove-img' />
                    <div className="card-text">
                        <span>Desert king</span>
                        <span id='bold-card-text' className='right'>1MBT per night</span>
                    </div>
                    <div className="card-text">
                        <span>2345km away</span>
                        <span className='right'>available for 2weeks stay</span>
                    </div>
                    <img src={Stars} alt="" id='stars'/>
                </div>

            </div>

            
            
           {/* {(openMore === false) ?
                <button className='mt-20 viewmore' onClick={ handleOpenMore}>View all</button>:
                <button className='mt-20 viewmore' onClick={ handleOpenMore}>View less</button>
            } */} 
       </section> 
        <Footer />
    </div>
  )
}

export default Place