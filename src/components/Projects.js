import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
 
export default function Projects() {

    const data = useStaticQuery(graphql`
    query {
        graphCmsData {
            projects {
                id
                title
                url
                slug
                level
                created
                code
                }
            }
        }
    `);

    const projects = data.graphCmsData.projects;

    const [userData, setUserData] = useState(null);

    useEffect(() => {
        // Fetch user data
        fetch("https://api.github.com/users/knetters")
        .then((response) => response.json())
        .then((data) => setUserData(data))
        .catch((error) => console.error("Error fetching user data from GitHub API:", error));
    }, []);

    return (
        <div>
            <h2 id="projects"><span className="grey">&#60;</span>Projects <span className="grey">/&#62;</span></h2>
            <section className="long-panel">
                <div className="taskbar">
                    <p>♢ Current tasks</p>
                </div>

                <div className="tasks-container">
                    <p className="task-header"><span className="task-icon"></span><span className="task-name">name</span><span className="task-date">begin date</span><span className="task-status">status</span></p>

                    {projects.map((project) => (
                            <a className="project-line-a" href={project.url} target="_blank" rel="noopener noreferrer"><p className="task-row"><span className="task-icon">{project.code}</span><span className="task-name">{project.title}</span><span className="task-date">{project.created}</span><span className="task-status"><span className={`${project.level === "building" ? "building" : "complete"}`}>{project.level}</span></span></p></a>
                    ))}
                    
                </div>
                
            </section>
            <div className="count-panel-row">
                <div className="count-panel">
                    <h3 className="purple-block"><span className="grey">&#60;</span>Repos <span className="grey">/&#62;</span></h3>
                    <span className="plus">+2 last week</span>
                    <span className="counter">{userData ? userData.public_repos : "0"}</span>
                </div>

                <div className="count-panel">
                    <h3 className="yellow-block"><span className="grey">&#60;</span>Followers <span className="grey">/&#62;</span></h3>
                    <span className="plus">+1 last week</span>
                    <span className="counter">{userData ? userData.followers : "0"}</span>
                </div>

                <div className="count-panel">
                    <h3 className="blue-block"><span className="grey">&#60;</span>Following <span className="grey">/&#62;</span></h3>
                    <span className="min">-1 last week</span>
                    <span className="counter">{userData ? userData.following : "0"}</span>
                </div>
            </div>
        </div>
    )
}