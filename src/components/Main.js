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
            <p>Hi! I'm Saya.<br/>
                I'm a React developer based in Vancouver.
                I was born in Seoul, South Korea and grown up in Tokyo, Japan.
                Challenging and creating new things have been my favorite since my childhood.
                Therefore, I've tried to learn Ukulele, piano and also I've traveled 15 countries by myself when I was in university.
                <br/>
                I learned agriculture development in the university and I was supposed to go to the graduated college in the UK after graduated. However, I had to change my plan due to these days situation. Here's what I thought then. "Well, I've been interested in creating a website but it's a bit difficult to change my career until now. Is it good timing to change my career and jump into the unknown world?" That's how I started to get in the world of programming.
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
