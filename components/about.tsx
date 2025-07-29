import Image from "next/image"

interface AboutProps {
  aboutText: string[]
}

export function About({ aboutText }: AboutProps) {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Me</h2>
              {aboutText.map((paragraph, index) => (
                <p
                  key={index}
                  className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <Image
            src="/placeholder.svg?height=400&width=600"
            width="600"
            height="400"
            alt="About Section Image"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
          />
        </div>
      </div>
    </section>
  )
}
