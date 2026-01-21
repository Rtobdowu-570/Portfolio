import { useState, useEffect } from 'react';
import {FaArrowRight, FaGithub, FaHtml5, FaCss3, FaJs} from 'react-icons/fa';
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

     const handleClick = () => {
        window.location.href = `${repo.homepage}`;
     }
    

    return (
        <section className="project-section" id="projects">
            <div className="project-container">
                <h2 className="section-title">Recent Projects</h2>
                
                <div className="projects-grid">
                    {newRepo.map((repo) => (
                        <div className="project-card" key={repo.id} onClick={handleClick}>

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
                                    <div className="icon-overlap"> <FaHtml5 className='icon' style={{ fill: "#e34c26" }} /> </div>
                                    <div className="icon-overlap"> <FaCss3  className='icon' style={{ fill: "#264de4"}} /> </div>
                                    <div className="icon-overlap"> <FaJs  className='icon' style={{ fill: "#f7df1e" }}/> </div>
                                    <span className="language-text"></span>
                                </div>
                                
                                <div className="project-link">
                                    <a href={repo.html_url} className="github-link">
                                        <FaGithub className="github-icon" />
                                    </a>
                                    <a href={repo.homepage} className="live-link">
                                    Check Live Site <span className="live-icon-container"><FaArrowRight className="live-icon" style={{ fill: "#cbacf9" }} /></span>
                                </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Project;
