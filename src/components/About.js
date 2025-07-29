import "./About.css"

const About = ({ aboutText }) => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="about-title">About Me</h2>
            {aboutText.map((paragraph, index) => (
              <p key={index} className="about-paragraph">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="about-image">
            <img src="/placeholder.svg?height=400&width=600" alt="About Section" className="about-img" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
