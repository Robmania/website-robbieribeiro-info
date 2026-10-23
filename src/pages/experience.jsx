import Head from 'next/head'
import Link from 'next/link'

import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import { getProject } from '@/lib/projects'

function ExperienceSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-8">{children}</div>
    </Section>
  )
}

function Contract({
  id,
  title,
  project,
  event: location,
  projects = [],
  children,
}) {
  return (
    <article id={id} className="scroll-mt-8 pb-4">
      {location && (
        <p className="flex items-center gap-2.5 text-sm font-medium uppercase tracking-[0.08em] text-charcoal dark:text-dust">
          <span
            className="h-2 w-2 rounded-full bg-accent-500"
            aria-hidden="true"
          />
          {location}
        </p>
      )}
      <h3 className="mt-3 text-[22px] font-semibold tracking-tight">
        {title}
      </h3>
      {project && (
        <p className="mt-1 text-base font-medium text-charcoal dark:text-dust">
          {project}
        </p>
      )}
      <div className="mt-4 text-base leading-7 text-charcoal dark:text-dust [&_strong]:font-semibold [&_strong]:text-carbon dark:[&_strong]:text-floral">
        {children}
      </div>
      {projects.length > 0 && (
        <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-[15px] font-medium">
          {projects.map((slug) => (
            <li key={slug}>
              <Link
                href={`/projects/${slug}`}
                className="border-b border-accent-500 pb-0.5 transition hover:text-charcoal dark:hover:text-dust"
              >
                {getProject(slug).name} project →
              </Link>
            </li>
          ))}
        </ul>
      )}
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
          <ExperienceSection title="Feb 2026 - Present">
            <Contract
              title="Fluenty IT - Principal Architect & Developer"
              id="fluenty-payroll"
              project="Project: Nigerian Payroll Platform"
              event="Remote"
              projects={['nigerian-payroll-platform']}
            >
              <p>
                Sole architect and developer of a multi-tenant payroll platform for Nigerian employers, now in pilot. It calculates PAYE tax and statutory deductions, and produces payslips and compliance reports.
              </p>
              <p className="mt-2">
                I own architecture, development, AWS infrastructure, releases and client support. I use AI-assisted development to ship faster.
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Built an event-sourced .NET API on the Critter Stack (Wolverine and Marten on PostgreSQL).</li>
                <li>Implemented Nigerian statutory rules: PAYE, pension, NHF, NHIS, NSITF and ITF.</li>
                <li>Built the Next.js web app, including an employee self-service portal.</li>
                <li>Met GDPR and NDPA requirements: field-level encryption, audit logging and data retention.</li>
                <li>Run deployments on AWS (EKS, RDS, KMS) with Terraform.</li>
              </ul>
              <p className="mt-4 text-sm">
                Critter Stack, Wolverine, Marten, Event Sourcing, .NET, PostgreSQL, Next.js, AWS
              </p>
            </Contract>
          </ExperienceSection>

          <ExperienceSection title="Jun 2025 - Present">
            <Contract
              id="fluenty-leasing"
              title="Fluenty IT - Principal Architect & Developer"
              project="Project: LISA lead-to-lease platform for Inospace"
              event="Remote"
              projects={['lisa']}
            >
              <p>
                As the team scaled down, I stepped into the role of <strong>Principal Architect &amp; Developer</strong> at <strong>Fluenty IT</strong>, taking full ownership of the product’s architecture, development, and support. I own the technical roadmap and the architectural decisions around scalability and system evolution, and act as the primary technical point of contact for an actively used, multi-tenant production system.
              </p>
              <p className="mt-2">
                I continue to develop the C# REST API and its dynamic field design, maintain the CQRS implementation and AWS SQS-driven microservices architecture, and manage ongoing optimisation of the PostgreSQL data layer. Alongside this, I’ve extended into agentic software development, using AI-driven tooling to accelerate delivery without compromising code quality.
              </p>
              <p className="mt-4 text-sm">
                C#, .NET Core, ASP.NET Core, React, REST API, CQRS, PostgreSQL, AWS SQS, Agentic AI Tooling
              </p>
            </Contract>
          </ExperienceSection>

          <ExperienceSection title="Mar 2023 - Jun 2025">
            <Contract
              id="fluenty-leasing-lead"
              title="Fluenty IT - Senior Lead .NET Developer"
              project="Project: LISA lead-to-lease platform for Inospace"
              event="Remote"
              projects={['lisa']}
            >
              <p>
                As a <strong>Senior Lead .NET Developer</strong> at <strong>Fluenty</strong>, I spearheaded the development of <strong>LISA</strong>, a greenfield lead-to-lease platform for <strong>Inospace</strong>, tackling unique domain and technical challenges. LISA went on to win Proptech Innovator of the Year in 2024. I drove critical architectural decisions, designing and implementing a robust C# REST API to support complex leasing operations.
              </p>
              <p className="mt-2">
                By leveraging the CQRS pattern and innovative design principles, I ensured scalable operations, integrating AWS SQS for messaging and PostgreSQL for data management, delivering a high-performance solution tailored to client needs.
              </p>
              <p className="mt-4 text-sm">
                C#, .NET Core, REST API, CQRS, PostgreSQL, AWS SQS, Auth0
              </p>
            </Contract>
          </ExperienceSection>

          <ExperienceSection title="Dec 2021 - Sep 2022">
            <Contract
              id="clifford-chance"
              title="Clifford Chance - Senior Full-Stack Developer"
              project="Project: Partnership Services Management Application"
              event="Remote"
            >
              <p>
                Contracted as a <strong>Senior Full-Stack Developer</strong> at <strong>Clifford Chance</strong>, I led the modernization of a global Partnership Services Management Application handling complex partner remuneration. I re-architected the C# API to .NET 6 and upgraded the frontend to Angular 14, enhancing functionality and user experience.
              </p>
              <p className="mt-2">
                I extended test coverage through unit and integration testing, applied the CQRS pattern for optimized data handling, and improved codebase efficiency, ensuring robust performance across diverse tax jurisdictions.
              </p>
              <p className="mt-4 text-sm">
                Angular 14, C#, .NET 6, REST API, CQRS, MS SQL, TDD
              </p>
            </Contract>
          </ExperienceSection>

          <ExperienceSection title="Nov 2021 - Dec 2021">
            <Contract
              id="dvt-kantar"
              title="DVT (Kantar) - Senior C# Developer"
              project="Project: Kantar QA Automation Platform"
              event="Remote"
            >
              <p>
                At <strong>DVT</strong>, I joined the Kantar QA Automation Platform project as a <strong>Senior C# Developer</strong>, focusing on building a new API to support a React-based frontend. My contributions centered on delivering a reliable and efficient backend to power quality assurance workflows.
              </p>
              <p className="mt-2">
                I implemented the CQRS pattern and rigorous test-driven development practices, ensuring seamless integration with Azure SQL and high-quality deliverables within a tight timeline.
              </p>
              <p className="mt-4 text-sm">
                C#, REST API, CQRS, Azure SQL, TDD
              </p>
            </Contract>
          </ExperienceSection>

          <ExperienceSection title="Mar 2017 - Present">
            <Contract
              id="codestream"
              title="CodeStream - Partner & Software Developer"
              project="Projects: DigitalTwin, Cosplay Platform, ContractorPro"
              event="South Africa - Remote"
              projects={[
                'digitaltwin',
                'cosplay-platform',
                'contractorpro',
              ]}
            >
              <p>
                From 2020 to 2022 I co-founded <strong>DigitalTwin</strong> at <strong>CodeStream</strong>, as architect and lead developer: a multi-tenant IoT SaaS platform that tracks Bluetooth-tagged assets in real time through fixed gateways. I designed CQRS APIs with audit trails and pre-aggregated reporting, Azure Functions for high-volume message ingestion, and SignalR for live location updates. In 2022 a partner acquired DigitalTwin and turned it into a retail trolley management system, and we led the full technical handover.
              </p>
              <p className="mt-2">
                I established and managed CI/CD pipelines through Azure DevOps, deploying to Azure PaaS environments, ensuring scalability and reliability for enterprise-grade IoT applications.
              </p>
              <p className="mt-2">
                From 2024 to 2025 I also worked on two of CodeStream’s own products: <strong>Cosplay Platform</strong>, a social platform for entering, judging and publishing results of cosplay contests at fan conventions, and <strong>ContractorPro</strong>, which lets South African contractors manage leads, quotes, job cards and invoices, and lets homeowners find them. Both pair React Native apps with C# / ASP.NET Core APIs on Azure.
              </p>
              <p className="mt-4 text-sm">
                C#, ASP.NET Core, CQRS, Azure Functions, Azure Service Bus, SignalR, Azure SQL, Azure AD B2C, Angular, Xamarin, React Native, Azure Cosmos DB, Marten, Wolverine, PostgreSQL, TDD
              </p>
            </Contract>
          </ExperienceSection>

          <ExperienceSection title="Mar 2017 - Jan 2022">
            <Contract
              id="spar"
              title="The SPAR Group - Senior Software Developer"
              project="Projects: Vendor Master Data Management UI, Central DataLake"
              event="South Africa - Hybrid"
              projects={['spar-central-datalake']}
            >
              <p>
                As a <strong>Senior Software Developer</strong> at <strong>The SPAR Group</strong>, I contributed to multiple internal projects, including the development of a Vendor Master Data Management user interface and leading the creation of SPAR’s central DataLake reporting database. I played a key role in migrating systems to the Azure Cloud.
              </p>
              <p className="mt-2">
                By leveraging Azure Data Factory and Synapse, I enhanced data processing capabilities, delivering scalable reporting solutions and intuitive interfaces to support business operations.
              </p>
              <p className="mt-4 text-sm">
                Azure PaaS, Azure SQL, Azure Data Factory, Azure Synapse, Angular, C#, REST API
              </p>
            </Contract>
          </ExperienceSection>

          <ExperienceSection title="Jan 2012 - Mar 2017">
            <Contract
              id="smeasy"
              title="SMEasy - Senior Software Developer"
              project="Project: SMEasy - Business Management & Accounting Application"
              event="South Africa - On-site"
            >
              <p>
                As a <strong>Senior Software Developer</strong> at <strong>SMEasy</strong>, a FinTech startup, I led the development of new modules for a SaaS product tailored to small businesses. My work focused on building scalable, user-friendly features to support financial and operational needs.
              </p>
              <p className="mt-2">
                I integrated Azure cloud services and optimized data workflows, delivering robust solutions that enhanced the platform’s functionality and user adoption.
              </p>
              <p className="mt-4 text-sm">
                C#, ASP.NET, SQL Server, Azure
              </p>
            </Contract>
          </ExperienceSection>
        </div>
        <p className="mt-10 border-t border-dust pt-8 text-sm text-charcoal dark:border-charcoal dark:text-dust">
        Details of earlier roles can be shared if needed. 
        </p>
      </SimpleLayout>
    </>
  )
}
