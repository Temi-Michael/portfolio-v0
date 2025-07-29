import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { SocialLinks } from "@/components/social-links"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import { personalInfo } from "@/lib/constants"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero
          name={personalInfo.name}
          title={personalInfo.title}
          tagline={personalInfo.tagline}
          profileImage={personalInfo.profileImage}
        />
        <About aboutText={personalInfo.aboutText} />
        <SocialLinks socialLinks={personalInfo.socialLinks} />
        <ContactForm recipientEmail={personalInfo.contactEmail} />
      </main>
      <Footer />
    </div>
  )
}
