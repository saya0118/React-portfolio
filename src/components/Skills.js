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
                    <div className="name">HTML5</div>
                    <ProgressBar width={400}px value={90}/>
                </div>
                <div className="progress-container">
                    <div className="name">CSS/SASS</div>
                    <ProgressBar width={400}px value={70}/>
                </div>
                <div className="progress-container">
                    <div className="name">GitHub</div>
                    <ProgressBar width={400}px value={80}/>
                </div>
                <div className="progress-container">
                    <div className="name">React.js</div>
                    <ProgressBar width={400}px value={70}/>
                </div>
                <div className="progress-container">
                    <div className="name">TypeScript</div>
                    <ProgressBar width={400}px value={60}/>
                </div>
                <div className="progress-container">
                    <div className="name">Next.js</div>
                    <ProgressBar width={400}px value={40}/>
                </div>
            </div>
        </div>
    )
}

export default Skills;