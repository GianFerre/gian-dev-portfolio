import React, { useRef } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";

function App() {
    const contactRef = useRef(null); // Reference for Contact section

    // Function to scroll to the contact section
    const scrollToContact = () => {
        contactRef.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="app-container">
            <main className="content">
                {/* Pass the scrollToContact function to the Header */}
                <Header onSayHiClick={scrollToContact} />
                <Projects />
                {/* Pass the contactRef to the Contact component */}
                <Contact ref={contactRef} />
            </main>
            <Footer />
        </div>
    );
}

export default App;
