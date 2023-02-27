import './Home.css';
import me from '../../images/me.JPG';
import github from '../../images/github.png';
import linkedin from '../../images/linkedin.png';

import { useState, useEffect, useRef } from 'react';

function Home() {
    const [word, setWord] = useState("Full Stack Developer");
    const [letterIndex, setLetterIndex] = useState(0);
    const [currentWord, setCurrentWord] = useState("");
    const timeoutRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setWord("");
            setTimeout(() => setWord("Full Stack Developer"), 1000);
        }, 12000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (letterIndex < word.length) {
            timeoutRef.current = setTimeout(() => {
                setCurrentWord(currentWord + word.charAt(letterIndex));
                setLetterIndex(letterIndex + 1);
            }, 100);
        } else {
            timeoutRef.current = setTimeout(() => {
                setCurrentWord("");
                setLetterIndex(0);
            }, 1000);
        }

        return () => clearTimeout(timeoutRef.current);
    }, [currentWord, letterIndex, word]);


    return (
        <div className="home">
            <div className="home_1"></div>
            <div className="home_2">
                <h1>Hi, there
                    <picture>
                        <source srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.webp" type="image/webp" />
                        <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.gif" alt="👋" width="32" height="32" />
                    </picture>
                </h1>
                <h1>I'm <span className="purple">Mohamed Ichoubane</span></h1>
                {/*<div className="wrapper">
                    <div className="static-txt">I'm a</div>
                    <ul className="dynamic-txts">
                        <li><span>GIS Engineer</span></li>
                        <li><span>GIS Developer</span></li>
                        <li><span>Front End Developer</span></li>
                    </ul>
                </div>*/}
                <h1>I'm a <span className="orange" id="word">{currentWord}</span></h1>
                <div className="links">
                    <a href="https://github.com/IchoubaneMed" target="_blank" rel="noreferrer">
                        <img src={github} alt="github" />
                    </a>
                    <a href="https://www.linkedin.com/in/mohamed-ichoubane/" target="_blank" rel="noreferrer">
                        <img src={linkedin} alt="linkedin" />
                    </a>
                </div>
            </div>
            <div className="home_picture">
                <img src={me} alt="Ichoubane Mohamed" />
            </div>
        </div>
    );
}

export default Home;