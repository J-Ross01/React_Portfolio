import React from 'react';

function Resume() {
    const skills = ["Skill 1", "Skill 2", "Skill 3", "Skill 4"];

    return (
        <section>
            <h2>Resume</h2>
            <p>
                <a href="resume.pdf" download></a>
            </p>
            <h3>Proficiencies</h3>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </section>
    );
}

export default Resume;
