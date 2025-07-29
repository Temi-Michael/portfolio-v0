import { ThemeProvider } from "./contexts/ThemeContext"
import { ToastProvider } from "./contexts/ToastContext"
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import ProjectsSection from "./components/ProjectsSection"
import ResumeSection from "./components/ResumeSection"
import SocialLinks from "./components/SocialLinks"
import ContactForm from "./components/ContactForm"
import Footer from "./components/Footer"
import { personalInfo } from "./lib/constants"
import "./App.css"

function App() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <div className="App">
          <Header />
          <main>
            <Hero
              name={personalInfo.name}
              title={personalInfo.title}
              tagline={personalInfo.tagline}
              profileImage={personalInfo.profileImage}
              resumeConfig={personalInfo.resume}
            />
            <About aboutText={personalInfo.aboutText} />
            <ProjectsSection projects={personalInfo.projects} />
            <ResumeSection resumeConfig={personalInfo.resume} />
            <SocialLinks socialLinks={personalInfo.socialLinks} />
            <ContactForm recipientEmail={personalInfo.contactEmail} />
          </main>
          <Footer />
        </div>
      </ToastProvider>
    </ThemeProvider>
  )
}

export default App
