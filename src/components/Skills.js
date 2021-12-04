import React from 'react'
import ProgressBar from './ProgressBar'

function Skills (){

    return(
        <div className="skills">
            <div className="section-title">
                <h1>SKILLS</h1>
            </div>
            <div className="skill-container">
                <div className="progress-container">
                    <span className="name">HTML5</span>
                    <ProgressBar width={400} value={0.5}/>
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