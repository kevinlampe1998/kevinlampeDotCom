// import { useRef, useState } from "react";
import { useEffect } from "react";
import makeYouFit from "../assets/videos/make-you-fit.mp4";
import spaceInvaders from "../assets/videos/space-invaders.mp4";

const projectList = [
    {
        title: "Make You Fit",
        subtitle: <span>Made with my Collaborator Mr. Philipp Sauerl&#228;nder</span>,
        video: makeYouFit,
        website: "https://make-you-fit.lampe-kevin.com",
        github: "https://github.com/kevinlampe1998/MakeYouFit"
    },
    {
        title: "Space Invaders",
        subtitle: "Save our World",
        video: spaceInvaders,
        website: "only in the command line",
        github: "https://github.com/kevinlampe1998/space-invaders"
    },
    {
        title: "Make You Fit",
        subtitle: <span>Made with my Collaborator Mr. Philipp Sauerl&#228;nder</span>,
        video: makeYouFit,
        website: "https://make-you-fit.lampe-kevin.com",
        github: "https://github.com/kevinlampe1998/MakeYouFit"
    },
]

const Projects = () => {

    useEffect(() => {
    }, []);

    return (
        <div className="under-nav">
            <div className="dev-bg"></div>
            <div className="blue-bg"></div>
            <main className="projects" >
                <section id="projects" className="project-items">
                {
                    projectList.map((project, index) => (
                        <div className="video-container" key={index}>
                            <div className="video-bg"></div>
                            <h2>{project.title}</h2>
                            <h3>{project.subtitle}</h3>
                            <video autoPlay loop muted>
                                <source  src={project.video} type="video/mp4"/>
                                <h1>Your Browser does not support the video format</h1>
                            </video>
                            <div>Website: </div><a target="_blank" href={project.website}>{project.website}</a>
                            <div>Github: </div><a target="_blank" href={project.github}>{project.github}</a>
                        </div>
                    ))
                }

                </section>
                <section className="projects-nav">
                    <button>Back</button>
                    <button
                    // onClick={nextProjects}
                    >Next</button>
                </section>
            </main>
        </div>
    );
}

export default Projects;
