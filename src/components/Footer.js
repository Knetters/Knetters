import React from "react";

export default function Footer() {

    return (
        <footer className="long-panel intro-panel">
            <div className="taskbar">
                <p>(o) Footer</p>
            </div>
            <p>Kom in contact met mij!</p>
            <div className="footer-row">
                <div className="footer-column">
                    <ul>
                        <li className="list-header">Socials</li>
                        <li>GitHub</li>
                        <li>LinkedIn</li>
                        <li>Instragram</li>
                    </ul>
                </div>

                <div className="footer-column">
                    <ul>
                        <li className="list-header">Contact</li>
                        <li>thomas@scheepers.com</li>
                        <li>Alkmaar, Nederland</li>
                        <li>+31 6 53747856</li>
                    </ul>
                </div>

                <div className="footer-column">
                    <ul>
                        <li className="list-header">titel</li>
                        <li>text</li>
                        <li>text</li>
                        <li>text</li>
                    </ul>
                </div>
            </div>
            <p className="call-to-action">All rights reserved <span className="orange">©</span> 2023</p>
        </footer>
    )
}
