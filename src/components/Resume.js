import React from "react";

export default function Resume() {

    return (
        <div className="resume-container">
            <h2 className="set-right"><span className="grey">&#60;</span>Resume <span className="grey">/&#62;</span></h2>

            <section className="long-panel intro-panel">
                <div className="taskbar">
                    <p>(o) Terminal</p>
                    <p className="taskbar-icon">Download</p>
                </div>

                {/* Education */}
                <div className="resume-title">
                    <h4>Education</h4>
                </div>

                <div className="resume-row">
                    <div className="resume-item">
                        <h4><span className="purple">HBO</span> | Frontend Design en Development (FDND)</h4>
                        <ul>
                            <li>Analyseren van opdrachten</li>
                            <li>Werken met complexe front-end toepassingen</li>
                            <li>Werken in front-end frameworks met een headless CMS</li>
                            <li>Nette code schrijven en omgaan met toegankelijkheid, performance en responsive webdesign</li>
                        </ul>
                    </div>
                    <div className="resume-item set-right extra">
                        <p>2022 t/m heden</p>
                        <p>Amsterdam, Nederland</p>
                    </div>
                </div>
                <div className="resume-row">
                    <div className="resume-item">
                        <h4><span className="purple">MBO</span> | Media en Applicatie Ontwikkelaar - Niveau 4</h4>
                        <ul>
                            <li>Werkzaamheden plannen en de voortgang bewaken</li>
                            <li>Software ontwerpen en (delen van) software realiseren</li>
                            <li>Software testen en verbetervoorstellen doen</li>
                            <li>Overleg voeren, opgeleverd werk presenteren en hierop reflecteren</li>
                        </ul>
                    </div>
                    <div className="resume-item set-right extra">
                        <p>2018 t/m 2021</p>
                        <p>Alkmaar, Nederland</p>
                    </div>
                </div>
                <div className="resume-row">
                    <div className="resume-item">
                        <h4><span className="purple">MBO</span> - ICT Medewerker en Beheer - Niveau 3</h4>
                        <ul>
                            <li>Hard- en software installeren</li>
                            <li>Gard- en software onderhouden en beheren</li>
                            <li>Systeemgebruikers ondersteunen</li>
                        </ul>
                    </div>
                    <div className="resume-item set-right extra">
                        <p>2016 t/m 2018</p>
                        <p>Alkmaar, Nederland</p>
                    </div>
                </div>

                {/* PROFESSIONAL EXPERIENCE */}
                <div className="resume-title">
                    <h4>Professional Experience</h4>
                </div>

                <div className="resume-row">
                    <div className="resume-item">
                        <h4>Mediamarkt Powerservice Medewerker</h4>
                        <ul>
                            <li>Het helpen met problemen van smart devices</li>
                            <li>Probleemoplossingsgericht denken</li>
                            <li>Het installeren en gebruiksklaar maken van laptops, smartphones en televisies</li>
                            <li>De data overzetten van oude naar nieuwe apparaten</li>
                            <li>Ondersteuning bieden aan de klanten van de Mediamarkt</li>
                        </ul>
                    </div>
                    <div className="resume-item set-right extra">
                        <p>2019 t/m heden</p>
                        <p>Alkmaar, Nederland</p>
                    </div>
                </div>

            </section>
        </div>
    )
}
