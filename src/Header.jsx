import React, { useState } from "react";
import profilePic from "./assets/laptop-avatar.png";
import happyLaptop from "./assets/happy-laptop.png";

function Header({ onSayHiClick }) {
    const [activePic, setActivePic] = useState("profile"); // Manage active image

    const handleMouseEnter = () => {
        setActivePic("happy"); // Show happyLaptop on hover
    };

    const handleMouseLeave = () => {
        setActivePic("profile"); // Revert to profilePic on hover out
    };

    return (
        <header className="header">
            <div className="header-container">
                <div className="left-column">
                    <h1 className="header-title">Hi! I'm Gian.</h1>
                    <p className="header-description">
                        I’m a web developer who crafts sleek, responsive sites and apps. With a passion for new tools and playful experimentation, I blend front-end finesse with back-end power to create digital experiences users will love.
                    </p>
                    {/* Change image on hover */}
                    <button
                        className="header-button"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={onSayHiClick} // Add click event for scrolling
                    >
                        Say Hi!
                    </button>
                </div>
                <div className="right-column">
                    {/* Image wrapper for overlapping images */}
                    <div className="image-wrapper">
                        <img
                            className={`profile-pic ${activePic === "profile" ? "active" : ""}`}
                            src={profilePic}
                            alt="Profile"
                        />
                        <img
                            className={`profile-pic ${activePic === "happy" ? "active" : ""}`}
                            src={happyLaptop}
                            alt="Happy Laptop"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
