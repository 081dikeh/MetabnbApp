import React from "react"

import Frame1 from '../images/frame1.png'
import Frame2 from '../images/frame2.png'
import Frame3 from '../images/frame3.png'
import Frame4 from '../images/frame4.png'
import Frame5 from '../images/frame5.png'
import Frame6 from '../images/frame6.png'
import Frame7 from '../images/frame7.png'
import Frame8 from '../images/frame8.png'
import Stars from '../images/stars.png'
import { useState } from 'react'
import '../css/Cards.css'


export default function Cards() {
    const [openMore, setOpenMore] = useState(false)

    const handleOpenMore = () => {
        setOpenMore(!openMore)
    }

    return (
       <section className="cards-container">
            <h1>Inspiration for your next adventure</h1>

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

            </div>

            
       </section> 
    )
}