import React from "react";

export default function BlogPostList() {

    return (
        <section>    
            <ul className="blog-row">
                <a href="/blog/post/[slug]">
                    <li className="blog-item">
                        <div className="inner-blog-item">
                            <img src="/img/wizard.jpeg" alt="" />
                            <div className="inner-blog-content">
                                <div className="blog-title-row">
                                    <h3><span className="grey">&#60;</span>Titel van een blog <span className="grey">/&#62;</span></h3>
                                    <p>Gastspreker: <span className="green">Naam gastspreker</span></p>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="blog-item">
                        <div className="inner-blog-item">
                            <img src="/img/knight.jpeg" alt="" />
                            <div className="inner-blog-content">
                                <div className="blog-title-row">
                                    <h3><span className="grey">&#60;</span>Titel van een blog <span className="grey">/&#62;</span></h3>
                                    <p>Gastspreker: <span className="green">Naam gastspreker</span></p>
                                </div>
                            </div>
                        </div>
                    </li>
                </a>
            </ul>
        </section>
    )
}
