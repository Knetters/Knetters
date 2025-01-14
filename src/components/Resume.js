import React, { useEffect } from "react"

export default function Resume() {

    useEffect(() => {
        // Get all the h4 elements
        const h4Elements = document.querySelectorAll('.resume-item-large h4');

        // Add click event listeners to each h4 element
        h4Elements.forEach(h4Element => {
            h4Element.addEventListener('click', () => {
                // Toggle the visibility of the ul element inside the parent div
                const ulElement = h4Element.nextElementSibling; // Assuming the ul is a sibling element
                if (ulElement.style.display === 'none' || ulElement.style.display === '') {
                    ulElement.style.display = 'block';
                } else {
                    ulElement.style.display = 'none';
                }
            });
        });
    }, []);

    return (
        <div className="resume-container">
            <h2 id="resume"><span className="grey">&#60;</span>Resume <span className="grey">/&#62;</span></h2>

            <section className="long-panel intro-panel">
                <div className="taskbar">
                    <p>♢ My digital resume</p>
                </div>

                <section id="exportPDF" className="inner-resume-container">

                    {/* Practical */}
                    <div className="resume-title">
                        <h3>Practical information</h3>
                    </div>

                    <div className="skill-row">
                        <div className="skill-item">
                            <p className="skill-name">Voornaam</p>
                            <p className="skill-value">Thomas. J. B.</p>
                        </div>
                        <div className="skill-item">
                            <p className="skill-name">Familienaam</p>
                            <p className="skill-value">Scheepers</p>
                        </div>
                        <div className="skill-item">
                            <p className="skill-name">Geboren op</p>
                            <p className="skill-value last-skill">28 feb, 2000</p>
                        </div>
                    </div>

                    <div className="skill-row">
                        <div className="skill-item">
                            <p className="skill-name">Geslacht</p>
                            <p className="skill-value">Man</p>
                        </div>
                        <div className="skill-item">
                            <p className="skill-name">Nationaliteit</p>
                            <p className="skill-value">Nederlands</p>
                        </div>
                        <div className="skill-item">
                            <p className="skill-name">Woonplaats</p>
                            <p className="skill-value last-skill">Alkmaar</p>
                        </div>
                    </div>

                    {/* Education */}
                    <div className="resume-title">
                        <h3>Education</h3>
                    </div>

                    <div className="resume-row">
                        <div className="resume-item-large">
                            <h4 tabindex="0"><span className="red">HBO</span> - Frontend Design en Development (FDND)</h4>
                            <ul>
                                <li><span className="li-icon">▶</span> Analyseren van opdrachten</li>
                                <li><span className="li-icon">▶</span> Werken met complexe front-end toepassingen</li>
                                <li><span className="li-icon">▶</span> Werken in front-end frameworks met een headless CMS</li>
                                <li><span className="li-icon">▶</span> Nette code schrijven en omgaan met toegankelijkheid, performance en responsive webdesign</li>
                            </ul>
                        </div>
                        <div className="resume-item-small set-right">
                            <p>2022 t/m 2024</p>
                        </div>
                    </div>
                    <div className="resume-row">
                        <div className="resume-item-large">
                            <h4 tabindex="0"><span className="red">MBO</span> - Media en Applicatie Ontwikkelaar - Niveau 4</h4>
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
                            <h4 tabindex="0"><span className="red">MBO</span> - ICT Medewerker en Beheer - Niveau 3</h4>
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
                        <h3>Professional Experience</h3>
                    </div>

                    <div className="resume-row">
                        <div className="resume-item-large">
                            <h4 tabindex="0">Junior Web Developer bij Triple</h4>
                            <ul>
                                <li><span className="li-icon">▶</span> Het creëren van makkelijk te gebruiken HTML snippets voor de klant met Storybook en React.</li>
                                <li><span className="li-icon">▶</span> Onderzoek doen op het gebied van v0 ai toepassingen en het gebruik voor Triple.</li>
                            </ul>
                        </div>
                        <div className="resume-item-small set-right">
                            <p>08/2024 t/m heden</p>
                        </div>
                    </div>
                    <div className="resume-row">
                        <div className="resume-item-large">
                            <h4 tabindex="0">Stagiair Web Developer bij Triple</h4>
                            <ul>
                                <li><span className="li-icon">▶</span> Onderzoeken en bouwen van nieuwe technologieen met Contentful Studio.</li>
                                <li><span className="li-icon">▶</span> TypeScript leren doormiddel van een movie picker app voor SmartTv's.</li>
                                <li><span className="li-icon">▶</span> Toepassen van creatieve oplossingen in projecten van klanten van Triple.</li>
                                <li><span className="li-icon">▶</span> Verantwooding nemen voor eigen resultaten binnen projecten in een team.</li>
                            </ul>
                        </div>
                        <div className="resume-item-small set-right">
                            <p>02/2024 t/m 06/2024</p>
                        </div>
                    </div>
                    <div className="resume-row">
                        <div className="resume-item-large">
                            <h4 tabindex="0">Stagiair Developer bij DreamLab</h4>
                            <ul>
                                <li><span className="li-icon">▶</span> Het ontwerpen van websites.</li>
                                <li><span className="li-icon">▶</span> Het ontwikkelen van websites met WordPress.</li>
                                <li><span className="li-icon">▶</span> Websites onderhouden en aanpassen op verzoek van de opdrachtgever.</li>
                                <li><span className="li-icon">▶</span> Communiceren met opdrachtgevers.</li>
                            </ul>
                        </div>
                        <div className="resume-item-small set-right">
                            <p>02/2021 t/m 06/2021</p>
                        </div>
                    </div>
                    <div className="resume-row">
                        <div className="resume-item-large">
                            <h4 tabindex="0">Stagiair Developer bij RAADHUIS</h4>
                            <ul>
                                <li><span className="li-icon">▶</span> Het ontwikkelen en onderhouden van websites.</li>
                                <li><span className="li-icon">▶</span> Aanpassingen aanbrengen aan websites op verzoek van de opdrachtgever.</li>
                                <li><span className="li-icon">▶</span> Mee werken aan het ontwerpproces van verschillende projecten.</li>
                                <li><span className="li-icon">▶</span> Eindproduct presenteren en uitleg geven aan de opdrachtgever.</li>
                            </ul>
                        </div>
                        <div className="resume-item-small set-right">
                            <p>08/2019 t/m 02/2020</p>
                        </div>
                    </div>
                    <div className="resume-row">
                        <div className="resume-item-large">
                            <h4 tabindex="0">Mediamarkt Powerservice Medewerker</h4>
                            <ul>
                                <li><span className="li-icon">▶</span> Het helpen met problemen van smart devices.</li>
                                <li><span className="li-icon">▶</span> Probleemoplossingsgericht denken.</li>
                                <li><span className="li-icon">▶</span> Het installeren en gebruiksklaar maken van laptops, smartphones en televisies.</li>
                                <li><span className="li-icon">▶</span> De data overzetten van oude naar nieuwe apparaten.</li>
                                <li><span className="li-icon">▶</span> Ondersteuning bieden aan de klanten van de Mediamarkt.</li>
                            </ul>
                        </div>
                        <div className="resume-item-small set-right">
                            <p>2019 t/m 2024</p>
                        </div>
                    </div>

                    {/* Skills */}
                    <div className="resume-title">
                        <h3>Skills</h3>
                    </div>

                    <div className="skill-row">
                        <div className="skill-item">
                            <p className="skill-name">HTML</p>
                            <p className="skill-value">8/10</p>
                        </div>
                        <div className="skill-item">
                            <p className="skill-name">CSS</p>
                            <p className="skill-value">8/10</p>
                        </div>
                        <div className="skill-item">
                            <p className="skill-name">JavaScript</p>
                            <p className="skill-value last-skill">7/10</p>
                        </div>
                    </div>

                    <div className="skill-row">
                        <div className="skill-item">
                            <p className="skill-name">Python</p>
                            <p className="skill-value">7/10</p>
                        </div>
                        <div className="skill-item">
                            <p className="skill-name">C#</p>
                            <p className="skill-value">5/10</p>
                        </div>
                        <div className="skill-item">
                            <p className="skill-name">CLI</p>
                            <p className="skill-value last-skill">7/10</p>
                        </div>
                    </div>

                    <div className="skill-row">
                        <div className="skill-item">
                            <p className="skill-name">Windows</p>
                            <p className="skill-value">9/10</p>
                        </div>
                        <div className="skill-item">
                            <p className="skill-name">MacOS</p>
                            <p className="skill-value">8/10</p>
                        </div>
                        <div className="skill-item">
                            <p className="skill-name">Linux</p>
                            <p className="skill-value last-skill">5/10</p>
                        </div>
                    </div>

                    <div className="skill-row">
                        <div className="skill-item">
                            <p className="skill-name">SvelteKit</p>
                            <p className="skill-value">7/10</p>
                        </div>
                        <div className="skill-item">
                            <p className="skill-name">Next.js</p>
                            <p className="skill-value">6/10</p>
                        </div>
                        <div className="skill-item">
                            <p className="skill-name">Toegankelijkheid</p>
                            <p className="skill-value last-skill">8/10</p>
                        </div>
                    </div>

                    <div className="skill-row">
                        <div className="skill-item">
                            <p className="skill-name">Customer care</p>
                            <p className="skill-value">9/10</p>
                        </div>
                        <div className="skill-item">
                            <p className="skill-name">Scrum</p>
                            <p className="skill-value">8/10</p>
                        </div>
                        <div className="skill-item">
                            <p className="skill-name">Figma</p>
                            <p className="skill-value last-skill">9/10</p>
                        </div>
                    </div>

                    <div className="resume-title">
                        <h3>Languages</h3>
                    </div>

                    <div className="skill-row">
                        <div className="skill-item">
                            <p className="skill-name">Nederlands</p>
                            <p className="skill-value">9/10</p>
                        </div>
                        <div className="skill-item">
                            <p className="skill-name">Engels</p>
                            <p className="skill-value">8/10</p>
                        </div>
                        <div className="skill-item">
                            <p className="skill-name">Klingon</p>
                            <p className="skill-value last-skill">2/10</p>
                        </div>
                    </div>

                    <div className="resume-title">
                        <h3>Extra</h3>
                    </div>

                    <div className="skill-row">
                        <div className="skill-item">
                            <p className="skill-name">Rijbewijs</p>
                            <p className="skill-value">B</p>
                        </div>
                        <div className="skill-item">
                            <p className="skill-name"></p>
                            <p className="skill-value"></p>
                        </div>
                        <div className="skill-item">
                            <p className="skill-name"></p>
                            <p className="skill-value last-skill"></p>
                        </div>
                    </div>

                </section>

            </section>
        </div>
    )
}
