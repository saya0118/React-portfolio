import React from 'react'

function Skills (){
    // $('.value-bar').each(function(){
    //     $(this).animate({
    //         width:$(this).attr('data-percent')},"fast");
    // })
    return(
        <div className="skills">
            <div className="section-title">
                <h1>SKILLS</h1>
            </div>
            <div className="skill-container">
                <div className="progress-container">
                    <span className="name">HTML5</span>
                    <span className="value">
                        <div className="value-bar" data-percent="90%"/>
                    </span>
                    <div className="progress"></div>
                </div>
                <div className="progress-container">
                    <span className="name">CSS/SASS</span>
                    <span className="value">
                        <div className="value-bar" data-percent="65%"/>
                    </span>
                    <div className="progress"></div>
                </div>
                <div className="progress-container">
                    <span className="name">GitHub</span>
                    <span className="value">
                        <div className="value-bar" data-percent="80%"/>
                    </span>
                    <div className="progress"></div>
                </div>
                <div className="progress-container">
                    <span className="name">React.js</span>
                    <span className="value">
                        <div className="value-bar" data-percent="60%"/>
                    </span>
                    <div className="progress"></div>
                </div>
                <div className="progress-container">
                    <span className="name">TypeScript</span>
                    <span className="value">
                        <div className="value-bar" data-percent="60%"/>
                    </span>
                    <div className="progress"></div>
                </div>
                <div className="progress-container">
                    <span className="name">Next.js</span>
                    <span className="value">
                        <div className="value-bar" data-percent="40%"/>
                    </span>
                    <div className="progress"></div>
                </div>
            </div>
        </div>
    )
}

export default Skills;