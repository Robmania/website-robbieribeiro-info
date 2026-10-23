import Link from 'next/link'

import { Container } from '@/components/Container'

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-carbon dark:hover:text-floral"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 border-t border-dust pt-8 pb-12 text-sm text-charcoal dark:border-charcoal dark:text-dust sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Robbie Ribeiro</p>
          <div className="flex gap-6">
            <NavLink href="/about">About</NavLink>
            <NavLink href="/skills">Skills</NavLink>
            <NavLink href="/experience">Experience</NavLink>
            <NavLink href="/work">Work</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>
        </div>
      </Container>
    </footer>
  )
}
