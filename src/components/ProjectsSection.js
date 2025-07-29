"use client"

import { useState } from "react"
import Button from "./ui/Button"
import "./ProjectsSection.css"

const ProjectsSection = ({ projects }) => {
  const [activeFilter, setActiveFilter] = useState("All")
  const [visibleProjects, setVisibleProjects] = useState(6)

  const categories = ["All", "Featured", "Full-Stack", "Frontend", "Backend"]

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "All") return true
    if (activeFilter === "Featured") return project.featured
    return project.category === activeFilter
  })

  const displayedProjects = filteredProjects.slice(0, visibleProjects)

  const handleLoadMore = () => {
    setVisibleProjects((prev) => prev + 3)
  }

  const handleFilterChange = (filter) => {
    setActiveFilter(filter)
    setVisibleProjects(6)
  }

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="projects-title">My Projects</h2>
          <p className="projects-description">
            Here are some of the projects I've worked on. Each project represents a unique challenge and learning
            experience that has contributed to my growth as a developer.
          </p>
        </div>

        <div className="projects-filters">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleFilterChange(category)}
              className={`filter-button ${activeFilter === category ? "active" : ""}`}
            >
              {category}
              {category === "Featured" && <span className="featured-badge">⭐</span>}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {displayedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length > visibleProjects && (
          <div className="load-more-container">
            <Button onClick={handleLoadMore} variant="outline" className="load-more-button bg-transparent">
              Load More Projects
            </Button>
          </div>
        )}

        {filteredProjects.length === 0 && (
          <div className="no-projects">
            <p>No projects found for the selected filter.</p>
          </div>
        )}
      </div>
    </section>
  )
}

const ProjectCard = ({ project }) => {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <div className={`project-card ${project.featured ? "featured" : ""}`}>
      {project.featured && <div className="featured-label">Featured</div>}

      <div className="project-image-container">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className={`project-image ${imageLoaded ? "loaded" : ""}`}
          onLoad={() => setImageLoaded(true)}
        />
        <div className="project-overlay">
          <div className="project-links">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link live-link"
                aria-label={`View ${project.title} live demo`}
              >
                🔗 Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link github-link"
                aria-label={`View ${project.title} source code`}
              >
                📁 Source Code
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="project-content">
        <div className="project-header">
          <h3 className="project-title">{project.title}</h3>
          <span className="project-category">{project.category}</span>
        </div>

        <p className="project-description">{project.description}</p>

        <div className="project-technologies">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-actions">
          {project.liveUrl && (
            <Button
              as="a"
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              size="sm"
              className="project-button"
            >
              View Live
            </Button>
          )}
          {project.githubUrl && (
            <Button
              as="a"
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="sm"
              className="project-button bg-transparent"
            >
              View Code
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectsSection
