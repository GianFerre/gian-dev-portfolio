import Card from "./Card.jsx"
import thumbnail from './assets/project-icon.png'
import archetype from './assets/archetype-chronicles-thumbnail.png'
import goldReserves from './assets/gold-reserves.png'
import flag from './assets/fictional-nation.png'
import gkFerre from './assets/gk-ferre.png'
import dice from './assets/dice-and-dungeons.png'
import freeBGMS from './assets/freeBGMS.png'
import quizsnap from './assets/quizsnap-box.png'

function Projects() {
    return (
        <div className="project-container">
            <h1 className="project-container-title">My Works</h1>
            <div className="card-organizer">
                <a href="https://gianferre.github.io/quizsnap/" target="_blank" rel="noopener noreferrer" className="card-link">
                    <Card
                        img={quizsnap}
                        title="QuizSnap"
                        description="A web app that lets users easily create, customize, and share quizzes. With a simple interface, it makes quiz-building fun and hassle-free for everyone."
                    />
                </a>
                <a href="https://your-gold-standard-link.com" target="_blank" rel="noopener noreferrer" className="card-link">
                    <Card
                        img={goldReserves}
                        title="Golden Standard 1971"
                        description="A website that converts dollar amounts into gold based on the 1971 exchange rate of $35 per ounce. It educates users on the gold standard’s history with an interactive calculator, timelines, and visual data."
                    />
                </a>
                <a href="https://your-design-nation-link.com" target="_blank" rel="noopener noreferrer" className="card-link">
                    <Card
                        img={flag}
                        title="Design-a-Nation"
                        description="An interactive app where users can design custom national flags, choosing colors, symbols, and government types. It offers creative fun and educational insights into flag symbolism and government systems."
                    />
                </a>
                <a href="https://your-biryani-house-link.com" target="_blank" rel="noopener noreferrer" className="card-link">
                    <Card
                        img={gkFerre}
                        title="Biryani House"
                        description="An e-commerce website that lets customers easily order authentic biryani online. It offers customizable menu options, secure payment methods, and convenient delivery or pick-up."
                    />
                </a>
                <a href="https://your-dice-dungeons-link.com" target="_blank" rel="noopener noreferrer" className="card-link">
                    <Card
                        img={dice}
                        title="Dice & Dungeons"
                        description="A mini RPG where players use dice rolls to battle, solve challenges, and explore dungeons. With customizable characters and turn-based combat, each adventure offers unique outcomes."
                    />
                </a>
                <a href="https://your-freebgms-link.com" target="_blank" rel="noopener noreferrer" className="card-link">
                    <Card
                        img={freeBGMS}
                        title="Free BGMs"
                        description="A collection of royalty-free background music tracks for use in games, videos, and other creative projects. All music is composed and available for free download."
                    />
                </a>
            </div>
        </div>
    );
}

export default Projects;
