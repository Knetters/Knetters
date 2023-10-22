import React from "react";

export default function Terminal() {

    return (
        <div>
            <h2 id="digital-brain"><span className="grey">&#60;</span>Digital brain <span className="grey">/&#62;</span></h2>
            <section id="terminal" className="terminal">
                <div className="taskbar">
                    <p>♢ Terminal</p>
                    <p className="taskbar-icon">⌥⌘</p>
                </div>
                <div class="terminal-content">
                
                <div id="welcome-msg" className="welcome-msg-margin">
                    <p id="text-art" className="text-art-style" aria-hidden="true"><span className="red" >Terminal disabled</span></p>
                    <p className="bottom-spacing">To my digital brain - Type <span className="purple">help</span> for a list of supported commands.</p>
                </div>

                <div id="output">

                </div>
                <p><span className="blue" aria-hidden="true">~/tmp/users</span> <span className="red" aria-hidden="true">admin &#62;</span><span className="red" aria-hidden="true"> </span><input type="text" autocomplete="off" aria-autocomplete="none" className="terminal-input" spellcheck="false" /></p>
            </div>
            </section>
        </div>
    )
}