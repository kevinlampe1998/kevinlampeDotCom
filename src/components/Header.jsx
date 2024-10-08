import { useEffect, useRef } from "react";

const Header = () => {
    const header = useRef();

    useEffect(() => {
        const advertise = Object.values(header.current.children);

        const createAdvertise = () => {
            let random = Math.round(Math.random() * (advertise.length - 1));
            advertise.forEach(e => e.style.display = "none");
            advertise[random].style.display = "block";
            advertise[random].animate(
                {
                    opacity: [0, 1],
                    transform: ["scale(0.5, 0.5)", "scale(0.7, 0.7)"],
                    animationIterationCount: 1
                },
                4000
            );
        }
        createAdvertise();

        setInterval(() => createAdvertise(), 4000);

    }, []);

    return (
        <header ref={header}>
            <h1>Web Dev</h1>
            <h1>Full Stack</h1>
            <h1>Typescript</h1>
            <h1>NextJS</h1>
            <h1>HTML</h1>
            <h1>CSS/SASS</h1>
            <h1>React</h1>
            <h1>ExpressJS</h1>
            <h1>MONGO DB</h1>
        </header>
    );
}

export default Header;
