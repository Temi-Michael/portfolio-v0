"use client"

import { useState } from "react"
import { useToast } from "../contexts/ToastContext"
import Button from "./ui/Button"
import Input from "./ui/Input"
import Textarea from "./ui/Textarea"
import Card from "./ui/Card"
import "./ContactForm.css"

const ContactForm = ({ recipientEmail }) => {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name || formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters."
    }

    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address."
    }

    if (!formData.subject || formData.subject.length < 5) {
      newErrors.subject = "Subject must be at least 5 characters."
    }

    if (!formData.message || formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters."
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate API call
      console.log("Received contact form submission:")
      console.log(`Name: ${formData.name}`)
      console.log(`Email: ${formData.email}`)
      console.log(`Subject: ${formData.subject}`)
      console.log(`Message: ${formData.message}`)
      console.log(`Recipient Email: ${recipientEmail}`)

      // Simulate delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast({
        title: "Message Sent!",
        description: "Your message has been successfully sent. I'll get back to you soon!",
        variant: "success",
      })

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      console.error("Error sending contact form:", error)
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again later.",
        variant: "error",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <Card className="contact-card">
          <div className="card-header">
            <h2 className="card-title">Contact Me</h2>
            <p className="card-description">Have a question or want to work together? Fill out the form below.</p>
          </div>
          <div className="card-content">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                {errors.name && <p className="error-message">{errors.name}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {errors.email && <p className="error-message">{errors.email}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Subject of your message"
                  value={formData.subject}
                  onChange={handleInputChange}
                />
                {errors.subject && <p className="error-message">{errors.subject}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message here..."
                  value={formData.message}
                  onChange={handleInputChange}
                />
                {errors.message && <p className="error-message">{errors.message}</p>}
              </div>

              <Button type="submit" className="submit-button" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </Card>
      </div>
    </section>
  )
}

export default ContactForm
