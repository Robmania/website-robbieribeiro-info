import Head from 'next/head'
import { SimpleLayout } from '@/components/SimpleLayout'

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
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-10">
            <div>
              <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 mb-2">Back-End Development</h3>
              <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-400 space-y-1">
                <li>C#, .NET Core, ASP.NET, REST APIs</li>
                <li>Entity Framework, CQRS, MediatR</li>
                <li>Microservices Architecture</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 mb-2">Front-End Development</h3>
              <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-400 space-y-1">
                <li>JavaScript, HTML, CSS</li>
                <li>Angular, Razor, Tailwind CSS</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 mb-2">Cloud & DevOps</h3>
              <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-400 space-y-1">
                <li>Microsoft Azure (Functions, App Services, Data Factory)</li>
                <li>AWS (S3, SQS)</li>
                <li>CI/CD Pipelines, GitHub Actions, Azure DevOps</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 mb-2">Data & Storage</h3>
              <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-400 space-y-1">
                <li>SQL Server, PostgreSQL, Cosmos DB</li>
                <li>Database Design & Query Optimization</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 mb-2">Practices & Methodologies</h3>
              <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-400 space-y-1">
                <li>TDD, Clean Architecture, SOLID Principles</li>
                <li>Agile/Scrum, Team Mentorship</li>
              </ul>
            </div>
          </div>
        </div>

      </SimpleLayout>
    </>
  )
}
