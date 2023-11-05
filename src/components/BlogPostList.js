import React from "react";

export default function BlogPostList() {

    return (
        <section>    
        
            <h3 className="blog-title"><span className="grey">&#60;</span>Posts<span className="grey">/&#62;</span></h3>

            <div className="blog-filter-row">
                <div className="innder-blog-row">
                    <ul className="blog-filter-list">
                        <li>Alles</li>
                        <li>Webdesign</li>
                        <li>Ontwikkelingen</li>
                        <li>Bedrijfsleven</li>
                    </ul>
                    <input className="blog-filter-input" type="text" placeholder="Zoeken" />
                </div>
            </div>

            <ul className="blog-row">
                <a href="/blog/post/[slug]">
                    <li className="blog-item">
                        <div className="inner-blog-item">
                            <img src="/img/bedrijfsleven.png" alt="" />
                            <div className="inner-blog-content">
                                <div className="blog-title-row">
                                    <h3><span className="grey">&#60;</span>Lange titel van een blog <span className="grey">/&#62;</span></h3>
                                    <p>Gastspreker: <span className="green">Naam gastspreker</span></p>
                                </div>
                                <p className="blog-intro-text">Hier komt wat intro tekst van een blog post, geen idee hoe lang dit moet zijn. Misschien maar twee regels?</p>
                            </div>
                        </div>
                    </li>

                    <li className="blog-item">
                        <div className="inner-blog-item">
                            <img src="/img/ontwikkelingen.png" alt="" />
                            <div className="inner-blog-content">
                                <div className="blog-title-row">
                                    <h3><span className="grey">&#60;</span>Titel van een blog <span className="grey">/&#62;</span></h3>
                                    <p>Gastspreker: <span className="green">Naam van gastspreker</span></p>
                                </div>
                                <p className="blog-intro-text">Hier komt wat intro tekst van een blog post. Misschien maar twee regels?</p>
                            </div>
                        </div>
                    </li>

                    <li className="blog-item">
                        <div className="inner-blog-item">
                            <img src="/img/webdesign.png" alt="" />
                            <div className="inner-blog-content">
                                <div className="blog-title-row">
                                    <h3><span className="grey">&#60;</span>Nog langere titel van een blog <span className="grey">/&#62;</span></h3>
                                    <p>Gastspreker: <span className="green">Naam gastspreker</span></p>
                                </div>
                                <p className="blog-intro-text">Hier komt wat intro tekst van een blog post, geen idee hoe lang dit moet zijn. Misschien maar twee regels?</p>
                            </div>
                        </div>
                    </li>
                </a>
            </ul>
        </section>
    )
}
