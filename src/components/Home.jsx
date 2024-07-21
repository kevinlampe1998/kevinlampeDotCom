import cvPhoto from "../assets/cv-photo.jpg";
// import { useEffect, useRef, useState } from "react";

const Home = () => {

    return (
        <div id="under-nav" className="under-nav">
            <div className="dev-bg"></div>
            <div id="blue-bg" className="blue-bg"></div>
            <main className="home">
                <section className="my-photo" >
                    <img className="cv-photo" src={cvPhoto} />
                </section>
                <section className="name-and-title">
                    <h1 className="my-name">Kevin Lampe</h1>
                    <h2 className="my-title">Web Developer</h2>
                </section>
            </main>
        </div>
    );
}

export default Home;
