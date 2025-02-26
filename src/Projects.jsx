import React, { useState } from "react";
import quizsnapCircleImg from "./assets/quizsnap-box.png";
import quizsnapPreview from "./assets/quizsnap-preview.png";
import houseOfFarkle from "./assets/house-of-farkle-logo.png";
import goldReservesPreview from "./assets/gold-standard-preview.png";
import flag from "./assets/fictional-nation.png";
import flagPreview from "./assets/flag-preview.png";
import gkFerre from "./assets/gk-ferre.png";
import gkFerrePreview from "./assets/biryani-preview.png";
import dice from "./assets/dice-and-dungeons.png";
import dicePreview from "./assets/dice-preview.png";
import freeBGMS from "./assets/freeBGMS.png";
import freeBGMSPreview from "./assets/freeBGMS-preview.png";
import farklePreview from "./assets/farkle-preview.png";

function Projects() {
    const [hoveredCard, setHoveredCard] = useState(null); // Track hovered card

    const handleMouseEnter = (cardName) => {
        setHoveredCard(cardName);
    };

    const handleMouseLeave = () => {
        setHoveredCard(null);
    };

    const projectCards = [
        {
            name: "quizsnap",
            href: "https://gianferre.github.io/quizsnap/",
            image: quizsnapCircleImg,
            preview: quizsnapPreview,
            title: "QuizSnap",
            text: "Take fun and engaging quizzes on a variety of topics. Whether you're testing your knowledge or just looking for a quick brain break, QuizSnap makes it easy and enjoyable to dive into trivia!",
        },
        {
            name: "house-of-farkle",
            href: "https://gianferre.github.io/house-of-farkle/",
            image: houseOfFarkle,
            preview: farklePreview,
            title: "House of Farkle",
            text: "A digital adaptation of the classic dice game Farkle. Play, strategize, and test your luck in this engaging web-based experience.",
        },
        {
            name: "GK Ferre",
            href: "https://gianferre.github.io/biryani-house/",
            image: gkFerre,
            preview: gkFerrePreview,
            title: "GK Ferre",
            text: "Experience the rich flavors of biryani, crafted with the finest ingredients and traditional recipes.",
        },
        {
            name: "design-a-nation",
            href: "about:blank",
            image: flag,
            preview: flagPreview,
            title: "Design-a-Nation",
            text: "Create custom national flags with this interactive app, exploring flag symbolism and history.",
        },
        {
            name: "dice-and-dungeons",
            href: "about:blank",
            image: dice,
            preview: dicePreview,
            title: "Dice & Dungeons",
            text: "A dice-driven mini-RPG where players use dice rolls to battle, explore dungeons, and solve puzzles.",
        },
        {
            name: "free-bgms",
            href: "about:blank",
            image: freeBGMS,
            preview: freeBGMSPreview,
            title: "Free BGMs",
            text: "A collection of royalty-free background music tracks for use in games, videos, and other projects.",
        },
    ];

    return (
        <div className="project-page-container">
            <div className="project-container">
                <h1 className="project-container-title">My Works</h1>
                <div className="card-organizer">
                    {projectCards.map((card) => (
                        <a
                            key={card.name}
                            href={card.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="card-link"
                        >
                            <div
                                className={`card quizsnap-card ${hoveredCard === card.name ? "hovered" : ""}`}
                                onMouseEnter={() => handleMouseEnter(card.name)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div
                                    className="background-overlay"
                                    style={{
                                        backgroundImage: hoveredCard === card.name ? `url(${card.preview})` : "none",
                                    }}
                                ></div>
                                <img
                                    className={`card-image ${hoveredCard === card.name ? "hidden" : ""}`}
                                    src={card.image}
                                    alt={card.title}
                                />
                                <div className="textBlock">
                                    <h2 className="card-title">{card.title}</h2>
                                    <p className="card-text">{card.text}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;
