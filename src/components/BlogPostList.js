import React from "react";
import { useStaticQuery, graphql } from "gatsby";

export default function BlogPostList() {

    const data = useStaticQuery(graphql`
    query {
        graphCmsData {
            posts {
                id
                title
                slug
                category
                speaker
                intro
                }
            }
        }
    `);

    const posts = data.graphCmsData.posts;

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
                {posts.map((post) => (
                    <a href="/blog/post/[slug]">
                        <li className="blog-item">
                            <div className="inner-blog-item">
                                <img src="/img/bedrijfsleven.png" alt="" />
                                <div className="inner-blog-content">
                                    <div className="blog-title-row">
                                        <h3><span className="grey">&#60;</span>{post.title} <span className="grey">/&#62;</span></h3>
                                        <p>Gastspreker: <span className="green">{post.speaker}</span></p>
                                    </div>
                                    <p className="blog-intro-text">{post.intro}</p>
                                </div>
                            </div>
                        </li>
                    </a>
                ))}
            </ul>
        </section>
    )
}
