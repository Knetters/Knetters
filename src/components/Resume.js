import React from "react";

export default function Resume() {

    return (
        <div className="resume-container">
            <h2 className="set-right"><span className="grey">&#60;</span>Resume <span className="grey">/&#62;</span></h2>

            <section className="long-panel intro-panel">
                <div className="taskbar">
                    <p>(o) Resume</p>
                </div>
                <div className="resume-title">
                    <h4>Titel</h4>
                </div>
                <div className="resume-row">
                    <div className="resume-item">
                        <h4>Werk</h4>
                        <p>Hier komt tekst</p>
                    </div>
                    <div className="resume-item">
                        <h4>Werk</h4>
                        <p>Hier komt tekst</p>
                    </div>
                </div>
            </section>
        </div>
    )
}
