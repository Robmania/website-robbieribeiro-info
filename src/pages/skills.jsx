import Head from 'next/head'
import { SimpleLayout } from '@/components/SimpleLayout'

export default function Skills() {
    return (
      <>
        <Head>
          <title>Skills - Robbie Ribeiro</title>
          <meta
            name="description"
            content="A collection of my insights on software development, technical mentorship, and crafting robust, scalable systems, organized chronologically."
          />
        </Head>
        <SimpleLayout
      title="Skills & Expertise"
      intro="I’m a seasoned full-stack developer with deep expertise across the Microsoft .NET ecosystem, specializing in end-to-end software solutions, from database management to server-side logic and dynamic user interfaces."
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          <ul className='text-zinc-600 dark:text-zinc-400'>
            <li>C# / .NET Technologies (Framework, Core, ASP.NET)</li>
            <li>Microsoft Azure, AWS (Cloud Services, Architecture, Deployment)</li>
            <li>SQL Server/PostgreSQL / Database Design & Optimization</li>
            <li>Frontend Development (JavaScript, HTML, CSS)</li>
            <li>DevOps Practices / CI-CD Pipelines</li>
            <li>Agile Methodologies / Team Collaboration</li>
          </ul>
        </div>
      </div>
    </SimpleLayout>
      </>
    )
  }
  