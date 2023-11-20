import React from "react";
import { useData } from "../useData";

export default function BlogPostList() {

    const { blogs } = useData();

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
                {blogs.map((blog) => (
                    <a href="/blog/post/[slug]">
                        <li className="blog-item">
                            <div className="inner-blog-item">
                                <img src="/img/bedrijfsleven.png" alt="" />
                                <div className="inner-blog-content">
                                    <div className="blog-title-row">
                                        <h3><span className="grey">&#60;</span>{blog.title} <span className="grey">/&#62;</span></h3>
                                        <p>Gastspreker: <span className="green">{blog.speaker}</span></p>
                                    </div>
                                    <p className="blog-intro-text">{blog.intro}</p>
                                </div>
                            </div>
                        </li>
                    </a>
                ))}
            </ul>
        </section>
    )
}
