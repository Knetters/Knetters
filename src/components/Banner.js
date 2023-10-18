import React from "react";

export default function Banner() {

    return (
        <section className="top-image-container">

            {/* Misschien elke keer een random image inladen */}
            <img className="top-image" src="/img/dungeon.jpeg" alt="" />
            <div className="gradient-overlay"></div>
        </section>
    )
}
