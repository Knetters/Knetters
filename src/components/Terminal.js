import React from "react";

export default function Terminal() {

    return (
        <div>
            <h2 id="terminal"><span className="grey">&#60;</span>Digital brain <span className="grey">/&#62;</span></h2>
            <section className="terminal">
                <div className="taskbar">
                    <p>(o) Terminal</p>
                    <p className="taskbar-icon">⌥⌘</p>
                </div>
                <div class="terminal-content">
                
                <div id="welcome-msg" className="welcome-msg-margin">
                    <p id="text-art" className="text-art-style" aria-hidden="true">Loading...</p>
                    <p className="bottom-spacing">To my digital brain - Type <span className="blue">help</span> for a list of supported commands.</p>
                </div>

                <div id="output">

                </div>
                <p><span className="blue" aria-hidden="true">~/tmp/users</span> <span className="green" aria-hidden="true">admin </span><span className="red" aria-hidden="true"> </span><input type="text" className="terminal-input" spellcheck="false" /></p>
            </div>
            </section>
        </div>
    )
}