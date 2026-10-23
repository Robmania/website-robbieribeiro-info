import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { ProjectCard } from '@/components/ProjectCard'
import portraitImage from '@/images/portrait.jpg'
import { projects } from '@/lib/projects'

let roles = [
  {
    id: 'fluenty-payroll',
    dates: 'Feb 2026 — Present',
    role: 'Principal Architect & Developer',
    company: 'Fluenty IT · Nigerian Payroll Platform',
    summary:
      'Sole architect and developer of a multi-tenant payroll platform, now in pilot. It calculates PAYE tax and statutory deductions, and produces payslips and compliance reports.',
    tags: 'Wolverine · Marten · Event Sourcing · .NET · PostgreSQL · Next.js · AWS',
  },
  {
    id: 'fluenty-leasing',
    dates: 'Jun 2025 — Present',
    role: 'Principal Architect & Developer',
    company: 'Fluenty IT · LISA lead-to-lease platform for Inospace',
    summary:
      'Full ownership of architecture, roadmap and support for LISA, the Proptech Innovator of the Year 2024 that runs leasing daily at every Inospace site, now delivered with agentic AI tooling.',
    tags: 'C# · .NET · React · CQRS · PostgreSQL · AWS SQS',
  },
  {
    id: 'clifford-chance',
    dates: 'Dec 2021 — Sep 2022',
    role: 'Senior Full-Stack Developer',
    company: 'Clifford Chance · Partnership Services',
    summary:
      'Modernised a global partner-remuneration application: re-architected the API to .NET 6 and upgraded the frontend to Angular 14.',
    tags: 'Angular · C# · .NET 6 · CQRS · MS SQL · TDD',
  },
]

let skills = [
  {
    group: 'AI-assisted development',
    items:
      'Agentic coding workflows, AI code review and test generation, context engineering.',
  },
  {
    group: 'Back end',
    items: 'C#, .NET, ASP.NET, REST APIs, CQRS, event sourcing, microservices.',
  },
  { group: 'Front end', items: 'Angular, React, Next.js, Tailwind CSS.' },
  {
    group: 'Cloud',
    items: 'Azure Functions and App Services, AWS EKS, RDS and SQS, Terraform.',
  },
  {
    group: 'Data',
    items: 'SQL Server, PostgreSQL, Cosmos DB, query optimisation.',
  },
  {
    group: 'Practice',
    items: 'TDD, Clean Architecture, SOLID, CI/CD, mentoring.',
  },
]

let highlights = [
  {
    title: '20+ years',
    text: 'Shipping production software, from code to cloud.',
  },
  {
    title: 'Legal · Property · Payroll',
    text: 'Complex domains, regulated data.',
  },
  { title: 'AI-first', text: 'Agentic development since June 2025.' },
]

function ArrowDownIcon(props) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M8 3v9m0 0 3.5-3.5M8 12 4.5 8.5" />
    </svg>
  )
}

function UnderlineLink({ className = '', ...props }) {
  return (
    <Link
      className={`border-b border-accent-500 pb-0.5 transition hover:text-charcoal dark:hover:text-dust ${className}`}
      {...props}
    />
  )
}

function SectionLabel({ id, children }) {
  return (
    <h2
      id={id}
      className="text-sm font-medium uppercase tracking-[0.08em] text-charcoal dark:text-dust"
    >
      {children}
    </h2>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Robbie Ribeiro - Full-stack software developer and architect</title>
        <meta
          name="description"
          content="Over 20 years of industry experience developing software solutions."
        />
      </Head>
      <Container>
        <section className="flex flex-wrap items-center gap-12 pt-20 pb-24 sm:pt-24 sm:pb-28">
          <div className="min-w-0 flex-[1_1_520px]">
            <p className="mb-6 flex items-center gap-2.5 text-sm font-medium uppercase tracking-[0.08em] text-charcoal dark:text-dust">
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full bg-accent-500"
              />
              Software engineer &amp; architect
            </p>
            <h1 className="text-[clamp(56px,8vw,104px)] font-bold leading-[0.95] tracking-[-0.045em]">
              Robbie
              <br />
              Ribeiro<span className="text-accent-500">.</span>
            </h1>
            <p className="mt-8 max-w-xl text-2xl font-medium tracking-tight">
              Full-stack engineer and architect for C#, .NET, Angular and
              Azure.
            </p>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-charcoal dark:text-dust">
              20+ years building scalable, testable software for global
              clients. Today I architect event-sourced .NET platforms and work
              AI-first: agents handle scaffolding, refactoring and tests, while
              I own the architecture and review every change.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/robbieribeiro-cv-october2026.pdf"
                className="inline-flex min-h-[48px] items-center gap-2.5 rounded-full bg-carbon px-6 text-[15px] font-medium text-floral transition hover:bg-charcoal dark:bg-floral dark:text-carbon dark:hover:bg-dust"
              >
                Download CV
                <ArrowDownIcon className="h-4 w-4" />
              </Link>
              <Link
                href="/experience"
                className="inline-flex min-h-[48px] items-center rounded-full border border-dust px-6 text-[15px] font-medium transition hover:border-carbon dark:border-charcoal dark:hover:border-dust"
              >
                View experience
              </Link>
            </div>
            <div className="mt-8 flex gap-6 text-[15px]">
              <UnderlineLink href="https://github.com/Robmania">
                GitHub
              </UnderlineLink>
              <UnderlineLink href="https://www.linkedin.com/in/robbieribeiro">
                LinkedIn
              </UnderlineLink>
            </div>
          </div>
          <div className="flex min-w-[240px] flex-[0_1_380px] justify-center">
            <Image
              src={portraitImage}
              alt="Portrait of Robbie Ribeiro"
              sizes="(min-width: 1024px) 380px, 80vw"
              className="h-auto w-full max-w-[380px] mix-blend-multiply dark:aspect-square dark:max-w-[340px] dark:rounded-full dark:bg-floral dark:object-cover dark:object-[50%_30%] dark:mix-blend-normal dark:ring-[6px] dark:ring-charcoal"
              priority
            />
          </div>
        </section>

        <section
          aria-labelledby="glance"
          className="border-t border-dust pt-10 pb-24 dark:border-charcoal"
        >
          <SectionLabel id="glance">At a glance</SectionLabel>
          <div className="mt-8 grid gap-8 lg:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.title}>
                <p className="text-2xl font-semibold tracking-tight">
                  {item.title}
                </p>
                <p className="mt-2 text-base text-charcoal dark:text-dust">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="recent" className="pb-24">
          <div className="mb-6 flex flex-wrap items-baseline justify-between gap-4">
            <h2
              id="recent"
              className="text-4xl font-semibold tracking-tight"
            >
              Recent experience
            </h2>
            <UnderlineLink
              href="/experience"
              className="text-[15px] font-medium"
            >
              All experience →
            </UnderlineLink>
          </div>
          {roles.map((r) => (
            <Link
              key={r.id}
              href={`/experience#${r.id}`}
              className="group flex flex-wrap gap-x-12 gap-y-4 border-t border-dust py-8 dark:border-charcoal"
            >
              <p className="flex-[0_0_180px] text-[15px] text-charcoal dark:text-dust">
                {r.dates}
              </p>
              <div className="min-w-0 flex-[1_1_420px]">
                <h3 className="text-[22px] font-semibold tracking-tight transition group-hover:text-charcoal dark:group-hover:text-dust">
                  {r.role}
                </h3>
                <p className="mt-1 text-base font-medium text-charcoal dark:text-dust">
                  {r.company}
                </p>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-charcoal dark:text-dust">
                  {r.summary}
                </p>
                <p className="mt-4 text-sm text-charcoal dark:text-dust">
                  {r.tags}
                </p>
                <span className="mt-5 inline-block border-b border-accent-500 pb-0.5 text-[15px] font-medium">
                  Read more{' '}
                  <span
                    aria-hidden="true"
                    className="inline-block transition group-hover:translate-x-0.5"
                  >
                    →
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </section>

        <section aria-labelledby="projects" className="pb-24">
          <SectionLabel id="projects">Projects</SectionLabel>
          <p className="mt-4 text-4xl font-semibold tracking-tight">
            End-to-end systems
          </p>
          <p className="mt-3 text-lg text-charcoal dark:text-dust">
            The problem, the design, and what shipped.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {projects.slice(0, 4).map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <UnderlineLink href="/work" className="mt-8 inline-block text-[15px] font-medium">
            All projects →
          </UnderlineLink>
        </section>

        <section aria-labelledby="skills" className="pb-24">
          <h2 id="skills" className="text-4xl font-semibold tracking-tight">
            Skills snapshot
          </h2>
          <div className="mt-8 grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((s) => (
              <div
                key={s.group}
                className="border-t-2 border-carbon pt-4 dark:border-floral"
              >
                <h3 className="text-[17px] font-semibold">{s.group}</h3>
                <p className="mt-2 text-base leading-relaxed text-charcoal dark:text-dust">
                  {s.items}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="contact"
          className="flex flex-wrap items-end justify-between gap-8 rounded-3xl bg-carbon px-8 py-14 text-floral dark:bg-charcoal sm:px-12 sm:py-16"
        >
          <div className="flex-[1_1_420px]">
            <h2
              id="contact"
              className="text-[clamp(36px,5vw,56px)] font-semibold leading-[1.05] tracking-[-0.035em]"
            >
              Let’s build something<span className="text-accent-500">.</span>
            </h2>
            <p className="mt-4 text-[17px] text-dust">
              B2B through CodeStream · Remote · Durban, South Africa
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex min-h-[48px] items-center rounded-full bg-accent-500 px-6 text-[15px] font-semibold text-carbon transition hover:bg-accent-400"
            >
              Send a message
            </Link>
            <Link
              href="https://www.linkedin.com/in/robbieribeiro"
              className="inline-flex min-h-[48px] items-center rounded-full border border-charcoal px-6 text-[15px] font-medium text-floral transition hover:border-dust dark:border-dust"
            >
              LinkedIn
            </Link>
          </div>
        </section>
      </Container>
    </>
  )
}
