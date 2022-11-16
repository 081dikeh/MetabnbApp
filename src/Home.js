import React from "react"
import Header from "./Components/Header"
import Cards from './Components/Cards'
import Adventure from "./Components/Adventure"
import Footer from "./Components/Footer"
import './Home.css'
import AHeader from './images/Frame .png'
import AHeader2 from './images/Group1.png'
import AHeader3 from './images/Group2.png'



export default function Home() {
    

    return (
        <main id="main-container">
            <Header/>

            <div className="afterHeader">
                <img src={AHeader3} alt="" />
                <img src={AHeader2} alt="" />
                <img src={AHeader} alt="" />
            </div>
        <Cards />
        <Adventure />
        <Footer />
        
        </main>
    )
}