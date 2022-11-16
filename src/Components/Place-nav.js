import '../css/placeNav.css'
import placeIcon from '../images/place-icon.png'


export default function PlaceNav() {
    return (
        
        <div className="place-nav-container">    
            <nav id='place-nav'>
                <ul>
                <li id='first'><a href="">Resturant</a></li>
                <li><a href="">Cottage</a></li>
                <li><a href="">Castle</a></li>
                <li><a href="">fantast city</a></li>
                <li><a href="">beach</a></li>
                <li><a href="">Carbins</a></li>
                <li><a href="">Off-grid</a></li>
                <li><a href="">Farm</a></li>

                </ul>
            </nav>

            <div className="btn-container">
                <button id='locationBtn'><a href="">Location <img src={placeIcon} alt="" /></a></button>
            </div>

        </div>

    )
}