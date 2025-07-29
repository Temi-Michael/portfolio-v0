import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface HeroProps {
  name: string
  title: string
  tagline: string
  profileImage: string
}

export function Hero({ name, title, tagline, profileImage }: HeroProps) {
  return (
    <section id="hero" className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Hi, I'm {name}</h1>
              <h2 className="max-w-[700px] text-muted-foreground md:text-xl">{title}</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">{tagline}</p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="#projects">
                <Button>View Projects</Button>
              </Link>
              <Link href="#contact">
                <Button variant="outline">Contact Me</Button>
              </Link>
            </div>
          </div>
          <Image
            src={profileImage || "/placeholder.svg"}
            width="600"
            height="600"
            alt="Profile Picture"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
          />
        </div>
      </div>
    </section>
  )
}
