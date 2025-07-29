import "./SocialLinks.css"

const iconMap = {
  GitHub: "🔗",
  Linkedin: "💼",
  Twitter: "🐦",
  Mail: "📧",
}

const SocialLinks = ({ socialLinks }) => {
  return (
    <section id="social-links" className="social-links">
      <div className="social-container">
        <h2 className="social-title">Connect with Me</h2>
        <div className="social-icons">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label={link.name}
            >
              <span className="social-icon">{iconMap[link.name]}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SocialLinks
