import React from "react"

import '../css/Modal.css'
import walletImage from '../images/walletBtn-img1.png'
import walletImage2 from '../images/walletBtn-img2.png'


export default function Modal({open, onClose}) {
    if(!open) return null;

    return (
        <main className='modal-container cursor-pointer' onClick={onClose}>
            <div className="Modal" onClick={(e) => {
                e.stopPropagation();
            }}>
                <div className="modal-title cursor-default">
                    <h4>Connect Wallet</h4>
                    <span onClick={onClose}>&#215;</span>
                </div>
                <div className="modal-content cursor-default">
                    <p>Choose your preferred wallet:</p>
                    <button><img src={walletImage2} /> <span>&#8250;</span></button>
                    <button><img src={walletImage} /> <span>&#8250;</span></button>
                </div>

            </div>
        </main>
    )
}

