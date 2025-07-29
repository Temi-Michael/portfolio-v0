"use server"

interface ContactFormInput {
  name: string
  email: string
  subject: string
  message: string
}

export async function sendContactEmail(formData: ContactFormInput) {
  // In a real application, you would integrate with an email sending service here,
  // such as Resend, Nodemailer, SendGrid, or a custom API endpoint.
  // For demonstration purposes, we'll just log the data and simulate success.

  console.log("Received contact form submission:")
  console.log(`Name: ${formData.name}`)
  console.log(`Email: ${formData.email}`)
  console.log(`Subject: ${formData.subject}`)
  console.log(`Message: ${formData.message}`)
  console.log(`Recipient Email (configured): temi.michael.codes@gmail.com`)

  // Simulate a delay for network request
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Simulate success
  return { success: true, message: "Email sent successfully!" }

  // Simulate failure (uncomment to test error state)
  // return { success: false, error: "Failed to send email. Please try again." };
}
