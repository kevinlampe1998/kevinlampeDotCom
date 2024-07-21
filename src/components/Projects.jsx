// import { useRef, useState } from "react";

const myProjects = Array(4).fill("");

const Projects = () => {
    // const [visible, setVisible] = useState([0, 1, 2, 3]);
    // const frame = useRef();
    // for (let i; i < 21; i++) {
    //     myProjects.push({
    //         name: `${i}`
    //     });
    // }
    // console.log(myProjects);


    // const nextProjects = () => {
    //     let copy = JSON.parse(JSON.stringify(visible));
    //     copy = copy.map(e => e + 1);
    //     console.log(copy);
    //     console.log(Object.values(frame.current.children));
    //     Object.values(frame.current.children).forEach(e => e.className = "display-none");
    //     setVisible(copy);
    //     visible.forEach(e => Object.values(frame.current.children)[e].className = "display-block");

    // }

    return (
        <div className="under-nav">
            <div className="dev-bg"></div>
            <div className="blue-bg"></div>
            <main className="projects" >
                <section id="projects" className="project-items"
                // ref={frame}
                >
                    {myProjects.map((project, index) => (
                        index < 4 &&
                        <a key={index}>
                            <iframe
                                src="http://localhost:5173/"
                            ></iframe>
                        </a>
                    ))}
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
