import "./About.css";
import me_2 from "../../images/me_2.jpeg";

function About() {
    return (
        <div className="about">
            <div className="about_clip"></div>
            <div className="about_title">
                <h1>About Me</h1>
            </div>
            <div className="about_content">
                <div className="about_img">
                    <div className="about_border_1"></div>
                    <div className="about_border_2"></div>
                    <img src={me_2} alt="Ichoubane Mohamed" />
                </div>
                <div className="about_text">
                    <p>
                        Hello, I’m Mohamed, and I’m passionate about building things for the web. I started my journey as a developer when I was a student in the college. I found a tutorial on how to develop user interfaces using vanilla JavaScript, and once that happened, I was completely hooked to the world of computers.
                    </p>
                    <p>
                        In the years, I’ve cultivated my passion for coding by studying the IT field, by most of all by building applications using JavaScript, so that I could challenge my self.
                    </p>
                    <p>
                        Lately, I’ve discovered my passion for the world of web development and the beauty of behind building useful websites like the one you will find in this portfolio, I’m now looking for a dev position to finally kick start my career and learn among professionals.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;