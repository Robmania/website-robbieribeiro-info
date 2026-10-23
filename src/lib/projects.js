// Single source for the home page project cards and the /projects/[slug]
// detail pages. Keep the facts in step with src/pages/experience.jsx;
// experienceId is the id of the matching role there.
export let projects = [
  {
    slug: 'nigerian-payroll-platform',
    experienceId: 'fluenty-payroll',
    name: 'Nigerian Payroll Platform',
    company: 'Fluenty IT',
    dates: '2026',
    role: 'Principal Architect & Developer',
    problem:
      'Nigerian employers need payroll that gets PAYE tax and statutory deductions right, under GDPR and NDPA.',
    design:
      'Event-sourced .NET API on Wolverine and Marten, field-level encryption and audit logging, Next.js web app with employee self-service.',
    shipped:
      'A multi-tenant platform now in pilot, producing payslips and compliance reports, run on AWS with Terraform.',
    stack: [
      'Wolverine',
      'Marten',
      'Event Sourcing',
      '.NET',
      'PostgreSQL',
      'Next.js',
      'AWS',
      'Terraform',
    ],
    context: [
      'Nigerian employers must calculate PAYE tax and a set of statutory deductions — pension, NHF, NHIS, NSITF and ITF — for every employee, every pay run, and produce payslips and compliance reports to match. Payroll data is personal and regulated, so the platform also has to meet GDPR and NDPA requirements.',
    ],
    approach: [
      'I am the sole architect and developer. The API is event-sourced .NET on the Critter Stack — Wolverine and Marten on PostgreSQL — so every change to an employee or pay run is recorded as an event. Nigerian statutory rules are implemented in the domain, and data protection is built in through field-level encryption, audit logging and data retention.',
      'The web app is built in Next.js and includes an employee self-service portal. Infrastructure runs on AWS (EKS, RDS, KMS), managed with Terraform. I use AI-assisted development throughout to ship faster.',
    ],
    outcome: [
      'A multi-tenant payroll platform for Nigerian employers, now in pilot. I own its architecture, development, infrastructure, releases and client support.',
    ],
  },
  {
    slug: 'lisa',
    experienceId: 'fluenty-leasing',
    name: 'LISA lead-to-lease platform',
    company: 'Fluenty IT for Inospace',
    dates: '2023 — Present',
    role: 'Senior Lead .NET Developer, then Principal Architect & Developer',
    problem:
      'Small-business tenants needed to get from first enquiry to a signed lease faster and with less friction.',
    design:
      'Greenfield multi-tenant C# REST API with a dynamic field design, CQRS, and AWS SQS-driven microservices over PostgreSQL.',
    shipped:
      'Proptech Innovator of the Year 2024, now running leasing daily at every Inospace site.',
    stack: [
      'C#',
      '.NET Core',
      'ASP.NET Core',
      'React',
      'REST API',
      'CQRS',
      'PostgreSQL',
      'AWS SQS',
      'Auth0',
    ],
    context: [
      'Inospace — South Africa’s largest last-mile logistics and privately owned storage company — wanted to move SME tenants from enquiry to signed lease faster and with less friction. Fluenty built LISA, a greenfield lead-to-lease platform, to do it. The leasing domain brought unique business and technical challenges, and the system had to scale as a multi-tenant product.',
    ],
    approach: [
      'As Senior Lead .NET Developer I drove the critical architectural decisions and designed a C# REST API with a dynamic field design to support complex leasing operations. CQRS keeps reads and writes scalable, AWS SQS carries messaging between microservices, and PostgreSQL manages the data.',
      'When the team scaled down in June 2025 I became Principal Architect & Developer, taking ownership of the technical roadmap, scalability and system evolution, and the ongoing optimisation of the PostgreSQL data layer. I also brought in agentic, AI-driven tooling to speed up delivery without compromising code quality.',
    ],
    outcome: [
      'LISA won Proptech Innovator of the Year in 2024. It started as a tool for the open market and now runs Inospace’s own leasing process daily, at every site.',
      'I am its primary technical point of contact and own its architecture, development and support.',
    ],
  },
  {
    slug: 'cosplay-platform',
    experienceId: 'codestream',
    name: 'Cosplay Platform',
    company: 'CodeStream',
    dates: '2024 — 2025',
    role: 'Partner & Software Developer',
    problem:
      'Cosplay contests at large fan conventions like Comic Con need one place to enter, run, judge and publish results.',
    design:
      'React Native app for Android and iOS over a C# / ASP.NET Core API, with Azure Cosmos DB and messaging between components.',
    shipped:
      'A social platform where cosplayers build profiles, enter contests, are judged and see their results.',
    stack: [
      'React Native',
      'C#',
      'ASP.NET Core',
      'Azure Cosmos DB',
      'Azure DevOps',
      'Docker',
    ],
    context: [
      'Cosplay contests at large fan conventions such as Comic Con involve a lot of moving parts: contestants entering, organisers running and managing the contest, and judges scoring it. CodeStream set out to bring all of it — and the contestant’s own presence — onto one social platform.',
    ],
    approach: [
      'The client is a React Native app for Android and iOS, backed by a C# / ASP.NET Core API hosted on Azure, with Azure Cosmos DB as the datastore. Components communicate through messaging, and records are eventually consistent.',
      'Delivery runs through an Azure DevOps CI/CD pipeline that takes every change from unit tests through integration tests, with Docker as part of the setup.',
    ],
    outcome: [
      'Contestants can set up a profile with photos and their contest history, enter a contest, be judged on the platform and view the results — the whole contest, from entry to results, in one place.',
    ],
  },
  {
    slug: 'contractorpro',
    experienceId: 'codestream',
    name: 'ContractorPro',
    company: 'CodeStream',
    dates: '2024 — 2025',
    role: 'Partner & Software Developer',
    problem:
      'South African contractors juggle leads, quotes, job cards and invoices, while homeowners struggle to find the right trade.',
    design:
      'React Native app over a C# / ASP.NET Core API, event-sourced with Marten on PostgreSQL and Wolverine over Azure Service Bus.',
    shipped:
      'One app for contractors to quote, document and invoice jobs, and for customers to find and approve them.',
    stack: [
      'React Native',
      'C#',
      'ASP.NET Core',
      'Marten',
      'Wolverine',
      'PostgreSQL',
      'Azure Service Bus',
      'Azure',
      'Docker',
    ],
    context: [
      'South African contractors typically manage leads, quotes, job cards and invoices across separate tools, and home customers have no easy way to find a contractor for the job they need done. ContractorPro brings both sides together in one platform.',
    ],
    approach: [
      'The client is a React Native app for Android and iOS, backed by a C# / ASP.NET Core API hosted on Azure. Marten stores event-sourced documents in PostgreSQL, and Wolverine handles messaging between components over Azure Service Bus in an event-driven design.',
      'Unit and integration tests run locally in Docker, and GitHub Actions runs the CI/CD pipeline.',
    ],
    outcome: [
      'Contractors capture leads, send quotes for customer approval, document jobs with photos and invoice from the same app. Customers find contractors by trade and location, describe their problem through a guided diagnostic, and review quotes and completed work.',
    ],
  },
  {
    slug: 'digitaltwin',
    experienceId: 'codestream',
    name: 'DigitalTwin',
    company: 'CodeStream',
    dates: '2020 — 2022',
    role: 'Co-founder, Architect & Lead Developer',
    problem:
      'Businesses had no live view of where their tagged assets were, or which had gone missing.',
    design:
      'Multi-tenant IoT SaaS: BLE tags read by fixed gateways, CQRS APIs, Azure Functions for messaging and SignalR for live locations.',
    shipped:
      'A live asset-tracking platform, acquired by a partner in 2022 and turned into a retail trolley management system.',
    stack: [
      'C#',
      'ASP.NET Core',
      'CQRS',
      'Azure Functions',
      'Azure Service Bus',
      'SignalR',
      'SQL Server',
      'Angular',
      'Xamarin',
      'Azure AD B2C',
      'Azure DevOps',
    ],
    context: [
      'Businesses tracking physical assets lacked a live picture of where each item was, what stock they held and what had gone missing. We co-founded DigitalTwin at CodeStream to give them one, as a multi-tenant SaaS product.',
    ],
    approach: [
      'Assets carry Bluetooth Low Energy (BLE) tags that fixed gateways read in real time. As co-founder, architect and lead developer, I helped design the platform end to end: CQRS APIs with separate read and write models, audit trails and pre-aggregated reporting; Azure Functions handling high-volume message ingestion and PDF generation; and SignalR pushing location updates live to the web and mobile apps.',
      'We built it test-first and shipped through Azure DevOps CI/CD pipelines into Azure.',
    ],
    outcome: [
      'A live asset-tracking platform with real-time inventory, missing-asset alerts and mobile inventory scans. In 2022 a partner acquired DigitalTwin and turned it into a retail trolley management system; we led the full technical handover.',
    ],
  },
  {
    slug: 'spar-central-datalake',
    experienceId: 'spar',
    name: 'Central DataLake',
    company: 'The SPAR Group',
    dates: '2017 — 2022',
    role: 'Senior Software Developer',
    problem:
      'SPAR needed one central reporting database as its systems moved to the cloud.',
    design:
      'Data pipelines on Azure Data Factory and Azure Synapse, alongside a vendor master data management UI.',
    shipped:
      'SPAR’s central DataLake reporting database, delivered as part of its Azure migration.',
    stack: [
      'Azure PaaS',
      'Azure SQL',
      'Azure Data Factory',
      'Azure Synapse',
      'Angular',
      'C#',
      'REST API',
    ],
    context: [
      'The SPAR Group was migrating its systems to the Azure cloud and needed a central reporting database to serve the business, as well as better tools for managing vendor master data.',
    ],
    approach: [
      'I led the creation of SPAR’s central DataLake reporting database, using Azure Data Factory and Azure Synapse to improve data processing. Alongside it I developed a Vendor Master Data Management user interface in Angular, backed by a C# REST API, and played a key role in migrating systems to Azure.',
    ],
    outcome: [
      'Scalable reporting from one central DataLake, and intuitive interfaces supporting SPAR’s business operations.',
    ],
  },
]

export function getProject(slug) {
  return projects.find((project) => project.slug === slug)
}
