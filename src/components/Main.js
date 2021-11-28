import React from 'react';
import RedPalette from '../image/EllipseRed.svg'
import BeigePalette from '../image/EllipseBeige.svg'
import Profile from '../image/profile.svg'

function Main () {
    return(
        <div className="Main">
            <div className="section-title">
                <h1>Who is Saya?</h1>
            </div>
            <div className="container">
                <p>
                    I’m passionate about learning new things. I’ve been to around 20 countries, and started to learn ukulele and piano, illustration, French... Learning programming is also one of my challenges.<br/>
                    I love traveling, meeting new people, challenging what I’ve never tried and eating!
                </p>
                <div className="image">
                    <img src={RedPalette} className="red-palette"/>
                    <img src={BeigePalette} className="beige-palette"/>
                    <img src={Profile} className="profile"/>
                </div>
            </div>

        </div>
    )
}

export default Main;
