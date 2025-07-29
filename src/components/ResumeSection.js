"use client"

import { useState } from "react"
import Button from "./ui/Button"
import { useToast } from "../contexts/ToastContext"
import "./ResumeSection.css"

const ResumeSection = ({ resumeConfig }) => {
  const { toast } = useToast()
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = async () => {
    setIsDownloading(true)

    try {
      // In a real application, you would have your actual PDF file in the public folder
      // For demo purposes, we'll simulate a download
      const link = document.createElement("a")
      link.href = `/resume/${resumeConfig.filename}` // This should point to your actual PDF file
      link.download = resumeConfig.filename
      link.target = "_blank"

      // Simulate download delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      toast({
        title: "Resume Downloaded!",
        description: "Thank you for downloading my resume. I look forward to hearing from you!",
        variant: "success",
      })
    } catch (error) {
      console.error("Download error:", error)
      toast({
        title: "Download Error",
        description: "Sorry, there was an issue downloading the resume. Please try again.",
        variant: "error",
      })
    } finally {
      setIsDownloading(false)
    }
  }

  const handleView = () => {
    // Open resume in new tab for viewing
    window.open(`/resume/${resumeConfig.filename}`, "_blank")
  }

  return (
    <section id="resume" className="resume-section">
      <div className="resume-container">
        <div className="resume-content">
          <div className="resume-text">
            <h2 className="resume-title">My Resume</h2>
            <p className="resume-description">
              Interested in learning more about my experience and qualifications? Download my resume to get a
              comprehensive overview of my skills, work history, and achievements.
            </p>
            <div className="resume-stats">
              <div className="stat-item">
                <span className="stat-number">3+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">15+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Technologies</span>
              </div>
            </div>
          </div>

          <div className="resume-actions">
            <div className="resume-card">
              <div className="resume-icon">📄</div>
              <h3 className="resume-card-title">Professional Resume</h3>
              <p className="resume-card-description">
                Complete overview of my professional experience, education, and technical skills.
              </p>
              <div className="resume-buttons">
                <Button onClick={handleDownload} disabled={isDownloading} className="download-button">
                  {isDownloading ? (
                    <>
                      <span className="loading-spinner"></span>
                      Downloading...
                    </>
                  ) : (
                    <>📥 {resumeConfig.downloadText}</>
                  )}
                </Button>
                <Button variant="outline" onClick={handleView} className="view-button bg-transparent">
                  👁️ {resumeConfig.viewText}
                </Button>
              </div>
              <p className="file-info">PDF • Last updated: {new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ResumeSection
