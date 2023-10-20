import React from "react";

export default function Projects() {

    return (
        <div>
            <h2 id="projects"><span className="grey">&#60;</span>Projects <span className="grey">/&#62;</span></h2>
            <section className="long-panel">
                <div className="taskbar">
                    <p>♢ Current tasks</p>
                </div>

                <div className="tasks-container">
                    <p className="task-header"><span className="task-icon"></span><span className="task-name">name</span><span className="task-date">begin date</span><span className="task-status">status</span></p>

                    {/* Hier komt een loop, ??GitHub API?? */}
                    <p className="task-row"><span className="task-icon">L2</span><span className="task-name">your-tribe-for-life-profile-card</span><span className="task-date">12-sep-2023</span><span className="task-status"><span className="building">building</span></span></p>
                    <p className="task-row"><span className="task-icon">L2</span><span className="task-name">SPATwater-2.0</span><span className="task-date">03-oct-2023</span><span className="task-status"><span className="complete">complete</span></span></p>
                </div>
                
            </section>
            <div className="count-panel-row">
                <div className="count-panel">
                    <h3 className="purple-block"><span className="grey">&#60;</span>Repos <span className="grey">/&#62;</span></h3>
                    <span className="plus">+2 last week</span>
                    <span className="counter">34</span>
                </div>

                <div className="count-panel">
                    <h3 className="yellow-block"><span className="grey">&#60;</span>Stars <span className="grey">/&#62;</span></h3>
                    <span className="plus">+1 last week</span>
                    <span className="counter">31</span>
                </div>

                <div className="count-panel">
                    <h3 className="blue-block"><span className="grey">&#60;</span>Followers <span className="grey">/&#62;</span></h3>
                    <span className="min">-1 last week</span>
                    <span className="counter">8</span>
                </div>
            </div>
        </div>
    )
}