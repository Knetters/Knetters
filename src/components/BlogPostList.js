import React from "react";

export default function BlogPostList() {

    return (
        <section>    
            <ul className="blog-row">
                <a href="/blog/post/[slug]">
                <li className="blog-item">
                    <h3 className="yellow-block"><span className="grey">&#60;</span>Titel van een blog <span className="grey">/&#62;</span></h3>
                    <p className="blog-intro-text">Hier komt wat info te staan van de blog denk ik...</p>
                </li>
                </a>
            </ul>
        </section>
    )
}
