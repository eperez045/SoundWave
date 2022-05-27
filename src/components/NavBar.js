import React from "react";
import logo from '../images/logo.png'


function NavBar(props){
    return (
        <div className="nav">
            <nav className="navbar">
               <div><img className="logo" src={logo} alt="Logo" /> SoundWave</div>
                    <ul class="nav-links">
                        <div class="menu">
                            <li className="nav-link">Discover</li>
                            <li className="nav-link">Join</li>
                        </div>
                    </ul>
            </nav>
        </div>
        
    )
}

export default NavBar