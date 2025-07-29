import Link from "next/link"

export function Footer() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="text-xs text-muted-foreground">&copy; 2024 Temi Michael. All rights reserved.</p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link href="#hero" className="text-xs hover:underline underline-offset-4">
          Home
        </Link>
        <Link href="#about" className="text-xs hover:underline underline-offset-4">
          About
        </Link>
        <Link href="#projects" className="text-xs hover:underline underline-offset-4">
          Projects
        </Link>
        <Link href="#contact" className="text-xs hover:underline underline-offset-4">
          Contact
        </Link>
      </nav>
    </footer>
  )
}
