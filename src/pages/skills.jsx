import Head from 'next/head'
import { SimpleLayout } from '@/components/SimpleLayout'

let skillGroups = [
  {
    title: 'Agentic & AI-Assisted Development',
    intro:
      'AI-first since 2025: coding agents handle scaffolding, refactoring and tests, while I own the architecture and security, and review every change before it ships.',
    items: [
      'Agentic coding workflows embedded in day-to-day delivery',
      'AI-assisted code review, refactoring, and test generation',
      'Context engineering for large, long-lived codebases',
      'Applying AI tooling to architecture and infrastructure decisions',
    ],
  },
  {
    title: 'Back-End Development',
    items: [
      'C#, .NET Core, ASP.NET, REST APIs',
      'Entity Framework, CQRS, MediatR',
      'Microservices Architecture',
    ],
  },
  {
    title: 'Front-End Development',
    items: ['JavaScript, HTML, CSS', 'Angular, React, Razor, Tailwind CSS'],
  },
  {
    title: 'Cloud & DevOps',
    items: [
      'Microsoft Azure (Functions, App Services, Data Factory)',
      'AWS (S3, SQS)',
      'CI/CD Pipelines, GitHub Actions, Azure DevOps',
    ],
  },
  {
    title: 'Data & Storage',
    items: [
      'SQL Server, PostgreSQL, Cosmos DB',
      'Database Design & Query Optimization',
    ],
  },
  {
    title: 'Practices & Methodologies',
    items: [
      'TDD, Clean Architecture, SOLID Principles',
      'Agile/Scrum, Team Mentorship',
    ],
  },
]

export default function Skills() {
  return (
    <>
      <Head>
        <title>Skills - Robbie Ribeiro</title>
        <meta
          name="description"
          content="A collection of my insights on software development, technical mentorship, and crafting robust, scalable systems, organised chronologically."
        />
      </Head>
      <SimpleLayout
        title="Skills & Expertise"
        intro="I’m a seasoned full-stack developer with deep expertise across the Microsoft .NET ecosystem, specializing in end-to-end software solutions, from database management to server-side logic and dynamic user interfaces."
      >
        <div className="grid gap-x-12 gap-y-12 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="border-t-2 border-carbon pt-4 dark:border-floral md:first:col-span-2"
            >
              <h2 className="text-[17px] font-semibold">{group.title}</h2>
              {group.intro && (
                <p className="mt-2 max-w-3xl text-base leading-relaxed text-charcoal dark:text-dust">
                  {group.intro}
                </p>
              )}
              <ul className="mt-3 space-y-1.5 text-base text-charcoal dark:text-dust">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-[11px] h-1.5 w-1.5 flex-none rounded-full bg-accent-500"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SimpleLayout>
    </>
  )
}
