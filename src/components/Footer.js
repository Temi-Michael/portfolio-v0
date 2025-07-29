"use client"
import "./Footer.css"

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-copyright">&copy; 2024 Temi Michael. All rights reserved.</p>
        <nav className="footer-nav">
          <button onClick={() => scrollToSection("hero")} className="footer-link">
            Home
          </button>
          <button onClick={() => scrollToSection("about")} className="footer-link">
            About
          </button>
          <button onClick={() => scrollToSection("resume")} className="footer-link">
            Resume
          </button>
          <button onClick={() => scrollToSection("projects")} className="footer-link">
            Projects
          </button>
          <button onClick={() => scrollToSection("contact")} className="footer-link">
            Contact
          </button>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
