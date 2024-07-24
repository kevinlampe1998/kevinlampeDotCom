import { useEffect,
     useState,
    //  useRef
     } from "react";

const infoText = [
    'Zu mir',
    'Sehr geehrte Damen und Herren,',
    'ich bin Web-Developer und biete',
    'Coding/Programming in:',
    'React',
    'Javascript',
    'NextJS',
    'Typescript',
    'natürlich auch HTML & CSS',
    'Zudem publishe ich gerne auch auf:',
    'GitHub Pages',
    'Vercel',
    'All Inkl',
    'usw.',
    'Bei Fragen können Sie mir gerne',
    'per E-Mail eine Nachricht senden:',
    'lampekevin@outlook.com',
    'Mit freundlichen Grüßen',
    'Herr Lampe',
];

const infoText2 = [

    'About me',
    'Dear Ladies and Gentlemen,',
    'I am a web developer and offer',
    'Coding/Programming in:',
    'React',
    'Javascript',
    'NextJS',
    'Typescript',
    'of course also HTML & CSS',
    'I also like to publish on:',
    'GitHub Pages',
    'Vercel',
    'All Inkl',
    'etc.',
    'If you have any questions',
    'send me a message by e-mail:',
    'lampekevin@outlook.com',
    'Yours sincerely',
    'Mr. Lampe',
];


const Info = () => {
    const [sentences, setSentences] = useState({});
    const [sentences2, setSentences2] = useState({});

    const verticalDirection = () => {
        let i = 0;

        const vert = setInterval(() => {
            showInfo(infoText[i], i);
            i++;
            if (i === infoText.length) clearInterval(vert);
        }, 100);
    };

    const showInfo = (word, indx) => {
        let i = 0;
        let wordNow = '';

        const wordInterval = setInterval(() => {

                wordNow = wordNow + word[i];
                let senCopy = JSON.parse(JSON.stringify(sentences));
                senCopy[`row${indx}`] = wordNow;
                setSentences(sentences => ({...sentences, [`row${indx}`]: wordNow}));
                if (wordNow === word) clearInterval(wordInterval);
                i++;
        }, 10);
    };

    const verticalDirection2 = () => {
        let i2 = 0;

        const vert2 = setInterval(() => {
            showInfo2(infoText2[i2], i2);
            console.log(sentences2);
            i2++;
            if (i2 === infoText2.length) clearInterval(vert2);
        }, 100);
    };

    const showInfo2 = (word, indx) => {
        let i2 = 0;
        let wordNow = '';

    
        const wordInterval2 = setInterval(() => {

                wordNow = wordNow + word[i2];
                setSentences2(sentences2 => ({...sentences2, [`row${indx}`]: wordNow}));
                if (wordNow === word) clearInterval(wordInterval2);
                i2++;
        }, 10);
    };

    useEffect(() => {

        verticalDirection();
        verticalDirection2();
    }, []);

    useEffect(() => {
        console.log(sentences2);
    }, [sentences2]);

    return (
        <div className="under-nav">
            <div className="dev-bg"></div>
            <div className="blue-bg"></div>
            <main className="info">

                <section id="textID" className="">
                    <h3>{sentences.row0}</h3>
                    <p>{sentences.row1}</p>
                    <p>{sentences.row2}</p>
                    <p>{sentences.row3}</p>
                    <p>{sentences.row4}</p>
                    <p>{sentences.row5}</p>
                    <p>{sentences.row6}</p>
                    <p>{sentences.row7}</p>
                    <p>{sentences.row8}</p>
                    <p>{sentences.row9}</p>
                    <p>{sentences.row10}</p>
                    <p>{sentences.row11}</p>
                    <p>{sentences.row12}</p>
                    <p>{sentences.row13}</p>
                    <p>{sentences.row14}</p>
                    <p>{sentences.row15}</p>
                    <p>{sentences.row16}</p>
                    <p>{sentences.row17}</p>
                    <p>{sentences.row18}</p>
                    <p>{sentences.row19}</p>
                </section>

                <section>
                    <h3>{sentences2.row0}</h3>
                    <p>{sentences2.row1}</p>
                    <p>{sentences2.row2}</p>
                    <p>{sentences2.row3}</p>
                    <p>{sentences2.row4}</p>
                    <p>{sentences2.row5}</p>
                    <p>{sentences2.row6}</p>
                    <p>{sentences2.row7}</p>
                    <p>{sentences2.row8}</p>
                    <p>{sentences2.row9}</p>
                    <p>{sentences2.row10}</p>
                    <p>{sentences2.row11}</p>
                    <p>{sentences2.row12}</p>
                    <p>{sentences2.row13}</p>
                    <p>{sentences2.row14}</p>
                    <p>{sentences2.row15}</p>
                    <p>{sentences2.row16}</p>
                    <p>{sentences2.row17}</p>
                    <p>{sentences2.row18}</p>
                    <p>{sentences2.row19}</p>
                </section>                
            </main>
        </div >
    );
}

export default Info;
