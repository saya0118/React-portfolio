import React from "react"
import 'semantic-ui-css/semantic.min.css'

function Promises () {
    return(
        <div className="promises">
            <div className="section-title">
                <h1>PROMISES</h1>
            </div>
            {/* <p>I promise ...</p> */}
            <ul className="ui container five column grid">
                <li className="ui column">
                    <i className="ui massive fire icon"></i>
                    <h3>Passion</h3>
                </li>
                <li className="ui column">
                    <i className="ui massive calendar alternate outline icon"></i>
                    <h3>Time</h3>
                </li>
                <li className="ui column">
                    <i className="ui massive comment alternate outline icon"></i>
                    <h3>Suggestion</h3>
                </li>
                <li className="ui column">
                    <i className="ui massive handshake outline icon"></i>
                    <h3>Cooperate</h3>
                </li>
                <li className="ui column">
                    <i className="ui massive recycle icon"></i>
                    <h3>PDCA</h3>
                </li>
            </ul>

        </div>
    )
}

export default Promises;