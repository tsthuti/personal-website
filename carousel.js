const projects = [
    { title: "mind your step", 
        description: "educating children about the importance of cybersecurity through the gamification of learning.",
        tech: "this project was built using html, css and javascript.", 
        link: "https://github.com/tsthuti/mind-your-step", 
        image: "assets/target-boy copy.png" },
    { title: "optimatch", 
        description: "built an algorithm to track the s&p 500 and the tsx60 using historical data and financial analysis.", 
        tech: "this project was built using python, numpy, numpyfinancial and yfinance API.",
        link: "https://github.com/tsthuti/OptiMatch", 
        image: "assets/stonk.png" },
    { title: "tabby", 
        description: "a chrome extension that saves user tab groups across sessions and allows for efficient workflow organization.", 
        tech: "this project was built using json, css and javascript.",
        link: "https://github.com/tsthuti/tabby", 
        image: "assets/tabby copy.png"},
    { title: "ript", 
        description: "an ai-powered real time workout buddy  that allows for real time feedback and tracks user progress.", 
        tech: "this project was built using react, typescript, node.js, express, mongoDB, gemini API, mediapipe.",
        link: "https://github.com/jennifershi255/ript", 
        image: "assets/ript.png"},
];

let currentIndex = 0;

// update project display
function updateProject() {
    const projectContent = document.querySelector('.project-content');
    projectContent.classList.add('hide');

    setTimeout(() => {
        document.getElementById("project-title").textContent = projects[currentIndex].title;
        document.getElementById("project-description").textContent = projects[currentIndex].description;
        document.getElementById("project-link").href = projects[currentIndex].link;
        document.getElementById("project-tech").textContent = projects[currentIndex].tech;
        document.getElementById("project-image").src = projects[currentIndex].image;

        projectContent.classList.remove('hide');
        projectContent.classList.add('show');
    }, 1000);
}

// cycles every 5 seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % projects.length;
    updateProject();
}, 5000);

// first project init
updateProject();
