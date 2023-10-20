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
                        <li><a className="footer-link" href="https://github.com/knetters/" target="_blank">GitHub</a></li>
                        <li><a className="footer-link" href="https://www.linkedin.com/in/thomas-scheepers-b83676187?utm_source=share&utm_campaign=share_via&utm_content=profile&utm" target="_blank">LinkedIn</a></li>
                        <li><a className="footer-link" href="https://www.instagram.com/thomas.j.b.s/" target="_blank">Instagram</a></li>
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
                        <li className="list-header">Navigation</li>
                        <li><a className="footer-link" href="#intro">Intro</a></li>
                        <li><a className="footer-link" href="#digital-brain">Digital brain</a></li>
                        <li><a className="footer-link" href="#projects">Projects</a></li>
                        <li><a className="footer-link" href="#resume">Resume</a></li>
                    </ul>
                </div>
            </div>
            <p className="call-to-action">All rights reserved <span className="orange">©</span> 2023</p>
        </footer>
    )
}
