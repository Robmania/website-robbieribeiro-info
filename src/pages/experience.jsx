import Head from 'next/head'

import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ExperienceSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-8">{children}</div>
    </Section>
  )
}

function Contract({ title, event: location, children }) {
  return (
    <article className="rounded-2xl bg-zinc-50 p-6 shadow-sm ring-1 ring-zinc-900/5 transition hover:shadow-md dark:bg-zinc-800/40 dark:ring-white/10 dark:hover:bg-zinc-800/60 sm:p-8">
      {location && (
        <p className="flex items-center text-sm text-zinc-400 dark:text-zinc-500">
          <span
            className="mr-3 h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"
            aria-hidden="true"
          />
          {location}
        </p>
      )}
      <h3 className="mt-3 text-lg font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
        {title}
      </h3>
      <div className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
        {children}
      </div>
    </article>
  )
}

export default function Experience() {
  return (
    <>
      <Head>
        <title>Experience - Robbie Ribeiro</title>
        <meta
          name="description"
          content="With a solid track record of success, I bring years of experience and a commitment to delivering value to any team I join."
        />
      </Head>
      <SimpleLayout
        title="Experience."
        headerWidth="max-w-3xl"
        intro="With a solid track record of success, I bring years of experience and a commitment to delivering value to any team I join."
      >
        <div className="space-y-12">
          <ExperienceSection title="Jun 2025 - Present">
            <Contract
              title="Fluenty IT - Principal Architect & Developer"
              event="Remote"
            >
              <p>
                As the team scaled down, I stepped into the role of <strong>Principal Architect &amp; Developer</strong> at <strong>Fluenty IT</strong>, taking full ownership of the product’s architecture, development, and support. I own the technical roadmap and the architectural decisions around scalability and system evolution, and act as the primary technical point of contact for an actively used, multi-tenant production system.
              </p>
              <p className="mt-2">
                I continue to develop the C# REST API and its dynamic field design, maintain the CQRS implementation and AWS SQS-driven microservices architecture, and manage ongoing optimisation of the PostgreSQL data layer. Alongside this, I’ve extended into agentic software development, using AI-driven tooling to accelerate delivery without compromising code quality.
              </p>
              <p className="mt-2 font-semibold">
                C#, .NET Core, ASP.NET Core, React, REST API, CQRS, PostgreSQL, AWS SQS, Agentic AI Tooling
              </p>
            </Contract>
          </ExperienceSection>

          <ExperienceSection title="Mar 2023 - Jun 2025">
            <Contract
              title="Fluenty IT - Senior Lead .NET Developer"
              event="Remote"
            >
              <p>
                As a <strong>Senior Lead .NET Developer</strong> at <strong>Fluenty</strong>, I spearheaded the development of a greenfield Property Leasing Management System, tackling unique domain and technical challenges. I drove critical architectural decisions, designing and implementing a robust C# REST API to support complex leasing operations.
              </p>
              <p className="mt-2">
                By leveraging the CQRS pattern and innovative design principles, I ensured scalable operations, integrating AWS SQS for messaging and PostgreSQL for data management, delivering a high-performance solution tailored to client needs.
              </p>
              <p className="mt-2 font-semibold">
                C#, .NET Core, REST API, CQRS, PostgreSQL, AWS SQS, Auth0
              </p>
            </Contract>
          </ExperienceSection>

          <ExperienceSection title="Dec 2021 - Sep 2022">
            <Contract
              title="Clifford Chance - Senior Full-Stack Developer"
              event="Remote"
            >
              <p>
                Contracted as a <strong>Senior Full-Stack Developer</strong> at <strong>Clifford Chance</strong>, I led the modernization of a global Partnership Services Management Application handling complex partner remuneration. I re-architected the C# API to .NET 6 and upgraded the frontend to Angular 14, enhancing functionality and user experience.
              </p>
              <p className="mt-2">
                I extended test coverage through unit and integration testing, applied the CQRS pattern for optimized data handling, and improved codebase efficiency, ensuring robust performance across diverse tax jurisdictions.
              </p>
              <p className="mt-2 font-semibold">
                Angular 14, C#, .NET 6, REST API, CQRS, MS SQL, TDD
              </p>
            </Contract>
          </ExperienceSection>

          <ExperienceSection title="Nov 2021 - Dec 2021">
            <Contract
              title="DVT (Kantar) - Senior C# Developer"
              event="Remote"
            >
              <p>
                At <strong>DVT</strong>, I joined the Kantar QA Automation Platform project as a <strong>Senior C# Developer</strong>, focusing on building a new API to support a React-based frontend. My contributions centered on delivering a reliable and efficient backend to power quality assurance workflows.
              </p>
              <p className="mt-2">
                I implemented the CQRS pattern and rigorous test-driven development practices, ensuring seamless integration with Azure SQL and high-quality deliverables within a tight timeline.
              </p>
              <p className="mt-2 font-semibold">
                C#, REST API, CQRS, Azure SQL, TDD
              </p>
            </Contract>
          </ExperienceSection>

          <ExperienceSection title="Mar 2017 - Present">
            <Contract
              title="CodeStream - Partner & Software Developer"
              event="South Africa - Remote"
            >
              <p>
                At <strong>CodeStream</strong>, I was instrumental in developing an IoT SaaS solution, focusing on high-volume data ingestion. I designed and implemented core components using Azure Functions and messaging services to handle real-time data streams.
              </p>
              <p className="mt-2">
                I established and managed CI/CD pipelines through Azure DevOps, deploying to Azure PaaS environments, ensuring scalability and reliability for enterprise-grade IoT applications.
              </p>
              <p className="mt-2 font-semibold">
                C#, ASP.NET Core, Azure Functions, Azure SQL, Azure Service Bus, Azure B2C, Azure B2B, TDD
              </p>
            </Contract>
          </ExperienceSection>

          <ExperienceSection title="Mar 2017 - Jan 2022">
            <Contract
              title="The SPAR Group - Senior Software Developer"
              event="South Africa - Hybrid"
            >
              <p>
                As a <strong>Senior Software Developer</strong> at <strong>The SPAR Group</strong>, I contributed to multiple internal projects, including the development of a Vendor Master Data Management user interface and leading the creation of SPAR’s central DataLake reporting database. I played a key role in migrating systems to the Azure Cloud.
              </p>
              <p className="mt-2">
                By leveraging Azure Data Factory and Synapse, I enhanced data processing capabilities, delivering scalable reporting solutions and intuitive interfaces to support business operations.
              </p>
              <p className="mt-2 font-semibold">
                Azure PaaS, Azure SQL, Azure Data Factory, Azure Synapse, Angular, C#, REST API
              </p>
            </Contract>
          </ExperienceSection>

          <ExperienceSection title="Jan 2012 - Mar 2017">
            <Contract
              title="SMEasy - Senior Software Developer"
              event="South Africa - On-site"
            >
              <p>
                As a <strong>Senior Software Developer</strong> at <strong>SMEasy</strong>, a FinTech startup, I led the development of new modules for a SaaS product tailored to small businesses. My work focused on building scalable, user-friendly features to support financial and operational needs.
              </p>
              <p className="mt-2">
                I integrated Azure cloud services and optimized data workflows, delivering robust solutions that enhanced the platform’s functionality and user adoption.
              </p>
              <p className="mt-2 font-semibold">
                C#, ASP.NET, SQL Server, Azure
              </p>
            </Contract>
          </ExperienceSection>
        </div>
        <p className="mt-10 text-sm text-zinc-600 dark:text-zinc-400">
        Details of earlier roles can be shared if needed. 
        </p>
      </SimpleLayout>
    </>
  )
}
