import { useEffect, useState } from "react";
import cvPhoto from "../assets/images/cv-photo.jpg";

const showWord = (word, stateSetter) => {
    let i = 0;
    let wordNow = '';

    const wordInterval = setInterval(() => {
        wordNow = wordNow + word[i];
        stateSetter(wordNow);
        wordNow === word && clearInterval(wordInterval);
        i++;
    }, 50);
};

const Home = () => {
    const [name, setName] = useState();
    const [title, setTitle] = useState();

    useEffect(() => {
        showWord('Kevin Lampe', setName);
        showWord('Web Developer', setTitle);
    }, []);

    return (
        <div id="under-nav" className="under-nav">
            <div className="dev-bg"></div>
            <div id="blue-bg" className="blue-bg"></div>
            <main className="home">
                <section className="my-photo" >
                    <img className="cv-photo" src={cvPhoto} />
                </section>
                <section className="name-and-title">
                    <h1 className="my-name">{name}</h1>
                    <h2 className="my-title">{title}</h2>
                </section>
            </main>
        </div>
    );
}

export default Home;
