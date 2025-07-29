"use client"

import { useState } from "react"
import { useTheme } from "../contexts/ThemeContext"
import Button from "./ui/Button"
import "./Header.css"

const Header = () => {
  const { theme, toggleTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <span className="logo-icon">🏔️</span>
          <span className="logo-text">Temi Michael</span>
        </div>

        <nav className="header-nav desktop-nav">
          <button onClick={() => scrollToSection("hero")} className="nav-link">
            Home
          </button>
          <button onClick={() => scrollToSection("about")} className="nav-link">
            About
          </button>
          <button onClick={() => scrollToSection("resume")} className="nav-link">
            Resume
          </button>
          <button onClick={() => scrollToSection("projects")} className="nav-link">
            Projects
          </button>
          <button onClick={() => scrollToSection("contact")} className="nav-link">
            Contact
          </button>
        </nav>

        <div className="header-actions">
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="theme-toggle">
            {theme === "light" ? "🌙" : "☀️"}
          </Button>

          <Button variant="ghost" size="icon" className="mobile-menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            ☰
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="mobile-nav">
          <button onClick={() => scrollToSection("hero")} className="mobile-nav-link">
            Home
          </button>
          <button onClick={() => scrollToSection("about")} className="mobile-nav-link">
            About
          </button>
          <button onClick={() => scrollToSection("resume")} className="mobile-nav-link">
            Resume
          </button>
          <button onClick={() => scrollToSection("projects")} className="mobile-nav-link">
            Projects
          </button>
          <button onClick={() => scrollToSection("contact")} className="mobile-nav-link">
            Contact
          </button>
        </div>
      )}
    </header>
  )
}

export default Header
