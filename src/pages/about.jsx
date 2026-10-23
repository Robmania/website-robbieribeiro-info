import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex items-center text-[15px] font-medium transition hover:text-charcoal dark:hover:text-dust"
      >
        <Icon className="h-6 w-6 flex-none fill-charcoal transition group-hover:fill-accent-500 dark:fill-dust" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Robbie Ribeiro</title>
        <meta
          name="description"
          content="I’m Robbie Ribeiro. I currently live in Durban, South Africa."
        />
      </Head>
      <Container className="mt-16 sm:mt-24">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="h-auto w-full mix-blend-multiply dark:aspect-square dark:rounded-full dark:bg-floral dark:object-cover dark:object-[50%_30%] dark:mix-blend-normal dark:ring-[6px] dark:ring-charcoal"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-5xl font-bold tracking-[-0.04em] sm:text-6xl">
              I’m Robbie Ribeiro<span className="text-accent-500">.</span>
            </h1>
            <p className="mt-6 text-2xl font-medium tracking-tight">
              Seasoned Full‑Stack Engineer &amp; Architect | C#, .NET, Angular
              &amp; Azure | 20+ years
            </p>
            <div className="mt-6 space-y-7 text-lg leading-relaxed text-charcoal dark:text-dust [&_strong]:font-semibold [&_strong]:text-carbon dark:[&_strong]:text-floral">
              <p>
                I am a seasoned software developer contracting locally and internationally with over 20 years of expertise in the full spectrum of Microsoft .NET technologies.
                I have a proven track record in executing end-to-end software development lifecycle, spanning initial conception, comprehensive analysis, and robust design, through to implementation and ongoing support.
                My portfolio spans diverse industries, demonstrating adaptability and a deep understanding of various sector-specific challenges.
              </p>

              <p>
                I’ve worked <strong>AI-first</strong> since 2025: coding agents
                handle scaffolding, refactoring and tests, while I own the
                architecture and security, and review every change before it
                ships.
              </p>

              <p>
                I am a partner in a software development consultancy{' '}
                <a
                  href="https://www.codestream.co.za"
                  className="font-medium text-carbon underline decoration-accent-500 decoration-2 underline-offset-4 transition hover:text-charcoal dark:text-floral dark:hover:text-dust"
                >
                  CodeStream
                </a>
                .
              </p>

              <p>
                I believe in creating {' '}
                <strong>clean</strong>, <strong>straightforward</strong>,
                and <strong>testable code</strong>.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://github.com/Robmania"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/robbieribeiro"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <li className="mt-8 border-t border-dust pt-8 text-[15px] font-medium dark:border-charcoal">
                Email me on{' '}
                <a
                  href="mailto:robbie@codestream.co.za"
                  className="border-b border-accent-500 pb-0.5"
                >
                  robbie@codestream.co.za
                </a>
              </li>
              <li className="mt-3 text-[15px] font-medium">
                Call me on{' '}
                <a
                  href="tel:+27824972398"
                  className="border-b border-accent-500 pb-0.5"
                >
                  +27 (0)82 497 2398
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
