import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Card from "./Card.jsx"
import Content from "./Content.jsx"
import Projects from "./Projects.jsx"
import Contact from "./Contact.jsx"

function App() {
  return(
    <div className="app-container">
      <main className="content">
        <Header />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App
