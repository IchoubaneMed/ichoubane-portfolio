import "./Skills.css";
import Html5 from "../../images/html5.png";
import Css3 from "../../images/css3.png";
import JavaScript from "../../images/javascript.png";
import ReactLib from "../../images/react.png";
import Redux from "../../images/redux.png";
import Sass from "../../images/sass.png";
import Bootstrap from "../../images/bootstrap.png";
import Git from "../../images/git.png";
import Inkscape from "../../images/inkscape.png";
import Postgresql from "../../images/postgresql.png";
import Python from "../../images/python.png";

function Skills() {
    return (
        <div className="skills">
            <div className="skills_container">
                <h1>My Skills</h1>
                <div className="skills_cards">

                    {/* HTML5 */}
                    <div className="skills_card">
                        <img src={Html5} alt="Html5" />
                        <div className="skills_card_title">
                            <h3>Html5</h3>
                        </div>
                    </div>
                    {/* --- */}

                    {/* CSS3 */}
                    <div className="skills_card">
                        <img src={Css3} alt="Css3" />
                        <div className="skills_card_title">
                            <h3>Css3</h3>
                        </div>
                    </div>
                    {/* --- */}

                    {/* JAVASCRIPT */}
                    <div className="skills_card">
                        <img src={JavaScript} alt="JavaScript" />
                        <div className="skills_card_title">
                            <h3>JavaScript</h3>
                        </div>
                    </div>
                    {/* --- */}

                    {/* REACT */}
                    <div className="skills_card">
                        <img src={ReactLib} alt="React" />
                        <div className="skills_card_title">
                            <h3>React</h3>
                        </div>
                    </div>
                    {/* --- */}

                    {/* REDUX */}
                    <div className="skills_card">
                        <img src={Redux} alt="Redux" />
                        <div className="skills_card_title">
                            <h3>Redux</h3>
                        </div>
                    </div>
                    {/* --- */}

                    {/* SASS */}
                    <div className="skills_card">
                        <img src={Sass} alt="Sass" />
                        <div className="skills_card_title">
                            <h3>Sass</h3>
                        </div>
                    </div>
                    {/* --- */}

                    {/* BOOTSTRAP */}
                    <div className="skills_card">
                        <img src={Bootstrap} alt="Bootstrap" />
                        <div className="skills_card_title">
                            <h3>Bootstrap</h3>
                        </div>
                    </div>
                    {/* --- */}

                    {/* GIT */}
                    <div className="skills_card">
                        <img src={Git} alt="Git" />
                        <div className="skills_card_title">
                            <h3>Git</h3>
                        </div>
                    </div>
                    {/* --- */}

                    {/* INKSCAPE */}
                    <div className="skills_card">
                        <img src={Inkscape} alt="Inkscape" />
                        <div className="skills_card_title">
                            <h3>Inkscape</h3>
                        </div>
                    </div>
                    {/* --- */}

                    {/* POSTGRESQL */}
                    <div className="skills_card">
                        <img src={Postgresql} alt="Postgresql" />
                        <div className="skills_card_title">
                            <h3>Postgresql</h3>
                        </div>
                    </div>
                    {/* --- */}

                    {/* PYTHON */}
                    <div className="skills_card">
                        <img src={Python} alt="Python" />
                        <div className="skills_card_title">
                            <h3>Python</h3>
                        </div>
                    </div>
                    {/* --- */}

                </div>

            </div>
        </div>
    );
}

export default Skills;