import React from 'react';

function Portfolio() {
    const projects = [
        {
            title: "Project 1",
            image: "link_to_image_of_project_1",
            deployed: "link_to_deployed_project_1",
            github: "link_to_github_repo_project_1"
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
                            <a href={project.deployed} target="_blank" rel="noopener noreferrer">Deployed App</a>
                            {' | '}
                            <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Portfolio;
