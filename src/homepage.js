import React from 'react'
import './homepage.css'

function Homepage() {
    return (
        <div className="homepage">
            <nav className="navbar">
                <div className="title">
                <h1>Pitch.io</h1> 
                </div>
                <div className="menu-btn">
                    <div className="menu-btn__burger"></div>
                </div>
                <div className="links">
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Donate</a></li>   
                        <li><a href="#">|</a></li>
                        <li><a href="#">Sign in with Google</a></li> 
                    </ul>
                </div>
            </nav>
            <div className="page">
                Use Pitch, or face consequences
                <br></br>
                <a href="#" id="top-btn">Use the App</a>
            </div>
            <div className="page2">
                download high quality songs for free!
                <br></br>
                <input type='text'></input>
            </div>
            <div className="page3">
                Top Music Covers
                <br></br>
                 
            </div>
        </div>
         
        
    )
}

export default Homepage
