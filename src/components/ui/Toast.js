"use client"

import { useEffect } from "react"
import "./Toast.css"

const Toast = ({ title, description, variant = "default", onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, 5000)

    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <div className={`toast toast-${variant}`}>
      <div className="toast-content">
        <div className="toast-header">
          <h4 className="toast-title">{title}</h4>
          <button className="toast-close" onClick={onClose}>
            ×
          </button>
        </div>
        {description && <p className="toast-description">{description}</p>}
      </div>
    </div>
  )
}

export default Toast
