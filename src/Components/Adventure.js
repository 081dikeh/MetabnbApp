import React from "react"
import '../css/Adventure.css'
import adventure from '../images/adventure.png'


export default function Adventure() {
    return (
        <section className="adventure">
            <div className="adventure-text">
                <h1>Metabnb NFTs</h1>
                <p>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
                <button>Learn more</button>
            </div>
            <div className="adventure-img">
                <img src={adventure}  alt="" />
            </div>
        </section>
    )
}