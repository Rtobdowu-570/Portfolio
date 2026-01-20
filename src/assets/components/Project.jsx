import { useState, useEffect } from 'react';
import {HTML5, CSSNew, JavaScript, React} from './Icons'
import '../styles/main.css';

const Project = () => {
    const [repos, setRepos] = useState([]);
    const name = 'Rtobdowu-570';

    useEffect(() => {
        const fetchProjects = async () => {
            const api_url = `https://api.github.com/users/${name}/repos?sort=updated-desc`;
            try {
                const response = await fetch(api_url);
                const data = await response.json();
                setRepos(data);
            } catch (error) {
                console.error("Error fetching repos:", error);
            }
        };

        fetchProjects();
    }, []);

    const newRepo = repos.slice(0, 5)

    return (
        <section className="project-section" id="projects">
            <div className="project-container">
                <h2 className="section-title">Recent Projects</h2>
                
                <div className="projects-grid">
                    {newRepo.map((repo) => (
                        <div className="project-card" key={repo.id}>

                            {/* Preview Images */}
                            <div className="project-preview">
                                <img src={`https://raw.githubusercontent.com/${name}/${repo.name}/${repo.default_branch}/image.png`} alt="Preview" className="main-img" />
                            </div>

                            {/* Content */}
                            <div className="project-info">
                                <h3 className="project-name">{repo.name}</h3>
                                <p className="project-description">{repo.description}</p>
                            </div>

                            {/* Bottom Row: Footer */}
                            <div className="project-footer">
                                <div className="tech-stack-icons">
                                    <div className="icon-overlap"> <HTML5 /> </div>
                                    <div className="icon-overlap"> <CSSNew /></div>
                                    <div className="icon-overlap"> <JavaScript /> </div>
                                    <span className="language-text"></span>
                                </div>
                                
                                <a href={repo.homepage} className="live-link">
                                    Check Live Site
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Project;
