import React, { useState } from "react";
import quizsnapCircleImg from "./assets/quizsnap-box.png";
import quizsnapPreview from "./assets/quizsnap-preview.png";
import goldReserves from "./assets/gold-reserves.png";
import goldReservesPreview from "./assets/gold-standard-preview.png";
import flag from "./assets/fictional-nation.png";
import flagPreview from "./assets/flag-preview.png";
import gkFerre from "./assets/gk-ferre.png";
import gkFerrePreview from "./assets/biryani-preview.png";
import dice from "./assets/dice-and-dungeons.png";
import dicePreview from "./assets/dice-preview.png";
import freeBGMS from "./assets/freeBGMS.png";
import freeBGMSPreview from "./assets/freeBGMS-preview.png";

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
            text: "A web app that lets users easily create, customize, and share quizzes. It makes quiz-building fun and hassle-free for everyone.",
        },
        {
            name: "gold-standard",
            href: "about:blank",
            image: goldReserves,
            preview: goldReservesPreview,
            title: "Golden Standard 1971",
            text: "A website that converts dollar amounts into gold based on the 1971 exchange rate of $35 per ounce.",
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
            name: "biryani-house",
            href: "about:blank",
            image: gkFerre,
            preview: gkFerrePreview,
            title: "Biryani House",
            text: "An e-commerce website for ordering authentic biryani, with secure payment and customizable options.",
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
    );
}

export default Projects;
