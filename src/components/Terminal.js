import React, { useEffect } from "react"

export default function Terminal() {

    useEffect(() => {
        const terminal = document.getElementById("terminal")

        // Declare variables for the terminal
        const textArt = document.getElementById("text-art");
        const output = document.getElementById("output")

        const welcomeArt = `
||   / |  / /                                                   
||  /  | / /   ___     //   ___      ___     _   __      ___    
|| / /||/ /  //___))  //  //   ))  //   ))  // ))  ))  //___))  
||/ / |  /  //       //  //       //   //  // //  //  //        
|__/  |_/  ((____   //  ((____   ((___//  // //  //  ((____     
`

        function generateTextArt() {
            textArt.innerHTML = welcomeArt
        }

        // Function to clear the terminal
        function clear() {
            output.innerHTML = ""
            // welcomeMSG.innerHTML = ""
        }

        // Function to make the user a sudo user
        function sudo() {
            output.insertAdjacentHTML('beforeend', `<p><span class="blue">~/tmp/users</span> <span class="red">admin </span><span class="red">> </span>${input.value}</p>`);
            output.insertAdjacentHTML('beforeend', `<p>Permission <span class="yellow">denied</span>: unable to run command.</p>`);
            
            setTimeout(function() {
                window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley', '_blank');
            }, 1500);
        }

        // Function for the help commando
        function help() {
            output.insertAdjacentHTML('beforeend', `<p><span class="blue">~/tmp/users</span> <span class="red">admin </span><span class="red">> </span>${input.value}</p>`);
            output.insertAdjacentHTML('beforeend', `
            <p><span class="yellow" aria-hidden="true">=====></span> Commands <span class="yellow" aria-hidden="true">=====></span></p>
            <p><span class="help-command">clear</span> <span class="help-description grey">Clears the terminal.</span></p>
            <p><span class="help-command">help</span> <span class="help-description grey">List of available commands.</span></p>
            <p><span class="help-command">-v</span> <span class="help-description grey">Shows the current version.</span></p>
            <p><span class="help-command">sudo</span> <span class="help-description grey">Gives user super admin powers.</span></p>
            <p><span class="help-command">github</span> <span class="help-description grey">Redirect to GitHub.</span></p>
            <p><span class="help-command">info</span> <span class="help-description grey">List information.</span></p>
            <p><span class="help-command">time</span> <span class="help-description grey">Shows the current time.</span></p>
            <p><span class="help-command">goto [URL]</span> <span class="help-description grey">Redirects to given URL.</span></p>
            `);
        }

        // Function that shows the current version
        function version() {
            output.insertAdjacentHTML('beforeend', `<p><span class="blue">~/tmp/users</span> <span class="red">admin </span><span class="red">> </span>${input.value}</p>`);
            output.insertAdjacentHTML('beforeend', `<p>Version: <span class="yellow">1.4.1</span></p>`);
        }

        // Function that redirects the user to my GitHub profile
        function github() {
            output.insertAdjacentHTML('beforeend', `<p><span class="blue">~/tmp/users</span> <span class="red">admin </span><span class="red">> </span>${input.value}</p>`);

            output.insertAdjacentHTML('beforeend', `<p>Requesting GitHub profile: <span class="yellow">Knetters</span></p>`);

            output.insertAdjacentHTML('beforeend', `<p>Progress: <span id="progressBar">░░░░░░░░░░░░░░░░░░░░</span></p>`);
            const progressBars = document.querySelectorAll("#progressBar");
            const progressBar = progressBars[progressBars.length - 1];

            let bar = "░░░░░░░░░░░░░░░░░░░░";

            function fillBar() {
                let i = 0;
                let interval = setInterval(function() {
                    if (i === bar.length) {
                        clearInterval(interval);
                            window.open('https://github.com/knetters', '_blank');
                        return;
                    }
                    bar = bar.substring(0, i) + "▓" + bar.substring(i + 1);
                    progressBar.innerHTML = bar;
                    i++;
                }, 1000 / bar.length);
            }

            fillBar();
        }

        // Function that gives the user info
        function info() {
            output.insertAdjacentHTML('beforeend', `<p><span class="blue">~/tmp/users</span> <span class="red">admin </span><span class="red">> </span>${input.value}</p>`);
            
            output.insertAdjacentHTML('beforeend', `<p>Progress: <span id="progressBar">░░░░░░░░░░░░░░░░░░░░</span></p>`);
            const progressBars = document.querySelectorAll("#progressBar");
            const progressBar = progressBars[progressBars.length - 1];

            let bar = "░░░░░░░░░░░░░░░░░░░░";

            function fillBar() {
                let i = 0;
                let interval = setInterval(function() {
                    if (i === bar.length) {
                        clearInterval(interval);
                            output.insertAdjacentHTML('beforeend', `
                            <p><span class="yellow" aria-hidden="true">=====></span> Information <span class="yellow" aria-hidden="true">=====></span></p>
                            <p><span class="info-label">Name:</span> <span class="info-description green">Thomas Scheepers</span></p>
                            <p><span class="info-label">Age:</span> <span class="info-description green">23y</span></p>
                            <p><span class="info-label">Gender:</span> <span class="info-description green">Male</span></p>
                            <p><span class="info-label">Email:</span> <span class="info-description green">thomas@scheepers.com</span></p>
                            <p><span class="info-label">GitHub Name:</span> <span class="info-description yellow">Knetters</span></p>
                        `);
                        return;
                    }
                    bar = bar.substring(0, i) + "▓" + bar.substring(i + 1);
                    progressBar.innerHTML = bar;
                    i++;
                }, 1000 / bar.length);
            }

            fillBar();
        }

        // Function that gives the user info
        function time() {
            let t = new Date();
            let outputTime = t.getHours() + ":" + (t.getMinutes()<10?'0':'') + t.getMinutes();

            output.insertAdjacentHTML('beforeend', `<p><span class="blue">~/tmp/users</span> <span class="red">admin </span><span class="red">> </span>${input.value}</p>`);
            output.insertAdjacentHTML('beforeend', `<p>Current time: <span class="purple">${outputTime}</span></p>`);
        }

        // Function that gos to the url the user types
        function goTo(url) {
            output.insertAdjacentHTML('beforeend', `<p><span class="blue">~/tmp/users</span> <span class="red">admin </span><span class="red">> </span>${input.value}</p>`);
            output.insertAdjacentHTML('beforeend', `<p>Requesting URl:</p>`);
            output.insertAdjacentHTML('beforeend', `<p>Progress: <span id="progressBar">░░░░░░░░░░░░░░░░░░░░</span></p>`);
            const progressBars = document.querySelectorAll("#progressBar");
            const progressBar = progressBars[progressBars.length - 1];

            let bar = "░░░░░░░░░░░░░░░░░░░░";

            function fillBar() {
                let i = 0;
                let interval = setInterval(function() {
                    if (i === bar.length) {
                        clearInterval(interval);
                        window.open(url, '_blank');
                        return;
                    }
                    bar = bar.substring(0, i) + "▓" + bar.substring(i + 1);
                    progressBar.innerHTML = bar;
                    i++;
                }, 1000 / bar.length);
            }

            fillBar(); 
        }

        // Startup functions and values
        generateTextArt()

        let inputElem = document.querySelector("input");
        terminal.addEventListener('load', function(e) {
            inputElem.focus();
        })

        terminal.addEventListener('click', function(e) {
            inputElem.focus();
        })

        const input = document.querySelector('.terminal-input');
        input.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            // If statements for all the functions
            const inputValue = input.value.toLowerCase();

            let words = inputValue.split(" ");
            let assignment = words[0];
            let parameter = words[1];
            if (assignment === "help") {
                help();
            }
            else if (assignment === "clear") {
                clear();
            }
            else if (assignment === "sudo") {
                sudo();
            }
            else if (assignment === "-v") {
                version();
            }
            else if (assignment === "github") {
                github();
            }
            else if (assignment === "info") {
                info();
            }
            else if (assignment === "time") {
                time();
            }
            else if (assignment === "goto") {
                goTo(parameter);
            }
            else if (assignment === "") {
                output.insertAdjacentHTML('beforeend', `<p><span class="blue">~/tmp/users</span> <span class="red">admin </span><span class="red">> </span>${input.value}</p>`);
            }
            // Command failsafe
            else {
                output.insertAdjacentHTML('beforeend', `<p><span class="blue">~/tmp/users</span> <span class="red">admin </span><span class="red">> </span>${input.value}</p>`);
                output.insertAdjacentHTML('beforeend', `<p class="grey">"${input.value}" is not a valid command. Type <span class="blue">help</span> for a list of commands.</p>`);
            }
            input.value = '';
        }
        });
    }, []);

    return (
        <div>
            <h2 id="digital-brain"><span className="grey">&#60;</span>Digital brain <span className="grey">/&#62;</span></h2>
            <section id="terminal" className="terminal">
                <div className="taskbar">
                    <p>♢ Terminal</p>
                    <p className="taskbar-icon">⌥⌘</p>
                </div>
                <div class="terminal-content">
                
                <div id="welcome-msg" className="welcome-msg-margin">
                    <p id="text-art" className="text-art-style" aria-hidden="true"><span className="red" >Terminal disabled</span></p>
                    <p className="bottom-spacing">To my digital brain - Type <span className="purple">help</span> for a list of supported commands.</p>
                </div>

                <div id="output">

                </div>
                <p><span className="blue" aria-hidden="true">~/tmp/users</span> <span className="red" aria-hidden="true">admin &#62;</span><span className="red" aria-hidden="true"> </span><input type="text" autocomplete="off" aria-autocomplete="none" className="terminal-input" spellcheck="false" /></p>
            </div>
            </section>
        </div>
    )
}