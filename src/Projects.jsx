import React, { useState } from "react";
import sampleImage from "./assets/quizsnap-preview.png";
import quizsnapCircleImg from "./assets/quizsnap-box.png";
import goldReserves from "./assets/gold-reserves.png";
import flag from "./assets/fictional-nation.png";
import gkFerre from "./assets/gk-ferre.png";
import dice from "./assets/dice-and-dungeons.png";
import freeBGMS from "./assets/freeBGMS.png";

function Projects() {
    const [hoveredCard, setHoveredCard] = useState(null); // Track hovered card

    const handleMouseEnter = (cardName) => {
        setHoveredCard(cardName);
    };

    const handleMouseLeave = () => {
        setHoveredCard(null);
    };

    return (
        <div className="project-container">
            <h1 className="project-container-title">My Works</h1>
            <div className="card-organizer">
                {/* QuizSnap Card */}
                <a
                    href="https://gianferre.github.io/quizsnap/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-link"
                >
                    <div
                        className={`card quizsnap-card ${hoveredCard === "quizsnap" ? "hovered" : ""}`}
                        onMouseEnter={() => handleMouseEnter("quizsnap")}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div
                            className="background-overlay"
                            style={{
                                backgroundImage: hoveredCard === "quizsnap" ? `url(${sampleImage})` : "none",
                            }}
                        ></div>
                        <img
                            className={`card-image ${hoveredCard === "quizsnap" ? "hidden" : ""}`}
                            src={quizsnapCircleImg}
                            alt="QuizSnap"
                        />
                        <div className="textBlock">
                            <h2 className="card-title">QuizSnap</h2>
                            <p className="card-text">
                                A web app that lets users easily create, customize, and share quizzes. With a simple interface, it makes quiz-building fun and hassle-free for everyone.
                            </p>
                        </div>
                    </div>
                </a>

                {/* Other Project Cards with Placeholder Links */}
                <a href="#" className="card-link">
                    <div className="card">
                        <img className="card-image" src={goldReserves} alt="Gold Reserves" />
                        <h2 className="card-title">Golden Standard 1971</h2>
                        <p className="card-text">
                            A website that converts dollar amounts into gold based on the 1971 exchange rate of $35 per ounce.
                        </p>
                    </div>
                </a>
                <a href="#" className="card-link">
                    <div className="card">
                        <img className="card-image" src={flag} alt="Design-a-Nation" />
                        <h2 className="card-title">Design-a-Nation</h2>
                        <p className="card-text">
                            Create custom national flags with this interactive app, exploring flag symbolism and history.
                        </p>
                    </div>
                </a>
                <a href="#" className="card-link">
                    <div className="card">
                        <img className="card-image" src={gkFerre} alt="Biryani House" />
                        <h2 className="card-title">Biryani House</h2>
                        <p className="card-text">
                            An e-commerce website for ordering authentic biryani, with secure payment and customizable options.
                        </p>
                    </div>
                </a>
                <a href="#" className="card-link">
                    <div className="card">
                        <img className="card-image" src={dice} alt="Dice & Dungeons" />
                        <h2 className="card-title">Dice & Dungeons</h2>
                        <p className="card-text">
                            A dice-driven mini-RPG where players use dice rolls to battle, explore dungeons, and solve puzzles.
                        </p>
                    </div>
                </a>
                <a href="#" className="card-link">
                    <div className="card">
                        <img className="card-image" src={freeBGMS} alt="Free BGMs" />
                        <h2 className="card-title">Free BGMs</h2>
                        <p className="card-text">
                            A collection of royalty-free background music tracks for use in games, videos, and other projects.
                        </p>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Projects;
