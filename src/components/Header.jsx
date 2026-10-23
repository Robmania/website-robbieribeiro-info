import { Fragment } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'

function CloseIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronDownIcon(props) {
  return (
    <svg viewBox="0 0 8 6" aria-hidden="true" {...props}>
      <path
        d="M1.75 1.75 4 4.25l2.25-2.5"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SunIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  )
}

function MoonIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
  )
}

function MobileNavItem({ href, children }) {
  return (
    <li>
      <Popover.Button as={Link} href={href} className="block py-3">
        {children}
      </Popover.Button>
    </li>
  )
}

function MobileNavigation(props) {
  return (
    <Popover {...props}>
      <Popover.Button className="group flex h-11 items-center rounded-full border border-dust px-4 text-sm font-medium text-carbon dark:border-charcoal dark:text-floral">
        Menu
        <ChevronDownIcon className="ml-3 h-auto w-2 stroke-charcoal dark:stroke-dust" />
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 z-50 bg-carbon/40 backdrop-blur-sm dark:bg-black/70" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-floral p-8 ring-1 ring-dust dark:bg-carbon dark:ring-charcoal"
          >
            <div className="flex flex-row-reverse items-center justify-between">
              <Popover.Button aria-label="Close menu" className="-m-1 p-1">
                <CloseIcon className="h-6 w-6 text-charcoal dark:text-dust" />
              </Popover.Button>
              <h2 className="text-sm font-medium text-charcoal dark:text-dust">
                Navigation
              </h2>
            </div>
            <nav className="mt-6">
              <ul className="-my-2 divide-y divide-dust text-base text-carbon dark:divide-charcoal dark:text-floral">
                <MobileNavItem href="/">Home</MobileNavItem>
                <MobileNavItem href="/about">About</MobileNavItem>
                <MobileNavItem href="/skills">Skills</MobileNavItem>
                <MobileNavItem href="/experience">Experience</MobileNavItem>
                <MobileNavItem href="/work">Work</MobileNavItem>
                <MobileNavItem href="/contact">Contact</MobileNavItem>
              </ul>
            </nav>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}

function NavItem({ href, children }) {
  let { pathname } = useRouter()
  let isActive =
    pathname === href ||
    (href === '/work' && pathname.startsWith('/projects/'))

  return (
    <li>
      <Link
        href={href}
        className={clsx(
          'block border-b py-1 transition',
          isActive
            ? 'border-accent-500 text-carbon dark:text-floral'
            : 'border-transparent text-charcoal hover:text-carbon dark:text-dust dark:hover:text-floral'
        )}
      >
        {children}
      </Link>
    </li>
  )
}

function DesktopNavigation(props) {
  return (
    <nav aria-label="Main" {...props}>
      <ul className="flex gap-7 text-[15px]">
        <NavItem href="/about">About</NavItem>
        <NavItem href="/skills">Skills</NavItem>
        <NavItem href="/experience">Experience</NavItem>
        <NavItem href="/work">Work</NavItem>
        <NavItem href="/contact">Contact</NavItem>
      </ul>
    </nav>
  )
}

function ModeToggle() {
  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }

  function toggleMode() {
    disableTransitionsTemporarily()

    let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    let isSystemDarkMode = darkModeMediaQuery.matches
    let isDarkMode = document.documentElement.classList.toggle('dark')

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode
    } else {
      window.localStorage.isDarkMode = isDarkMode
    }
  }

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      className="flex h-11 w-11 items-center justify-center rounded-full border border-dust text-carbon transition hover:border-carbon dark:border-charcoal dark:text-floral dark:hover:border-dust"
      onClick={toggleMode}
    >
      <MoonIcon className="h-[18px] w-[18px] dark:hidden" />
      <SunIcon className="hidden h-[18px] w-[18px] dark:block" />
    </button>
  )
}

export function Header() {
  return (
    <header className="relative z-50 pt-8">
      <Container>
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="text-[17px] font-semibold tracking-tight text-carbon dark:text-floral"
          >
            Robbie Ribeiro<span className="text-accent-500">.</span>
          </Link>
          <div className="flex items-center gap-7">
            <DesktopNavigation className="hidden md:block" />
            <MobileNavigation className="md:hidden" />
            <ModeToggle />
          </div>
        </div>
      </Container>
    </header>
  )
}
