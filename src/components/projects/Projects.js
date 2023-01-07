import "./Projects.css";
import { BsNewspaper } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { MdScreenShare } from "react-icons/md";
import { RxLapTimer } from "react-icons/rx";
import { TiWeatherPartlySunny } from "react-icons/ti";
import cv_project from "../../images/screencapture-cv-project.png";
import pomodoro_timer from "../../images/screencapture-pomodoro-timer.png";
import the_weather_in_my_city from "../../images/screencapture-the-weather-in-my-city.png"

function Projects() {
    return (
        <div className="projects">
            <div className="projects_container">
                <h1>Some of my Projects</h1>
                <div className="projects_cards">

                    {/* CV PROJECT */}
                    <div className="project_card">
                        <div className="project_card_header">
                            <BsNewspaper />CV Builder Application
                        </div>
                        <div className="project_card_body">
                            <img src={cv_project} alt="cv_project" />
                            <p>
                                A React app which allows users to create their resumes easily respecting the North American rules.
                            </p>
                        </div>
                        <div className="project_card_footer">
                            <a href="https://github.com/IchoubaneMed/cv-project" target="_blank" rel="noreferrer">
                                <BsGithub />
                            </a>
                            <a href="https://ichoubanemed.github.io/cv-project/" target="_blank" rel="noreferrer">
                                <MdScreenShare />
                            </a>
                        </div>
                    </div>

                    {/* POMODORO TIMER */}
                    <div className="project_card flex_end">
                        <div className="project_card_header">
                            <RxLapTimer />Pomodoro Timer
                        </div>
                        <div className="project_card_body">
                            <img src={pomodoro_timer} alt="pomodoro_timer" />
                            <p>
                                The Pomodoro Technique is a time management method based on 25-minute stretches of focused work...
                            </p>
                        </div>
                        <div className="project_card_footer">
                            <a href="https://github.com/IchoubaneMed/pomodoro_timer" target="_blank" rel="noreferrer">
                                <BsGithub />
                            </a>
                            <a href="https://ichoubanemed.github.io/pomodoro_timer/" target="_blank" rel="noreferrer">
                                <MdScreenShare />
                            </a>
                        </div>
                    </div>

                    {/* THE WEATHER IN MY CITY */}
                    <div className="project_card">
                        <div className="project_card_header">
                            <TiWeatherPartlySunny />The Weather In My City
                        </div>
                        <div className="project_card_body">
                            <img src={the_weather_in_my_city} alt="the_weather_in_my_city" />
                            <p>
                                The Weather In My City is an app that gives the user the current weather and extra information...
                            </p>
                        </div>
                        <div className="project_card_footer">
                            <a href="https://github.com/IchoubaneMed/the_weather_in_my_city" target="_blank" rel="noreferrer">
                                <BsGithub />
                            </a>
                            <a href="https://ichoubanemed.github.io/the_weather_in_my_city/" target="_blank" rel="noreferrer">
                                <MdScreenShare />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Projects