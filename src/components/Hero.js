"use client"
import Button from "./ui/Button"
import "./Hero.css"

const Hero = ({ name, title, tagline, profileImage, resumeConfig }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleResumeDownload = () => {
    const link = document.createElement("a")
    link.href = `/resume/${resumeConfig.filename}`
    link.download = resumeConfig.filename
    link.target = "_blank"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Hi, I'm {name}</h1>
            <h2 className="hero-subtitle">{title}</h2>
            <p className="hero-tagline">{tagline}</p>
            <div className="hero-actions">
              <Button onClick={() => scrollToSection("projects")}>View Projects</Button>
              <Button variant="outline" onClick={() => scrollToSection("contact")}>
                Contact Me
              </Button>
              <Button variant="outline" onClick={handleResumeDownload} className="resume-download-hero bg-transparent">
                📥 Download Resume
              </Button>
            </div>
          </div>
          <div className="hero-image">
            <img
              src={profileImage || "/placeholder.svg?height=600&width=600"}
              alt="Profile Picture"
              className="profile-image"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
