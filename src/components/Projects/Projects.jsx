import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import makeYouFit from "../../assets/videos/make-you-fit.mp4";
import spaceInvaders from "../../assets/videos/space-invaders.mp4";
import lkCommerce from "../../assets/videos/lk-commerce.mp4";
import twoDShooter from "../../assets/videos/2d-shooter.mp4";
import viewTube from "../../assets/videos/viewtube.mp4";
import socialy from "../../assets/videos/socialy.mp4";
import parallax from "../../assets/videos/natural-energy.mp4";
import toDoManager from "../../assets/videos/to-do-manager.mp4";



const projectList = [
    {
        title: "To Do Manager",
        subtitle: 'MERN',
        video: toDoManager,
        website: "https://to-do-manager.lampe-kevin.com",
        github: ["https://github.com/kevinlampe1998/ToDoManager-Backend",
            'https://github.com/kevinlampe1998/ToDoManager-Frontend']
    },
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
        setShowedProjectsLow(prev => prev + 3);
        setShowedProjectsHigh(prev => prev + 3);
        document.documentElement.scrollTop = 0;
    };

    const prevProjects = () => {
        setShowedProjectsLow(prev => prev - 3);
        setShowedProjectsHigh(prev => prev - 3);
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

                        <ProjectCard
                            title={project.title}
                            subtitle={project.subtitle}
                            video={project.video}
                            website={project.website}
                            github={project.github}
                            key={index}
                        />
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
