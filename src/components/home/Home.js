import './Home.css';
import me from '../../images/me.JPG';
import github from '../../images/github.png';
import linkedin from '../../images/linkedin.png';

function Home() {
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
                <h1>I'm a <span className="orange">Front-End developer</span></h1>
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