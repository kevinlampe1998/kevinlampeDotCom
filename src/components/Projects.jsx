import { useEffect, useState } from "react";
import makeYouFit from "../assets/videos/make-you-fit.mp4";
import spaceInvaders from "../assets/videos/space-invaders.mp4";
import lkCommerce from "../assets/videos/lk-commerce.mp4";
import twoDShooter from "../assets/videos/2d-shooter.mp4";
import viewTube from "../assets/videos/viewtube.mp4";
import socialy from "../assets/videos/socialy.mp4";
import parallax from "../assets/videos/natural-energy.mp4";



const projectList = [
    {
        title: "ViewTube",
        subtitle: 'React',
        video: viewTube,
        website: "https://viewtube.lampe-kevin.com",
        github: "https://github.com/kevinlampe1998/ViewTube"
    },
    {
        title: "Socialy",
        subtitle: 'React Typescript',
        video: socialy,
        website: "https://socialy.lampe-kevin.com",
        github: "https://github.com/kevinlampe1998/Socialy"
    },
    {
        title: "Make You Fit",
        subtitle: <span>Made with my Collaborator Mr. Philipp Sauerl&#228;nder</span>,
        video: makeYouFit,
        website: "https://make-you-fit.lampe-kevin.com",
        github: "https://github.com/kevinlampe1998/MakeYouFit"
    },
    {
        title: "Parallax",
        subtitle: 'Parallax, React, Natural Energy',
        video: parallax,
        website: "https://natural-energy.lampe-kevin.com/",
        github: "https://github.com/kevinlampe1998/parralax"
    },
    {
        title: "LK Commerce",
        subtitle: 'E-Commerce, React',
        video: lkCommerce,
        website: "https://lk-commerce.lampe-kevin.com",
        github: "https://github.com/kevinlampe1998/E-Commerce"
    },
    {
        title: "Space Invaders",
        subtitle: "Node JS",
        video: spaceInvaders,
        website: "only in the command line",
        github: "https://github.com/kevinlampe1998/space-invaders"
    },
    {
        title: "2D Shooter",
        subtitle: 'JS in Browser',
        video: twoDShooter,
        website: "https://2d-shooter.lampe-kevin.com",
        github: "https://github.com/kevinlampe1998/2d-shooter"
    },
]

const Projects = () => {
    const [showedProjectsLow, setShowedProjectsLow] = useState(-1);
    const [showedProjectsHigh, setShowedProjectsHigh] = useState(3);

    useEffect(() => {
    }, []);

    const nextProjects = () => {
        setShowedProjectsLow(prev => prev + 4);
        setShowedProjectsHigh(prev => prev + 4);
        document.documentElement.scrollTop = 0;
    };

    const prevProjects = () => {
        setShowedProjectsLow(prev => prev - 4);
        setShowedProjectsHigh(prev => prev - 4);
        document.documentElement.scrollTop = 0;
    };

    return (
        <div className="under-nav" >
            <div className="dev-bg"></div>
            <div className="blue-bg"></div>
            <main className="projects" >
                <section id="projects" className="project-items">
                {
                    projectList.map((project, index) => (
                        index > showedProjectsLow && index < showedProjectsHigh &&

                        <div className="video-container" key={index}>
                            <h2>{project.title}</h2>
                            <h3>{project.subtitle}</h3>
                            <video autoPlay loop muted>
                                <source  src={project.video} type="video/mp4"/>
                                <h1>Your Browser does not support the video format</h1>
                            </video>
                            <div>Website </div>

                            {project.website.slice(0,5) === "https" ?
                            <a target="_blank" href={project.website}>WWW</a>
                            : <a
                                style={{
                                    color: "#000",
                                    textDecoration: "none",
                                    background: "rgb(0, 100, 255, 0.5)",
                                    borderRadius: "5px",
                                    border: "5px solid #555"
                                }}
                            >{project.website}</a>
                            }

                            <div>Github </div><a target="_blank" href={project.github}><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                                                    <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
                                                    </svg>
                                                </a>
                        </div>
                    ))
                }

                </section>
                <section className="projects-nav">
                    <button
                    style={{display: `${showedProjectsLow === -1 ? "none" : "inline"}`}}
                    onClick={prevProjects}
                    >Back</button>
                    <button
                    style={{display: `${showedProjectsHigh >= projectList.length ? "none" : "inline"}`}}
                    onClick={nextProjects}
                    >Next</button>
                </section>
            </main>
        </div>
    );
}

export default Projects;
