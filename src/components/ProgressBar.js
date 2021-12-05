import React, { useState, useEffect } from 'react'

const ProgressBar = (props) => {

    const [value, setValue] = useState(0);

    useEffect((percent, width) => {
        setValue(percent * width);
    })

    return (
        <div className="progress-bar" style={{width: `400px`}}>
            <div className="progress" style={{ width: `${props.value}px`}}/>
        </div>
    )
}

export default ProgressBar;