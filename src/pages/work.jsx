import Head from 'next/head'

import { ProjectCard } from '@/components/ProjectCard'
import { SimpleLayout } from '@/components/SimpleLayout'
import { projects } from '@/lib/projects'

export default function Work() {
  return (
    <>
      <Head>
        <title>Work - Robbie Ribeiro</title>
        <meta
          name="description"
          content="End-to-end systems: the problem, the design, and what shipped."
        />
      </Head>
      <SimpleLayout
        title="Work."
        headerWidth="max-w-3xl"
        intro="End-to-end systems I’ve architected and built — the problem, the design, and what shipped."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </SimpleLayout>
    </>
  )
}
