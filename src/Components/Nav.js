import React from "react"
import { Link } from 'react-router-dom'
import '../css/Nav.css'

export default function Nav() {
    return (
        <nav>

            <ul>
                {/* <li><a href="" className="onesidepad">Home</a></li> */}
                <Link to='/' id="onesidepad2">Home</Link>
                <Link to='/placetostay' id="onesidepad">Place to stay</Link>
                <li><a href="">NFTs</a></li>
                <li><a href="" className="onesidepad2" >Community</a></li>
            </ul>

        </nav>
            
    )
}