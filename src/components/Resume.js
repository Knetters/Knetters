import React from "react";

export default function Resume() {

    return (
        <div className="resume-container">
            <h2 id="resume" className="set-right"><span className="grey">&#60;</span>Resume <span className="grey">/&#62;</span></h2>

            <section className="long-panel intro-panel">
                <div className="taskbar">
                    <p>(o) Terminal</p>
                    <p id="downloadPDF" className="taskbar-icon download-link">Download</p>
                </div>

                <section id="exportPDF" className="inner-resume-container">

                    {/* Education */}
                    <div className="resume-title">
                        <h4>Education</h4>
                    </div>

                    <div className="resume-row">
                        <div className="resume-item-large">
                            <h4><span className="purple">HBO</span> - Frontend Design en Development (FDND)</h4>
                            <ul>
                                <li><span className="li-icon">▶</span> Analyseren van opdrachten</li>
                                <li><span className="li-icon">▶</span> Werken met complexe front-end toepassingen</li>
                                <li><span className="li-icon">▶</span> Werken in front-end frameworks met een headless CMS</li>
                                <li><span className="li-icon">▶</span> Nette code schrijven en omgaan met toegankelijkheid, performance en responsive webdesign</li>
                            </ul>
                        </div>
                        <div className="resume-item-small set-right">
                            <p>2022 t/m heden</p>
                        </div>
                    </div>
                    <div className="resume-row">
                        <div className="resume-item-large">
                            <h4><span className="purple">MBO</span> - Media en Applicatie Ontwikkelaar - Niveau 4</h4>
                            <ul>
                                <li><span className="li-icon">▶</span> Werkzaamheden plannen en de voortgang bewaken</li>
                                <li><span className="li-icon">▶</span> Software ontwerpen en (delen van) software realiseren</li>
                                <li><span className="li-icon">▶</span> Software testen en verbetervoorstellen doen</li>
                                <li><span className="li-icon">▶</span> Overleg voeren, opgeleverd werk presenteren en hierop reflecteren</li>
                            </ul>
                        </div>
                        <div className="resume-item-small set-right">
                            <p>2018 t/m 2021</p>
                        </div>
                    </div>
                    <div className="resume-row">
                        <div className="resume-item-large">
                            <h4><span className="purple">MBO</span> - ICT Medewerker en Beheer - Niveau 3</h4>
                            <ul>
                                <li><span className="li-icon">▶</span> Hard- en software installeren</li>
                                <li><span className="li-icon">▶</span> Gard- en software onderhouden en beheren</li>
                                <li><span className="li-icon">▶</span> Systeemgebruikers ondersteunen</li>
                            </ul>
                        </div>
                        <div className="resume-item-small set-right">
                            <p>2016 t/m 2018</p>
                        </div>
                    </div>

                    {/* Professional Experience */}
                    <div className="resume-title">
                        <h4>Professional Experience</h4>
                    </div>

                    <div className="resume-row">
                        <div className="resume-item-large">
                            <h4>Mediamarkt Powerservice Medewerker</h4>
                            <ul>
                                <li><span className="li-icon">▶</span> Het helpen met problemen van smart devices</li>
                                <li><span className="li-icon">▶</span> Probleemoplossingsgericht denken</li>
                                <li><span className="li-icon">▶</span> Het installeren en gebruiksklaar maken van laptops, smartphones en televisies</li>
                                <li><span className="li-icon">▶</span> De data overzetten van oude naar nieuwe apparaten</li>
                                <li><span className="li-icon">▶</span> Ondersteuning bieden aan de klanten van de Mediamarkt</li>
                            </ul>
                        </div>
                        <div className="resume-item-small set-right">
                            <p>2019 t/m heden</p>
                        </div>
                    </div>
                    <div className="resume-row">
                        <div className="resume-item-large">
                            <h4>Stagiaire Developer bij DreamLab</h4>
                            <ul>
                                <li><span className="li-icon">▶</span> Het ontwerpen van websites</li>
                                <li><span className="li-icon">▶</span> Het ontwikkelen van websites met WordPress</li>
                                <li><span className="li-icon">▶</span> Websites onderhouden en aanpassen op verzoek van de opdrachtgever</li>
                                <li><span className="li-icon">▶</span> Communiceren met opdrachtgevers</li>
                            </ul>
                        </div>
                        <div className="resume-item-small set-right">
                            <p>02/2021 t/m 06/2021</p>
                        </div>
                    </div>
                    <div className="resume-row">
                        <div className="resume-item-large">
                            <h4>Stagiare Developer bij RAADHUIS</h4>
                            <ul>
                                <li><span className="li-icon">▶</span> Het ontwikkelen en onderhouden van websites</li>
                                <li><span className="li-icon">▶</span> Aanpassingen aanbrengen aan websites op verzoek van de opdrachtgever</li>
                                <li><span className="li-icon">▶</span> Mee werken aan het ontwerpproces van verschillende projecten</li>
                                <li><span className="li-icon">▶</span> Eindproduct presenteren en uitleg geven aan de opdrachtgever</li>
                            </ul>
                        </div>
                        <div className="resume-item-small set-right">
                            <p>08/2019 t/m 02/2020</p>
                        </div>
                    </div>

                    {/* Skills */}
                    <div className="resume-title">
                        <h4>Skills</h4>
                    </div>

                    <div className="skill-row">
                        <div className="skill-item">
                            <p className="skill-name">HTML</p>
                            <p className="skill-value">8/10</p>
                        </div>
                        <div className="skill-item">
                            <p className="skill-name">HTML</p>
                            <p className="skill-value">8/10</p>
                        </div>
                        <div className="skill-item">
                            <p className="skill-name">HTML</p>
                            <p className="skill-value last-skill">8/10</p>
                        </div>
                    </div>

                    <div className="skill-row">
                        <div className="skill-item">
                            <p className="skill-name">HTML</p>
                            <p className="skill-value">8/10</p>
                        </div>
                        <div className="skill-item">
                            <p className="skill-name">HTML</p>
                            <p className="skill-value">8/10</p>
                        </div>
                        <div className="skill-item">
                            <p className="skill-name">HTML</p>
                            <p className="skill-value last-skill">8/10</p>
                        </div>
                    </div>

                </section>

            </section>
        </div>
    )
}
