import React from 'react';

function Portfolio() {
    const projects = [
        {
            title: "Project 1",
            image: "",
            deployed: "",
            github: ""
        },
        
    ];

    return (
        <section>
            <h2>Portfolio</h2>
            <div className="portfolio-grid">
                {projects.map((project, index) => (
                    <div key={index} className="portfolio-item">
                        <h3>{project.title}</h3>
                        <img src={project.image} alt={project.title} />
                        <p>
                            <a href={project.deployed} target="blank" rel="">Deployed App</a>
                            {' | '}
                            <a href={project.github} target="blank" rel="https://github.com/J-Ross01/React_Portfolio">GitHub Repo</a>
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Portfolio;
