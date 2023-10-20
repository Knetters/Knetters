import React from "react";

export default function Banner() {

    return (
        <div>
            <nav>
                <p><a href="/">Intro</a> / <a href="#digital-brain">Digital brain</a> / <a href="#projects">Projects</a> / <a href="#resume">Resume</a></p>
            </nav>

            <section className="top-image-container">

                {/* Misschien elke keer een random image inladen */}
                <img className="top-image" src="/img/dungeon.jpeg" alt="" />
                <div className="gradient-overlay"></div>
            </section>
        </div>
    )
}
