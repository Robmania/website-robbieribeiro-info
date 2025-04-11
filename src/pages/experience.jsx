import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ExperienceSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Contract({ title, event: location, children }) {
  return (
    <Card as="article">
      <Card.Title as="h3">{title}</Card.Title>
      {location && <Card.Eyebrow decorate>{location}</Card.Eyebrow>}
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Experience() {
  return (
    <>
      <Head>
        <title>Experience - Robbie Ribeiro</title>
        <meta
          name="description"
          content="I have over 20 years of experience in software development."
        />
      </Head>
      <SimpleLayout
        title="Experience."
        intro="With over 20 years of experience I have a lot to offer."
      >
        <div className="space-y-20">
          <ExperienceSection title="Mar 2023 - Present">
            <Contract
              title="Fluenty - Senior Lead .NET Developer"
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

          <ExperienceSection title="2017 - Present">
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
                Azure PaaS, Azure SQL, Azure Data Factory, Azure Synapse, Angular 14, C#, REST API
              </p>
            </Contract>
          </ExperienceSection>

          <ExperienceSection title="2017 - 2017">
            <Contract
              title="CodeStream - Senior Software Developer"
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

          <ExperienceSection title="2015 - 2017">
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
                C#, ASP.NET Core, Azure PaaS, Azure SQL, Azure Data Factory, Angular 14
              </p>
            </Contract>
          </ExperienceSection>
        </div>
        <p className="mt-10 text-sm text-zinc-600 dark:text-zinc-400">
          Older experience available on request.
        </p>
      </SimpleLayout>
    </>
  )
}
