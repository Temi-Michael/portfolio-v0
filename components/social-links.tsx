import type React from "react"
import Link from "next/link"
import { GitlabIcon as GitHub, Linkedin, Twitter, Mail } from "lucide-react"

interface SocialLink {
  name: string
  url: string
  icon: React.ElementType
}

interface SocialLinksProps {
  socialLinks: SocialLink[]
}

const iconMap: { [key: string]: React.ElementType } = {
  GitHub: GitHub,
  Linkedin: Linkedin,
  Twitter: Twitter,
  Mail: Mail,
}

export function SocialLinks({ socialLinks }: SocialLinksProps) {
  return (
    <section id="social-links" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-8">Connect with Me</h2>
        <div className="flex justify-center gap-6">
          {socialLinks.map((link) => {
            const IconComponent = iconMap[link.name]
            return (
              <Link
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {IconComponent && <IconComponent className="h-8 w-8" />}
                <span className="sr-only">{link.name}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
